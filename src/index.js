import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter} from "react-router-dom";
import Lib from "./Lib";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <HashRouter>
    <Lib
      useImageHosting={{
        url: "http://uvdream.cn/api/admin/attachments/upload",
        name: "图壳",
        isSmmsOpen: false,
        isQiniuyunOpen: false,
        isAliyunOpen: true,
        isGiteeOpen: true,
        isGitHubOpen: true,
      }}
      defaultTitle="Markdown Nice"
    />
    ,
  </HashRouter>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
