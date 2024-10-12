import { get } from "./request";

export default {
  captcha() {
    return get<string>("/captcha");
  },
};
