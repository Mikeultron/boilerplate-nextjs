import axios from "axios";

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_ROOT_API_URL,
	timeout: 6000,
	validateStatus: (status) => status >= 200 && status < 300,
});

// TODO: Add interceptors when token is expired, logic for adding token to headers.

export default api;
