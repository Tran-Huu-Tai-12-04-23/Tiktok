import { Header } from "~/components";

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default HeaderOnly;
