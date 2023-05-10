import React from "react";
import "./Course.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
const Course = (props) => {
  const { course_img, first_name, last_name, course_name, price } = props.item;
  return (
    <div className="card">
      <div className="image">
        <img className="card-img-top" src={course_img} alt="" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{course_name} tutorial</h4>
        <p className="card-text">
          Hi , my name is {first_name} {last_name}. I am a software engineer
          since 2010. In this course you are going to learn {course_name}
        </p>
        <h3>${price}</h3>
        <div className="icon">
          <button
            className="btn my-btn"
            onClick={() => props.handleAddEnroll(props.item)}
          >
            <FontAwesomeIcon icon={faPlus} /> Enroll Now
          </button>

          <div>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalf} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
