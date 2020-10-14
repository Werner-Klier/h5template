// 个人中心api
import http from "@/utils/request.js";
export default {
    // 获取用户认证的状态基本信息
  getStateInfo: (params = {}) => http.get("", params),
};