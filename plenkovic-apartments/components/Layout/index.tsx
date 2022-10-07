import NavigationBar from "@c/NavigationBar";
import { IChildren } from "@i/common";

export default function Layout({ children }: IChildren) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}
