import { ArrowLeft, ArrowRight } from "phosphor-react";
import { Carousel } from "react-responsive-carousel";
import { Game } from "../types/Game";
import { ArrowButton } from "./ArrowButton";
import { GameBanner } from "./GameBanner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/carrousel.css";

interface GameListProps {
  games: Game[];
}

export function GameList({ games }: GameListProps) {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      useKeyboardArrows={true}
      renderArrowPrev={(clickHandler, hasPrev) => (
        <ArrowButton disabled={!hasPrev} onClick={clickHandler} position="left">
          <ArrowLeft size={32} color="#FFF" />
        </ArrowButton>
      )}
      renderArrowNext={(clickHandler, hasNext) => (
        <ArrowButton
          disabled={!hasNext}
          onClick={clickHandler}
          position="right"
        >
          <ArrowRight size={32} color="#FFF" />
        </ArrowButton>
      )}
    >
      {games.map((game) => (
        <GameBanner
          key={game.id}
          bannerUrl={game.bannerUrl}
          title={game.title}
          adsCount={game._count.ads}
        />
      ))}
    </Carousel>
  );
}
