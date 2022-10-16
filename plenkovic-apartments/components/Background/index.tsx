import { AppContext } from "@c/App/context";
import { appRoutes } from "@u/routes";
import { useContext } from "react";
import styles from "./Background.module.scss";

export default function Background() {
  const { pathname } = useContext(AppContext);

  if (pathname === appRoutes.home.path) return null;
  
  return <span className={styles.container} />;
}
