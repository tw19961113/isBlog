import axios from "axios";

import router from "../router";
import { Message } from "element-ui";

const service = axios.create({
  baseURL: "http://localhost:8088",
  // baseURL: "http://test.crm.sitejiu.com/site",
  withCredentials: true,
  timeout: 150000
});



export default service;
