import React, { Component } from "react";
import axios from "axios";
import { TOKEN_CYBERSOFT } from "../../util/setting";
export default class AxiosDemoRCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangPhim: [],
    };
  }
  //Hàm xử lý sự kiện click để call api
  getAPI = async () => {
    const result = await axios({
      url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
    await this.setState({
      mangPhim: result.data.content,
    });
  };
  //Hàm render phim ta giao diện từ this.state.mangPhim
  renderPhim = () => {
    return this.state.mangPhim.map((phim, index) => {
      return (
        <div className="col-4 mt-2" key={index}>
          <div className="card">
            <img src={phim.hinhAnh} alt="..." height={300} />
            <div className="card-body">
              <h3>{phim.tenPhim}</h3>
              <p>{phim.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        {/* <button
          className="btn btn-success"
          onClick={() => {
            this.getAPI();
          }}
        >
          Lấy danh sách phim
        </button> */}
        <h3 className="text-center">Danh sách phim</h3>
        <div className="row">{this.renderPhim()}</div>
      </div>
    );
  }
  //Component tự động gọi hàm này sau khi render
  componentDidMount() {
    this.getAPI();
  }
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOEUiLCJuYmYiOjE2MTY1MTg4MDAsImV4cCI6MTYzMDk0NzYwMH0.vFD27BlEe1peey_vsB8E1uCKlq8UBjyfURlU0EvkxHU
