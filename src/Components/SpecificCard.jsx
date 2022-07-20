import { CgArrowLongRight } from "react-icons/cg";
import "./KeyFeatures.css";

export const SpecificCard = ({ img, h, p }) => {
  return (
    <div>
      <div className="small-boxes">
        <div>
          <img src={img} alt="" />
          <div className="small-box-div">
            <h4>{h}</h4>
            <p>{p}</p>
          </div>
          <div className="right-icon">
            <CgArrowLongRight />
          </div>
        </div>
      </div>
    </div>
  );
};
