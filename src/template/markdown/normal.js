export default `/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
  line-height: 1.25;
  color: #2b2b2b;
  font-family: Optima-Regular, Optima, PingFangTC-Light, PingFangSC-light, PingFangTC-light;
  letter-spacing: 2px;
  background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.1) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.1) 3%, rgba(0, 0, 0, 0) 3%);
  background-size: 10px 10px;
  background-position: center center;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margmarkdown-nicein-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  font-size: 15px;
}

/* 一级标题 */
#nice h1 {
}

/* 一级标题内容 */
#nice h1 .content {
}

/* 一级标题前缀 */
#nice h1 .prefix {
}

/* 一级标题后缀 */
#nice h1 .suffix {
}

/* 二级标题 */
#nice h2 {
  display: flex;
  justify-content: center;
  border: none;
  color: rgb(130, 127, 196);
  padding: 0;
}

/* 二级标题内容 */
#nice h2 .content {
  display:flex;
  align-items: center;
  font-size: 18px;
}

/* 二级标题前缀 */
#nice h2 .prefix {
  display: block;
  width: 35px;
  height: 35px;
  background-size:100% 100%;
  background-repeat:no-repeat;
  background-image: url(http://www.pic.uvdream.cn/20220421140734.png); 
  margin-right: -20px;
}

/* 二级标题后缀 */
#nice h2 .suffix {
  display: block;
  width: 15px;
  height: 15px;
  background-size:100% 100%;
  background-repeat:no-repeat;
  background-image: url(http://www.pic.uvdream.cn/20220424093727.png);
}

/* 三级标题 */
#nice h3 {
}

/* 三级标题内容 */
#nice h3 .content {
}

/* 三级标题前缀 */
#nice h3 .prefix {
}

/* 三级标题后缀 */
#nice h3 .suffix {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
  font-size: 15px;
}

/* 一级引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice .multiquote-1 {
}

/* 一级引用文字 */
#nice .multiquote-1 p {
  font-size: 15px;
}

/* 二级引用
 */
#nice .multiquote-2 {
}

/* 二级引用文字 */
#nice .multiquote-2 p {
  font-size: 15px;
}

/* 三级引用
 */
#nice .multiquote-3 {
}

/* 三级引用文字 */
#nice .multiquote-3 p {
  font-size: 15px;
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  font-size: 15px;
  color: rgb(130, 127, 196);
  border-bottom: 1px solid rgb(130, 127, 196);
}

/* 加粗 */
#nice strong {
  color: rgb(130, 127, 196);
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice em strong {
}

/* 删除线 */
#nice del {
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
}

/* 图片描述文字 */
#nice figcaption {
}

/* 行内代码 */
#nice p code, #nice li code {
}

/* 
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
}

/* 
 * 某一列表格列宽控制
 * n 可以修改为具体数字，不修改时表示所有列
 * 最小列宽 min-width: 85px;
 */
#nice table tr th:nth-of-type(n),
#nice table tr td:nth-of-type(n){
}

/* 脚注文字 */
#nice .footnote-word {
}

/* 脚注上标 */
#nice .footnote-ref {
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p { 
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg { 
}

/* 容器块1 */
#nice .block-1 {
  padding-top: 20px;
  padding-bottom: 20px;
}

#nice .block-1 h1 {
  display: flex;
  justify-content: center;
  margin-top: -40px;
}

#nice .block-1 h1 .prefix {
  display: none;
}

#nice .block-1 h1 .content {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  background-color: rgb(130, 127, 196);
  border-radius: 50%;
  width: 55px;
  height: 55px;
}

#nice .block-1 h1 .suffix {
  width: 20px;
  height: 20px;
  background-size:100% 100%;
  background-repeat:no-repeat;
  background-image: url(https://files.mdnice.com/pic/4e116911-86c9-40c7-80ec-bd05e65efa5b.png);
}

#nice .block-1 h2 {
  display: flex;
  border: none;
  color: rgb(130, 127, 196);
  padding: 0;
}

#nice .block-1 h2 .prefix {
  display: block;
  width: 35px;
  height: 35px;
  background-size:100% 100%;
  background-repeat:no-repeat;
  background-image: url(https://files.mdnice.com/pic/c6dd0d41-e95d-4d0d-a202-afa9ca0731af.png); 
  margin-right: -20px;
}

#nice .block-1 h2 .content {
  display:flex;
  align-items: center;
  font-size: 18px;
}

#nice .block-1 h2 .suffix {
  display: block;
  width: 15px;
  height: 15px;
  background-size:100% 100%;
  background-repeat:no-repeat;
  background-image: url(https://files.mdnice.com/pic/4e116911-86c9-40c7-80ec-bd05e65efa5b.png);
}

#nice .block-1 em {
  font-style: normal;
  font-weight: bold;
}

#nice .block-1 strong {
  color: rgb(130, 127, 196);
}

#nice .block-1 p {
  font-size: 15px;
}

#nice .block-1 li {
  font-size: 15px;
}

/* 容器块2 */
#nice .block-2 {
  display: flex;
  justify-content: center;
  background: none;
  padding: 0;
}

#nice .block-2 .block-2-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(223, 241, 238);
  width: 90%; 
  border-radius: 5px;
  border-width: 1px;
  border-style: dashed;
  border-color: rgb(74, 179, 172);
  padding: 20px;
}

#nice .block-2 strong {
  color: rgb(255, 79, 121);
}

#nice .block-2 p {
  color: rgb(7, 107, 115);
  font-weight: bold;
  padding: 0;
  font-size: 15px;
}
/* 容器块3 */
#nice .block-3 {
  background: none;
}

#nice .block-3 .block-3-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nice .block-3 a {
  font-size: 15px;
}

#nice .block-3 p {
  font-size: 15px;
}

/* 分列总体布局 */
#nice .column {
}

/* 分列左边布局 */
#nice .column .column-left {
  width: 50%;
}

#nice .column .column-left p {
  padding: 0;
  font-size: 12px;
}

#nice .column .column-left strong {
  font-size: 12px;
  color: rgb(130, 127, 196);
}

/* 分列右边布局 */
#nice .column .column-right {
   width: 50%;
}

#nice .column .column-right p {
  padding: 0;
  font-size: 12px;
}

#nice .column .column-right strong {
  font-size: 12px;
  color: rgb(130, 127, 196);
}`;
