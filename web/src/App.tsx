import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Game } from "./types/Game";
import { CreateAtBanner } from "./components/CreateAtBanner";
import logoImg from "./assets/logo-nlw-esports.svg";
import { api } from "./services/api";
import { CreateAdModal } from "./components/CreateAdModal";
import { GameList } from "./components/GameList";
import "./styles/main.css";

export function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    api.get<Game[]>("/games").then((response) => setGames(response.data));
  }, []);

  return (
    <main className="max-w-7xl mx-auto flex flex-col items-center my-20">
      <img className="w-36 md:w-64" src={logoImg} alt="logo" title="logo" />
      <h1 className="text-3xl my-10 text-white font-black md:my-20 md:text-6xl">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui
      </h1>
      <GameList games={games} />
      <Dialog.Root open={modalOpen} onOpenChange={(open) => setModalOpen(open)}>
        <CreateAtBanner />
        <CreateAdModal
          open={modalOpen}
          onModalOpen={setModalOpen}
          onSetGames={setGames}
          games={games}
        />
      </Dialog.Root>
    </main>
  );
}

export default App;
