import "./FeatureCard.css";

export const FeaturesCard = ({ img, title, desc }) => {
  return (
    <div className="featurecard-div">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <span>{desc}</span>
    </div>
  );
};
