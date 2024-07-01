import { useState } from "react";
import styles from "./Cals.module.css";

const ES6 = () => {
  const [radius, setRadius] = useState("");
  const [circle, setCircle] = useState("");

  const [triangle, setTriangle] = useState("");
  const [triangleH, setTriangleH] = useState("");
  const [triangleB, setTriangleB] = useState("");

  const [rectangle, setRectangle] = useState("");
  const [rectangleL, setRectangleL] = useState("");
  const [rectangleW, setRectangleW] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const AreaOfCircle = () => {
    setCircle(3.14 * radius * radius);
  };

  const AreaOfTriangle = () => {
    setTriangle((1 / 2) * triangleB * triangleH);
  };
  const AreaOfRectangle = () => {
    setRectangle(rectangleL * rectangleW);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* pi r*r */}
        <input
          type="number"
          value={radius}
          className={styles.ip}
          onChange={(e) => setRadius(e.target.value)}
          placeholder="enter radius"
        />
        <br />
        <button onClick={AreaOfCircle}>CircleArea</button>
        {<h4>area of circle is :{circle} </h4>}
        {/* 1/2 * b * h */}
        <input
          type="number"
          placeholder="enter base "
          value={triangleB}
          className={styles.ip}
          onChange={(e) => setTriangleB(e.target.value)}
        />{" "}
        <hr />
        <input
          type="number"
          value={triangleH}
          placeholder="enter height"
          className={styles.ip}
          onChange={(e) => setTriangleH(e.target.value)}
        />
        <br />
        <button onClick={AreaOfTriangle}>TriangleArea</button>
        {<h4>area of triangle is :{triangle} </h4>}
        {/* l*w */}
        <input
          type="number"
          placeholder="enter length "
          className={styles.ip}
          value={rectangleL}
          onChange={(e) => setRectangleL(e.target.value)}
        />{" "}
        <hr />
        <input
          type="number"
          value={rectangleW}
          className={styles.ip}
          onChange={(e) => setRectangleW(e.target.value)}
          placeholder="enter width"
        />
        <br />
        <button onClick={AreaOfRectangle}>RectArea</button>
        {<h4>area of rectangle is :{rectangle} </h4>}
      </form>
    </div>
  );
};
export default ES6;
