import api from "src/api";

/**
 *
 * @param {import("axios").AxiosRequestConfig} config
 */
export const getPosts = (config) => {
	return api.get("/posts", config);
};
