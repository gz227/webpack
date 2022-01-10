import vendor2 from "vendor2";
import tool2 from "../utils/tool2";
import tool3 from "../utils/tool3";

export default () => {
  //懒加载
  import(/* webpackChunkName: "async1" */ "../utils/async1.js");
  import(/* webpackChunkName: "async2" */ "../utils/async2.js");
  console.log("pageB");
};
