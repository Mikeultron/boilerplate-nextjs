import Button from "@atoms/Button/Button";
import { add } from "@store/counter/counterSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../../view/styles.module.scss";

const SubtractAdd = () => {
  const [countInput, setCountInput] = useState(0);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(add(parseInt(countInput)));
  };
  const handleSubtract = () => {
    dispatch(subtract(parseInt(countInput)));
  };
  return (
    <div className={styles.counterContainer}>
      <Button onClick={handleSubtract}>Subtract</Button>
      <input
        value={countInput}
        onChange={(e) => setCountInput(e.target.value)}
      />
      <Button onClick={handleAdd}>Add</Button>
    </div>
  );
};

export default SubtractAdd;
