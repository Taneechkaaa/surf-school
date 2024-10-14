import "./aboutMain.css";
import "./conquerThePeaks.css";
import { ConquerThePeaks } from "./ConquerThePeaks";
import { DescriptionSchool } from "./descriptionSchool";
import { Gallery } from "./Gallery";

export const AboutMain = () => {
  return (
    <div className="aboutMain">
      <DescriptionSchool />
      <ConquerThePeaks />
      <Gallery />
    </div>
  );
};
