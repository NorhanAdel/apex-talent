import { Star, Shield, MapPin, User } from "lucide-react";

export default function PlayerHeader() {
  return (
    <div  className="text-left">

      <h1 className="text-4xl font-bold">
        Cristiano Ronaldo
      </h1>

    <div dir= "ltr" className="flex   items-center text-left gap-6 mt-4">

 
  <div className="flex text-yellow-400 ">
    {[1,2,3,4,5].map((s)=>(
      <Star key={s} size={18} fill="currentColor"/>
    ))}
  </div>

 
  <div className="flex items-center gap-2 text-gray-400 text-left text-sm">
    <Shield size={16} className="text-yellow-400"/>
    <span>Goalkeeper</span>
  </div>

 
  <div className="flex items-center gap-2 text-gray-400 text-sm">
    <MapPin size={16} className="text-yellow-400"/>
    <span>Saudi Arabia</span>
  </div>

 
  <div className="flex items-center gap-2 text-gray-400 text-sm">
    <User size={16} className="text-yellow-400"/>
    <span>41 Y</span>
  </div>

</div>
    </div>
  );
}