import { DescriptionYouWillReceive } from "./DescriptionYouWillReceive";
import { ServicePackages } from "./ServicePackages";
import "./servicesAndCost.css";
import "./servicePackages.css";

export const ServicesAndCost = () => {
  return (
    <div className="servicesAndCost">
      <DescriptionYouWillReceive />
      <ServicePackages />
    </div>
  );
};
