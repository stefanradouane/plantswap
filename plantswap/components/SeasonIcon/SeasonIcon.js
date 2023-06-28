const SeasonIcon = ({ season }) => {
  const icon = {
    spring: "🌱",
    summer: "☀️",
    autumn: "🍂",
    winter: "❄️",
  }[season];

  return icon;
};

export default SeasonIcon;
