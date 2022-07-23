import { CgArrowLongRight } from "react-icons/cg";
import style from "./KeyFeatures.module.css";

export const SpecificCard = ({ img, h, p }) => {
  return (
    <div>
      <div className={style.small_boxes}>
        <div>
          <img src={img} alt="" />
          <div className={style.small_box_div}>
            <h4>{h}</h4>
            <p>{p}</p>
          </div>
          <div className={style.right_icon}>
            <CgArrowLongRight />
          </div>
        </div>
      </div>
    </div>
  );
};
