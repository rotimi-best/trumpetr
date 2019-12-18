import Link from "next/link";
import Button from "react-bootstrap/Button";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <p className="logo">Trumpetr</p>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <Button style={{ marginRight: 10 }} variant="outline-dark">Login</Button>
        </Link>
        <Link href="/register">
          <Button variant="dark">Register</Button>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: "Roboto", sans-serif;
        border: 2px solid #6f42c1;
        height: 100vh;
      }
      nav {
        text-align: center;
        border-bottom: 3px solid #6f42c1;
      }
      ul {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      .logo {
        color: black;
        font-size: 24px;
        font-family: "Roboto script=all rev=1", "Adobe Blank";
        font-weight: bold;
        font-style: normal;
        margin: 0;
      }
    `}</style>
  </nav>
);

export default Nav;
