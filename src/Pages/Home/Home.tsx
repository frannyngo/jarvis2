import { Image } from "./HomeStyles";
import ORB from "../../Assets/Orb.gif";
import { listen } from "../../Global/Functions/listen";

export default function Home() {
  //   useEffect(() => {
  listen();
  //   }, []);

  return <Image src={ORB} />;
}
