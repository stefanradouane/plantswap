import * as Continent from "./icon";

const ContinentIcon = ({ iconName }) => {
  const Icon = Continent[iconName];
  if (Icon) return <Icon />;
};

export default ContinentIcon;
