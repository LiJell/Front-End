import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome Back React!!</h1>
      <Button text={"hit me up"} />
    </div>
  );
}

export default App;
