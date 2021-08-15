import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

export default function ReduxHookDemo(props) {
  const [userComment, setUserComment] = useState({
    name: "",
    content: "",
  });

  //giống this.props.dispatch bên rcc
  const dispatch = useDispatch();

  //useSelector là hook tương dương với mapStateToProps
  const { arrComment } = useSelector((state) => state.FakeBookReducer);

  const handleChangeInput = (event) => {
    let { value, name } = event.target;
    setUserComment({
      //sao chép userComment về
      ...userComment,

      //thay đổi giá trị cần thay đổi
      [name]: value,
    });
  };

  const renderComment = () => {
    return arrComment.map((comment, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-2">
            <img src={comment.image} width={50} height={50} />
          </div>
          <div className="col-10">
            <h3 className="text-danger">{comment.name}</h3>
            <p>{comment.content}</p>
          </div>
        </div>
      );
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const action = {
      type: "ADD_COMMENT",
      userComment: {
        ...userComment,
        image: `https://i.pravatar.cc/50/u=${userComment.name}`,
      },
    };
    dispatch(action);
  };

  return (
    <div className="container">
      <h3>Facebook app!</h3>
      <div className="card-header">{renderComment()}</div>
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-group">
          <p>Name</p>
          <input
            className="form-control"
            name="name"
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <p>Content</p>
          <input
            className="form-control"
            name="content"
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-outline-success" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
