import { useSelector } from "react-redux";
import DecrementIncrement from "../components/DecrementIncrement";
import SubtractAdd from "../components/SubtractAdd";
import usePost from "../hooks/usePost";
import usePosts from "../hooks/usePosts";
import styles from "./styles.module.scss";

const Home = () => {
	const { count } = useSelector((state) => state.counter);
	// ! Could cause performance issue if there are multiple API calls. Need a workaround with axios.all()
	const { posts } = usePosts();
	const { post } = usePost(2);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<p>Count: {count}</p>
				<DecrementIncrement />
				<SubtractAdd />
				<p>Single post {post?.id}</p>
				<h1>Posts</h1>
				{posts?.map((post) => (
					<p key={post.id}>{post.id}</p>
				))}
			</div>
		</div>
	);
};

export default Home;
