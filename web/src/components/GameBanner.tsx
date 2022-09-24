interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner({ bannerUrl, title, adsCount }: GameBannerProps) {
  return (
    <a href="#" className="rounded-lg overflow-hidden">
      <img src={bannerUrl} alt={title} className="w-[100%]" />

      <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-game-gradient">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
}
