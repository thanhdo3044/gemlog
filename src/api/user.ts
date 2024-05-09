import { http } from "@/utils/http";

export type UserResult = {
  success: boolean;
  data: {
    /** 头像 */
    avatar: string;
    /** 用户名 */
    email: string;
    /** 昵称 */
    nickname: string;
    /** 当前登录用户的角色 */
    roles: Array<string>;
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;

    tokenType: string;
    expiresIn: number ;
  };
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

/** 登录 */
export const getLogin = async (data?: object) => {
  const req = await http.request<UserResult>("post", "http://103.139.202.40:8080/api/auth/login", { data })  
  return req;
};

/** 刷新`token` */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "http://103.139.202.40:8080/api/auth/refreshToken", { data });
};
