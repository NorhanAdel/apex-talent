import PositionSection from "../components/PositionSection";
import EventsSection from "../components/EventsSection";
import NewestPlayers from "../components/NewestPlayers";
import TransfersSection from "../components/TransfersSection";
import PlayersSlider from "../components/PlayersSlider";

export default function MainHome() {
  return (
    <main className="bg-[#020617] px-20 ">
 <PlayersSlider />
      <PositionSection />
      <EventsSection />
      <NewestPlayers />
      <TransfersSection />

    </main>
  );
}