/* create by Micheal Xiao 2019/7/19 17:53 */
import SlideVerify, { getConfig, setConifg } from "./slide-verify";

addEventListener("DOMContentLoaded", () => {
  const config = getConfig();
  const width = window.innerWidth - 40;
  const height = config.svCanvasHeight * width /
    config.svCanvasWidth;
  config.svCanvasWidth = width;
  config.svCanvasHeight = height;
  const Slide = new SlideVerify({
    elementId: "root",
    photo:[
      "https://fastly.picsum.photos/id/1045/620/420.jpg?hmac=aeaGmeWWemTUupju7qo8llokI3fgSQ1icPEI5B7-xHA",
      "https://fastly.picsum.photos/id/277/930/630.jpg?hmac=FZZnBuuCh1G2Iv1jXYYQdvAe3GIoLnpNHy3d_vSdstM",
      // "https://fastly.picsum.photos/id/464/620/310.jpg?hmac=t43DXTVaXE34wKOsA6Ng-WfhNG5Cb54sLe1XhMVLj6I",
      // "https://fastly.picsum.photos/id/583/620/310.jpg?hmac=QA0WxMUjBamwOnGZPet70tHOaLqeKTaqXDFtm9IMu2w"
    ],
    onSuccess: () => {
      console.log("success");
    },
    onFail: () => {
      console.log("fail");
    },
    onRefresh: () => {
      console.log("refresh");
    },
  });
});
