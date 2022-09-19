import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameBanner } from "./components/GameBanner";
import { Game } from "./types/Game";
import { CreateAtBanner } from "./components/CreateAtBanner";
import logoImg from "./assets/logo-nlw-esports.svg";
import { api } from "./services/api";
import { CreateAdModal } from "./components/CreateAdModal";
import "./styles/main.css";

export function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    api.get<Game[]>("/games").then((response) => setGames(response.data));
  }, []);

  return (
    <main className="max-w-7xl mx-auto flex flex-col     items-center my-20">
      <img src={logoImg} alt="logo" />
      <h1 className="text-6xl text-white font-black my-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui
      </h1>
      <section className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </section>
      <Dialog.Root>
        <CreateAtBanner />
        <CreateAdModal games={games} />
      </Dialog.Root>
    </main>
  );
}

export default App;
