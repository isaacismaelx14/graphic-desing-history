import Montain1 from "./M1";
import Montain2 from "./M2";
import Montain3 from "./M3";
import Circle1 from "./C1";
import LightBall from "./LightBall";
export interface ISVGProps {
  width?: number | string;
  height?: number | string;
  viewBox?: string;
  ref?: React.Ref<SVGSVGElement>;
  className?: string;
}

export { Montain1, Montain2, Montain3, Circle1, LightBall };
