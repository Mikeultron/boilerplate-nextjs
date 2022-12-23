import Button from "@atoms/Button/Button";
import { decrement, increment } from "@store/counter/counterSlice";
import { useDispatch } from "react-redux";
import styles from "../../view/styles.module.scss";

const DecrementIncrement = () => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className={styles.counterContainer}>
      <Button onClick={handleDecrement}>Decrement</Button>
      <Button onClick={handleIncrement}>Increment</Button>
    </div>
  );
};

export default DecrementIncrement;
