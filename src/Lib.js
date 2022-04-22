import React, {Component} from "react";
import PropTypes from "prop-types";
import {Provider} from "mobx-react";

import "./index.css";

import App from "./App";

import content from "./store/content";
import userInfo from "./store/userInfo";
import navbar from "./store/navbar";
import footer from "./store/footer";
import dialog from "./store/dialog";
import imageHosting from "./store/imageHosting";
import view from "./store/view";
import appContext from "./utils/appContext";
import {solveHtml, solveWeChatMath, solveZhihuMath} from "./utils/converter";
import {LAYOUT_ID} from "./utils/constant";
import {Route, Switch, withRouter} from "react-router-dom";
import Article from "./component/Article/index";
import {SaveArticle} from "./article";
import qs from "query-string";
import throttle from "lodash.throttle";

class Lib extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleOptions: {
        title: "测试文章",
        originalContent: "# 测试文章内容",
        content: '<h1 id="%E6%B5%8B%E8%AF%95%E6%96%87%E7%AB%A0%E5%86%85%E5%AE%B9" tabindex="-1">测试文章内容</h1>\n',
        slug: "",
        categoryIds: [47],
        summary: "文章摘要内容",
        status: "PUBLISHED",
        keepRaw: true,
      },
    };
    this.saveArticleFunc = throttle(this.saveArticle, 10000);
  }

  getWeChatHtml() {
    const layout = document.getElementById(LAYOUT_ID); // 保护现场
    const html = layout.innerHTML;
    solveWeChatMath();
    const res = solveHtml();
    layout.innerHTML = html; // 恢复现场
    return res;
  }

  onEditChange = (value) => {
    const {articleOptions} = this.state;
    articleOptions.originalContent = value;
    this.setState({articleOptions});
    this.saveArticleFunc();
  };

  saveArticle = () => {
    const {id} = qs.parse(this.props.location.search);
    const {articleOptions} = this.state;
    articleOptions.id = Number(id);
    this.setState({articleOptions}, () => {
      SaveArticle(this.state.articleOptions, true);
    });
  };

  getZhihuHtml() {
    const layout = document.getElementById(LAYOUT_ID); // 保护现场
    const html = layout.innerHTML;
    solveZhihuMath();
    const res = solveHtml();
    layout.innerHTML = html; // 恢复现场
    return res;
  }

  // getTitle = (title) => {
  //   const {articleOptions} = this.state;
  //   articleOptions.title = title;
  //   this.setState({articleOptions});
  // };
  getArticle = (val) => {
    const {title} = val;
    // 标题
    const article = this.state.articleOptions;
    title ? (article.title = title) : null;
    this.setState({articleOptions: article});
    console.log(this.state.articleOptions);
    this.saveArticleFunc();
  };

  render() {
    const {
      defaultTitle,
      defaultText,
      onTextChange,
      onTextBlur,
      onTextFocus,
      onStyleChange,
      onStyleBlur,
      onStyleFocus,
      token,
      useImageHosting,
    } = this.props;
    const appCtx = {
      defaultTitle,
      defaultText,
      onTextChange,
      onTextBlur,
      onTextFocus,
      onStyleChange,
      onStyleBlur,
      onStyleFocus,
      token,
      useImageHosting,
    };
    return (
      <Provider
        content={content}
        userInfo={userInfo}
        navbar={navbar}
        footer={footer}
        dialog={dialog}
        imageHosting={imageHosting}
        view={view}
      >
        <appContext.Provider value={appCtx}>
          <div className="uvdream">
            <Article onArticle={this.getArticle} />
            <Switch>
              <Route path="/">
                <App
                  defaultText={defaultText}
                  onTextChange={this.onEditChange}
                  onTextBlur={onTextBlur}
                  onTextFocus={onTextFocus}
                  onStyleChange={onStyleChange}
                  onStyleBlur={onStyleBlur}
                  onStyleFocus={onStyleFocus}
                  useImageHosting={useImageHosting}
                  token={token}
                />
              </Route>
            </Switch>
          </div>
        </appContext.Provider>
      </Provider>
    );
  }
}

const style = {
  svgIcon: {
    width: "72px",
    height: "72px",
  },
};

Lib.defaultProps = {
  defaultTitle: "",
  defaultText: "",
  onTextChange: () => {},
  onTextBlur: () => {},
  onTextFocus: () => {},
  onStyleChange: () => {},
  onStyleBlur: () => {},
  onStyleFocus: () => {},
  token: "",
  // eslint-disable-next-line react/default-props-match-prop-types
  useImageHosting: {
    url: "",
    name: "",
    isSmmsOpen: true,
    isQiniuyunOpen: true,
    isAliyunOpen: true,
    isGiteeOpen: true,
    isGitHubOpen: true,
  },
};
Lib.propTypes = {
  defaultTitle: PropTypes.string,
  defaultText: PropTypes.string,
  onTextChange: PropTypes.func,
  onTextBlur: PropTypes.func,
  onTextFocus: PropTypes.func,
  onStyleChange: PropTypes.func,
  onStyleBlur: PropTypes.func,
  onStyleFocus: PropTypes.func,
  token: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  useImageHosting: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    isSmmsOpen: PropTypes.bool,
    isQiniuyunOpen: PropTypes.bool,
    isAliyunOpen: PropTypes.bool,
    isGiteeOpen: PropTypes.bool,
    isGitHubOpen: PropTypes.bool,
  }),
};

export default withRouter(Lib);
