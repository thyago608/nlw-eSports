import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CreateAtBanner() {
  return (
    <section className="mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
      <div className="bg-[#2A2643] px-3 md:px-6 py-6 flex flex-col justify-between items-center md:flex-row">
        <div className="text-center mb-4 md:text-left">
          <strong className="md:text-2xl text-white font-black block">
            Não entrou seu duo ?
          </strong>
          <span className="text-sm md:text-base text-zinc-400 block">
            Publique um anúncio para encontrar mais players!
          </span>
        </div>

        <Dialog.Trigger className="text-sm py-3 px-2 md:px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 flex items-center gap-2">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </section>
  );
}
