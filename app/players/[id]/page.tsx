import PlayerGallery from "../../components/PlayerGallery";
import PlayerHeader from "../../components/PlayerHeader";
import PlayerDescription from "../../components/PlayerDescription";
import PersonalInfo from "../../components/PersonalInfo";
import FootballInfo from "../../components/FootballInfo";
import ClubCareer from "../../components/ClubCareer";
import Ratings from "../../components/Ratings";
import Reviews from "../../components/Reviews";
import WriteReview from "../../components/WriteReview";
import ReelsPlayer from "@/app/components/ReelsPlayer";

export default function Page() {
  return (
    <div  className="bg-[#020617] text-white min-h-screen py-35">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10">
 <div>

            <PlayerHeader />

            <PlayerDescription />

           

            
 <PersonalInfo />

          </div>
          <PlayerGallery />

           

        </div>
   <div className="grid md:grid-cols-2 gap-12 mt-20">

              <ClubCareer />

              <FootballInfo />

        </div>
        <ReelsPlayer/>
        <Ratings />

        <Reviews />

        <WriteReview />

      </div>

    </div>
  );
}