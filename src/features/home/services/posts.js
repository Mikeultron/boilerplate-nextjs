import apiRequest from "src/api";

/**
 * @param {import("axios").AxiosRequestConfig} config
 */
export const getPosts = async (config) => {
	return apiRequest(
		{
			...config,
			url: "/posts",
			method: "GET",
		},
		true,
	);
};

/**
 * @param {string | number} postId
 * @param {import("axios").AxiosRequestConfig} config
 */
export const getPost = async (postId, config) => {
	return apiRequest(
		{
			...config,
			url: `/posts/${postId}`,
			method: "GET",
		},
		true,
	);
};
