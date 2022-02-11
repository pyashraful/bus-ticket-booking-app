import NavBar from "../components/NavBar";
import classes from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={classes.bodyContainer}>
      <NavBar />
      {children}
    </div>
  );
}
