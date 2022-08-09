import { LayoutPropsTypes } from "./layout.types";
import Header from "components/templates/header/component.header";

export default function Layout({ children }: LayoutPropsTypes): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
