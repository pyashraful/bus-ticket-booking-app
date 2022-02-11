import { Link } from "react-router-dom";
import classes from "../styles/NavBar.module.css";

export default function Navbar() {
  // TODO: add link to <a></a> tag

  return (
    <div className={classes.header}>
      <header>
        <nav>
          <ul>
            <li className={classes.logo}>
              <Link to="/">
                <span>BOOK</span>ME
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>Resume</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
