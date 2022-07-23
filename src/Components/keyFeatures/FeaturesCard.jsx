import style from "./FeatureCard.module.css";

export const FeaturesCard = ({ img, title, desc }) => {
  return (
    <div className={style.featurecard_div}>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <span>{desc}</span>
    </div>
  );
};
