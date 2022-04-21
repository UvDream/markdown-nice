import axios from "axios";
import {message} from "antd";

// eslint-disable-next-line import/prefer-default-export
export const SaveArticle = async (data, update) => {
  let res = "";
  if (update) {
    // 更新
    res = await axios.put("http://www.uvdream.cn/api/admin/posts/" + data.id, data, {
      headers: {
        "Admin-Authorization": localStorage.getItem("Admin-Authorization"),
      },
    });
    // .then((res) => {
    //   if (res.status === 200) {
    //     message.success("保存成功");
    //   } else {
    //     message.error("保存失败");
    //   }
    // });
  } else {
    // 新增
    res = await axios.post("http://www.uvdream.cn/api/admin/posts", data, {
      headers: {
        "Admin-Authorization": localStorage.getItem("Admin-Authorization"),
      },
    });
    // .then((res) => {

    // });
  }
  if (res.status === 200) {
    message.success("保存成功");
    console.log("保存成功", res);
    return {
      code: 200,
      data: res.data.data,
    };
  } else {
    message.error("保存失败");
    return {};
  }
};
