import React from "react";
import "./index.css";
import Lock from "../../icon/Lock";
import Setting from "../../icon/Setting";
import Add from "../../icon/Add";
import {Button, Form, Input, message, Modal, Pagination} from "antd";
import axios from "axios";
import {withRouter} from "react-router-dom";
import qs from "query-string";

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      dataList: [],
      activeArticle: 0,
      options: {
        page: 1,
        size: 10,
        total: 0,
      },
    };
  }

  componentDidMount() {
    this.getArticleList();
    const {id} = qs.parse(this.props.location.search);
    this.setState({
      activeArticle: id,
    });
  }

  getArticleList = () => {
    const {page, size} = this.state.options;
    axios
      .get("http://www.uvdream.cn/api/admin/posts?page=" + (page - 1) + "&size=" + size, {
        headers: {
          "Admin-Authorization": localStorage.getItem("Admin-Authorization"),
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          this.setState(
            {
              // activeArticle: id,
              options: {
                page: res.data.data.page,
                size: 10,
                total: res.data.data.total,
              },
              dataList: res.data.data.content,
            },
            () => {},
          );
        }
      });
  };

  modalOpen = () => {
    this.setState({
      modalVisible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      modalVisible: false,
    });
  };

  paginationChange = (page, size) => {
    this.setState(
      {
        options: {
          page,
          size,
        },
      },
      () => {
        this.getArticleList();
      },
    );
    // this.getArticleList();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        axios
          .post("http://www.uvdream.cn/api/admin/login", {
            username: values.username,
            password: values.password,
          })
          .then((res) => {
            console.log("登陆结果", res);
            if (res.data.status === 200) {
              console.log("登陆成功");
              message.success("登陆成功!");
              localStorage.setItem("Admin-Authorization", res.data.data.access_token);
            }
          })
          .catch((err) => {
            console.log("登陆失败", err);
            message.error("登陆失败!");
          });
      }
    });
  };

  listClick = (value) => {
    this.props.history.push("/?id=" + value.id);
    this.setState({
      activeArticle: value.id,
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className="list">
        <div className="add" onClick={this.modalOpen}>
          <Add />
          <span style={{marginLeft: "5px"}}>新增文章</span>
        </div>
        <div className="list">
          {this.state.dataList.map((element) => {
            return (
              // <Link to={{pathname: "/l", search: "?id=" + element.id}}>
              <div
                key={element.id}
                className={["list-block", this.state.activeArticle == element.id ? "active" : ""].join(" ")}
                onClick={() => this.listClick(element)}
              >
                <div className="list-block-top">
                  <Lock />
                  <div className="list-block-title">{element.title}</div>
                  <Setting />
                </div>
                <div className="list-block-bottom">2022/2/12 12:12</div>
              </div>
              // </Link>
            );
          })}
        </div>
        <div className="list-pagination">
          <Pagination
            size="small"
            current={this.state.options.page}
            total={this.state.options.total}
            onChange={this.paginationChange}
          />
        </div>
        <Modal title="登陆" visible={this.state.modalVisible} footer={null}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item label="用户名">
              {getFieldDecorator("username", {
                rules: [{required: true, message: "请输入用户名!"}],
              })(<Input placeholder="Username" />)}
            </Form.Item>
            <Form.Item label="密码">
              {getFieldDecorator("password", {
                rules: [{required: true, message: "请输入与密码!"}],
              })(<Input type="password" placeholder="Password" />)}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
              </Button>
              <Button onClick={this.handleCancel}>取消</Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Form.create({name: "normal_login"})(Article));
