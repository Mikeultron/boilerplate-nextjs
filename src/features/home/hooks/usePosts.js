import { useEffect, useState } from "react";
import { getPosts } from "../services/posts";

const usePosts = () => {
	const [posts, setPosts] = useState([]);
	const fetchPosts = async () => {
		try {
			const response = await getPosts();
			setPosts(response.data);
		} catch (err) {
			// Notify when there's error
		}
	};
	useEffect(() => {
		fetchPosts();
	}, []);
	return { posts };
};

export default usePosts;
