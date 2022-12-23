import { useSelector } from "react-redux";
import DecrementIncrement from "../components/DecrementIncrement";
import SubtractAdd from "../components/SubtractAdd";
import styles from "./styles.module.scss";

const Home = () => {
  const { count } = useSelector((state) => state.counter);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p>Count: {count}</p>
        <DecrementIncrement />
        <SubtractAdd />
      </div>
    </div>
  );
};

export default Home;
