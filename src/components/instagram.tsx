import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import HeroImage from "@/assets/images/instagram.png";

export default function ProfileAvatar() {
  return (
    <span onClick={() => window.open('https://www.instagram.com/sarvan._.21/', '_blank')} className="relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:h-[3px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
    <Avatar>
      <AvatarImage src={HeroImage.src} alt="Sarvan's Instagram"/>
      <AvatarFallback>SK</AvatarFallback>
    </Avatar>
    </span>
  );
}