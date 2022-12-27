import { useSelector } from "react-redux";
import DecrementIncrement from "../components/DecrementIncrement";
import SubtractAdd from "../components/SubtractAdd";
import usePosts from "../hooks/usePosts";
import styles from "./styles.module.scss";

const Home = () => {
	const { count } = useSelector((state) => state.counter);
	const { posts } = usePosts();
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<p>Count: {count}</p>
				<DecrementIncrement />
				<SubtractAdd />
				<h1>Posts</h1>
				{posts?.map((post) => (
					<p key={post.id}>{post.id}</p>
				))}
			</div>
		</div>
	);
};

export default Home;
