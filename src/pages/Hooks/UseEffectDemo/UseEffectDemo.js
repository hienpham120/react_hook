import React, { useState, useEffect } from "react";

export default function UseEffectDemo(props) {
  const [number, setNumber] = useState(1);
  const [like, setLike] = useState(1);
  useEffect(() => {
    //callBack function chạy sau khi giao diện render
    //thay thế cả didmount và didupdate ứng vs lifecycle react
    console.log("didmount");
    console.log("didupdate");
  });
  useEffect(() => {
    //Thay thế didmount thường gọi api hoặc sử dụng thư viện trong hàm này
    console.log("didmount"); //tham số 2 mảng [] => chạy 1 lần sau render
  }, []);

  useEffect(() => {
    //Chạy lần đầu và khi nào state (like) thay đổi thì hàm này sẽ kích hoạt
    console.log("did update like");
  }, [like]);

  useEffect(() => {
    return () => {
      //Khi component biến mất khỏi giao diện hàm này sẽ kích hoạt
      console.log("will unmount");
    };
  }, []);
  return (
    <div className="container">
      <h3>Use Effect Demo</h3>
      <h3>Number: {number}</h3>
      <button
        className="btn btn-outline-danger"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <hr />
      <h3>Like: {like}</h3>
      <button
        className="btn btn-outline-danger"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
