import React from "react";
import "./index.css";
import Lock from "../../icon/Lock";
import Setting from "../../icon/Setting";
import Add from "../../icon/Add";
import {Button, Col, Form, Input, message, Modal, Pagination, Popover, Row} from "antd";
import axios from "axios";
import {withRouter} from "react-router-dom";
import qs from "query-string";
import {SaveArticle} from "../../article";

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      dataList: [],
      activeArticle: 0,
      configModal: false,
      articleContent: {},
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
      })
      .catch((err) => {
        message.error("请先登录");
        localStorage.removeItem("Admin-Authorization");
        this.setState({
          modalVisible: true,
        });
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
      configModal: false,
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
              this.setState({
                modalVisible: false,
              });
              localStorage.setItem("Admin-Authorization", res.data.data.access_token);
              this.getArticleList();
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
    this.props.onArticle(value);
    this.props.history.push("/?id=" + value.id);
    this.setState({
      activeArticle: value.id,
    });
  };

  saveArticleClick = (value) => {
    this.setState({
      articleContent: value,
      configModal: true,
    });
  };

  addArticle = () => {
    const obj = {
      title: "未命名文章" + new Date(),
      categoryIds: [47],
      status: "PUBLISHED",
    };
    SaveArticle(obj).then((r) => {
      console.log(r);
      if (r.code === 200) {
        this.props.history.push("/?id=" + r.data.id);
        this.setState({
          activeArticle: r.data.id,
        });
        this.getArticleList();
      }
    });
  };

  configSubmit = () => {
    this.setState({
      configModal: false,
    });
    this.props.onArticle(this.state.articleContent);
    console.log(this.state.articleContent, "提交的文章内容");
  };

  deleteArticle = (val) => {
    message.error("暂不支持删除" + val.id);
  };

  inputChange = (e) => {
    const article = this.state.articleContent;
    article.title = e.target.value;
    this.setState({
      articleContent: article,
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const isLogin = localStorage.getItem("Admin-Authorization");
    return (
      <div className="list">
        {!isLogin ? (
          <div onClick={this.modalOpen} className="add">
            <span>登陆</span>
          </div>
        ) : (
          <>
            <div className="add" onClick={this.addArticle}>
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
                  >
                    <div className="list-block-top">
                      <Lock />
                      <div onClick={() => this.listClick(element)} className="list-block-title">
                        {element.title}
                      </div>
                      <Popover
                        title="配置"
                        content={
                          <div className="config">
                            <div className="save" onClick={() => this.saveArticleClick(element)}>
                              保存文章
                            </div>
                            <div className="delete" onClick={() => this.deleteArticle(element)}>
                              删除
                            </div>
                          </div>
                        }
                        trigger="click"
                      >
                        <div className="setting">
                          <Setting />
                        </div>
                      </Popover>
                    </div>
                    <div onClick={() => this.listClick(element)} className="list-block-bottom">
                      2022/2/12 12:12
                    </div>
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
          </>
        )}
        {/* 文章配置 */}
        <Modal title="文章配置" visible={this.state.configModal} footer={null} onCancel={this.handleCancel}>
          <Row>
            <Col span="8">文章名称:</Col>
            <Col span="16">
              <Input value={this.state.articleContent.title} placeholder="请输入文章名称" onChange={this.inputChange} />
            </Col>
          </Row>
          <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
            <Button onClick={this.configSubmit} type="primary">
              提交
            </Button>
            <Button style={{marginLeft: "10px"}} onClick={this.handleCancel}>
              取消
            </Button>
          </div>
        </Modal>
        {/* 登陆处理 */}
        <Modal title="登陆" visible={this.state.modalVisible} footer={null} onCancel={this.handleCancel}>
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
            <Form.Item className="sure">
              <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
              </Button>
              <Button style={{marginLeft: "10px"}} onClick={this.handleCancel}>
                取消
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Form.create({name: "normal_login"})(Article));
