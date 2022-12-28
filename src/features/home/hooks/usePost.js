const { useEffect, useState, useCallback } = require("react");
const { getPost } = require("../services/posts");

/**
 * @param {string | number} postId
 */
const usePost = (postId) => {
	const [post, setPost] = useState();
	const fetchPost = useCallback(async () => {
		try {
			const response = await getPost(postId);
			setPost(response.data);
		} catch (err) {
			// Notify error
		}
	}, [postId]);

	useEffect(() => {
		fetchPost();
	}, [fetchPost]);

	return { post };
};

export default usePost;
