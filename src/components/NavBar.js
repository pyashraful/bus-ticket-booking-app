import classes from "../styles/NavBar.module.css";

export default function Navbar() {
  // TODO: add link to <a></a> tag

  return (
    <div className={classes.header}>
      <header>
        <nav>
          <ul>
            <li className={classes.logo}>
              <a>
                <span>BOOK</span>ME
              </a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Mail</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Github</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
