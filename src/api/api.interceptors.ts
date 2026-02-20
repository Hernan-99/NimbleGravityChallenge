import { api } from "./api.axios";

export const configInterceptors = () => {
  api.interceptors.response.use(
    (res) => res,
    (err) => {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Ups ocurrio un error inesperado";

      return Promise.reject(new Error(message));
    },
  );
};
