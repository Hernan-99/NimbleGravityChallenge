import { api } from "./api.axios";

export const configInterceptors = () => {
  api.interceptors.response.use(
    (res) => res,
    (err) => {
      const data = err.response?.data;
      const backendMessage =
        data?.details?.fieldErrors &&
        Object.values(data.details.fieldErrors).flat().join(", ");

      const message =
        backendMessage ||
        err.response?.data?.message ||
        err.message ||
        "Ups ocurrio un error inesperado";

      return Promise.reject(new Error(message));
    },
  );
};
