import icon1 from "../assets/icons/116-gameboy.png";
import icon2 from "../assets/icons/day16-retro-cassette.png";
import icon3 from "../assets/icons/day18-floppy.png";
import icon4 from "../assets/icons/day38-macintosh.png";
import icon5 from "../assets/icons/day40-powerbook-100.png";
import icon6 from "../assets/icons/day42-imac.png";
import icon7 from "../assets/icons/day43-ram.png";
import icon8 from "../assets/icons/day44-hdd.png";

export default function returnIconSrc(content: number) {
  switch (content) {
    case 1:
      return icon1;
      break;
    case 2:
      return icon2;
      break;
    case 3:
      return icon3;
      break;
    case 4:
      return icon4;
      break;
    case 5:
      return icon5;
      break;
    case 6:
      return icon6;
      break;
    case 7:
      return icon7;
      break;
    case 8:
      return icon8;
      break;
    default:
      return;
      break;
  }
}
