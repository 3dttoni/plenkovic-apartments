import { AppContext } from "@c/App/context";
import useIsMobile from "@h/useIsMobile";
import { appRoutes } from "@u/routes";
import { useContext } from "react";
import styles from "./Background.module.scss";

export default function Background() {
  const { pathname } = useContext(AppContext);
  const isMobile = useIsMobile();

  if (pathname === appRoutes.home.path || isMobile) return null;

  return <span className={styles.container} />;
}
