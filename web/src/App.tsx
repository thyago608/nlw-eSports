import "./styles/main.css";
import { MagnifyingGlassPlus } from "phosphor-react";
import logoImg from "./assets/logo-nlw-esports.svg";

export function App() {
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
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-1.png" alt="" />

          <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-game-gradient">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="#">
          <img src="/game-2.png" alt="" />
        </a>
        <a href="#">
          <img src="/game-3.png" alt="" />
        </a>
        <a href="#">
          <img src="/game-4.png" alt="" />
        </a>
        <a href="#">
          <img src="/game-5.png" alt="" />
        </a>
        <a href="#">
          <img src="/game-6.png" alt="" />
        </a>
      </section>

      <section className="mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2643] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não entrou seu duo ?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar mais players!
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
