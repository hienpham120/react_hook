import React, { useState } from "react";

export default function UseStateDemo(props) {
  //   const [state, setState] = useState({ like: 1 }); //=>[pt1, pt2]
  /* 
    this.state = {
        like: 1
    }
  */

  const [like, setLike] = useState(1); //Dùng trong thực tế nhiều hơn cách trên
  const [imgCar, setImgCar] = useState(
    "./assets/img/CarBasic/products/black-car.jpg"
  );
  const changeColor = (color) => {
    setImgCar(`./assets/img/CarBasic/products/${color}-car.jpg`);
  };

  return (
    <div className="container">
      <h3>Demo Use State</h3>
      <div className="card w-25 bg-dark text-white">
        <img src="https://picsum.photos/200/200" className="w-100" alt="..." />
        <div className="card-body">
          <p>{like} Like</p>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            Lilke
          </button>
        </div>
      </div>
      <h3>Bài tập chọn xe</h3>
      <div className="row">
        <div className="col-8">
          <img src={imgCar} alt="..." />
        </div>
        <div className="col-4">
          <div className="row">
            <button
              className="bg-dark text-white"
              onClick={() => {
                changeColor("steel");
              }}
            >
              steel
            </button>
            <button
              className="bg-dark text-white"
              onClick={() => {
                changeColor("black");
              }}
            >
              black
            </button>
            <button
              className="bg-danger text-white"
              onClick={() => {
                changeColor("red");
              }}
            >
              red
            </button>
            <button
              className="bg-secondary text-white"
              onClick={() => {
                changeColor("silver");
              }}
            >
              silver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
