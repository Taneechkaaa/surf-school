import "./aboutMain.css";
import "./conquerThePeaks.css";
import { ConquerThePeaks } from "./ConquerThePeaks";
import { DescriptionSchool } from "./descriptionSchool";

export const AboutMain = () => {
  return (
    <div className="aboutMain">
      <DescriptionSchool />
      <ConquerThePeaks />
    </div>
  );
};
