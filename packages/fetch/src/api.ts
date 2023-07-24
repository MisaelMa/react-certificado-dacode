import ApiClient from "./base";

export const api = new ApiClient("");
/* 
export const setTokenApi = (token: string): Axios => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
  // @ts-ignore
  api.defaults.headers.Authorization = `Bearer ${token}`;
  return api;
};
 */
