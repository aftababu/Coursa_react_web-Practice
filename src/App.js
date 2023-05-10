// import { useEffect, useState } from "react";
import logo from "./logo.jpg";
import "./App.css";
import { useEffect, useState } from "react";
import fakeData from "./data/Data";
import Course from "./component/Course/Course";
import Cart from "./component/Cart/Cart";

function App() {
  const [course, setCourse] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCourse(fakeData);
  });
  const handleAddEnroll = (item) => {
    const newCart = [...cart, item];
    const uniqueCart = Array.from(new Set(newCart));
    setCart(uniqueCart);
  };

  return (
    <div>
      <div className="header">
        <img src={logo} alt="" />
        <h1>Coursa</h1>
      </div>
      <div className="main-body">
        <div className="body">
          <h2>Available course</h2>

          {course.map((item) => (
            <Course
              item={item}
              key={item.id}
              handleAddEnroll={handleAddEnroll}
            ></Course>
          ))}
        </div>
        <div className="cart">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
