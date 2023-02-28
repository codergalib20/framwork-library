import { Link } from "react-router-dom";
import { hooks } from "./data/hooks";
import styles from "./home.page.module.css";

export default function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>Welcome to React Hooks Features</h1>
      </div>
      <div className={styles.links}>
        {hooks.map((hook, index) => (
          <Link key={index} to={`/${hook.navigator}`}>
            <li> {hook.name}</li>
          </Link>
        ))}
      </div>
    </div>
  );
}
