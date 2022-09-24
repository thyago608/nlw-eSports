import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as CheckBox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Check, GameController, Spinner } from "phosphor-react";
import { api } from "../services/api";
import { Input } from "./Form/Input";
import { Game } from "../types/Game";
import { SubmitHandler, useForm } from "react-hook-form";
import { week } from "../utils/daysWeek";
import { DayWeek } from "./Form/DayWeek";

type CreateAdModalProps = {
  games: Pick<Game, "id" | "title">[];
  onModalOpen: (open: boolean) => void;
  open: boolean;
  onSetGames: (games: Game[]) => void;
};

interface FormInputs {
  game: string;
  name: string;
  yearsPlaying: string;
  discord: string;
  hourStart: string;
  hourEnd: string;
}

const formValidations = {
  game: {
    required: "O nome do jogo é obrigatório",
  },
  name: {
    required: "O seu nome de usuário obrigatório",
  },
  yearsPlaying: {
    required: "A quantidade de anos é obrigatório",
  },
  discord: {
    required: "O seu discord é obrigatório",
  },
  hourStart: {
    required: "O horário de ínicio é obrigatório",
  },
  hourEnd: {
    required: "O horário de fim é obrigatório",
  },
};

export function CreateAdModal({
  games,
  onModalOpen,
  open,
  onSetGames,
}: CreateAdModalProps) {
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [hasVoiceChannel, setHasVoiceChannel] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm<FormInputs>();
  const [loading, setLoading] = useState(false);

  const handleCreateAd: SubmitHandler<FormInputs> = async (data) => {
    const dataFormatted = {
      ...data,
      yearsPlaying: Number(data.yearsPlaying),
      weekDays: weekDays.map(Number),
      useVoiceChannel: hasVoiceChannel,
    };

    try {
      const gameID = games.find((game) => game.title === data.game)?.id;

      await api.post(`games/${gameID}/ads`, dataFormatted);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setWeekDays([]);
        setHasVoiceChannel(false);
        onModalOpen(false);

        api.get<Game[]>("/games").then((response) => onSetGames(response.data));
      }, 2000);
    } catch {
      console.log({
        message: "Sorry, not possible connect to server",
      });
    }
  };

  useEffect(() => {
    reset();
    setHasVoiceChannel(false);
    setWeekDays([]);
  }, [open]);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0" />
      <Dialog.Content className="h-[600px] md:w-[480px] fixed z-10 bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25 overflow-y-scroll scrollbar">
        <Dialog.Title className="text-xl md:text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>
        <form
          className="mt-8 flex flex-col gap-6"
          onSubmit={handleSubmit(handleCreateAd)}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="game"
              className="font-semibold text-sm md:text-base"
            >
              Qual o game?
            </label>
            <select
              id="game"
              defaultValue=""
              className={`bg-zinc-900 py-3 px-4 rounded text-sm appearance-none ${
                !!formState.errors["game"]
                  ? "border-x-2 border-y-2 border-violet-500"
                  : ""
              }`}
              {...register("game", formValidations.game)}
            >
              <option disabled value="" className="text-sm">
                Selecione o game que deseja jogar
              </option>
              {games.map((game) => (
                <option key={game.id}>{game.title}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm md:text-base">
              Seu nome(ou nickname)
            </label>
            <Input
              id="name"
              placeholder="Como te chama dentro do jogo"
              {...register("name", formValidations.name)}
              error={formState.errors}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying" className="text-sm md:text-base">
                Joga há quantos anos?
              </label>
              <Input
                id="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser ZERO"
                {...register("yearsPlaying", formValidations.yearsPlaying)}
                error={formState.errors}
              />
            </div>
            <div className="flex flex-col gap-2 justify-between">
              <label htmlFor="discord" className="text-sm md:text-base">
                Qual seu Discord?
              </label>
              <Input
                id="discord"
                placeholder="Usuário#0000"
                {...register("discord", formValidations.discord)}
                error={formState.errors}
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays" className="text-sm md:text-base">
                Quando costuma jogar?
              </label>
              <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-2"
                value={weekDays}
                onValueChange={setWeekDays}
              >
                {week.map((day) => (
                  <DayWeek
                    key={day.value}
                    value={day.value}
                    title={day.title}
                    label={day.label}
                    selected={weekDays.includes(day.value)}
                  />
                ))}
              </ToggleGroup.Root>
            </div>

            <div className="flex flex-col gap-6">
              <label htmlFor="hourStart" className="text-sm md:text-base">
                Qual o horário do dia?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  id="hourStart"
                  type="time"
                  placeholder="De"
                  className="h-10"
                  {...register("hourStart", formValidations.hourStart)}
                  error={formState.errors}
                />
                <Input
                  id="hourEnd"
                  type="time"
                  placeholder="Até"
                  className="h-10"
                  {...register("hourEnd", formValidations.hourEnd)}
                  error={formState.errors}
                />
              </div>
            </div>
          </div>

          <label className="mt-2 flex flex-row items-center gap-2 text-sm">
            <CheckBox.Root
              className="w-6 h-6 p-1 rounded bg-zinc-900"
              checked={hasVoiceChannel}
              onCheckedChange={(checked) => {
                checked === true
                  ? setHasVoiceChannel(true)
                  : setHasVoiceChannel(false);
              }}
            >
              <CheckBox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </CheckBox.Indicator>
            </CheckBox.Root>
            <span className="text-[13px] md:text-base">
              Costumo me conectar ao chat de voz
            </span>
          </label>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              disabled={loading}
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold   text-sm md:text-base disabled:opacity-20"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 text-sm md:text-base"
            >
              {loading ? (
                <Spinner className="animate-spin h-5 w-5" />
              ) : (
                <>
                  <GameController size={24} />
                  Encontrar duo
                </>
              )}
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
