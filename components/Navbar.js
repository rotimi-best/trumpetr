import Link from "next/link";
import Button from "react-bootstrap/Button";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <Button variant="link">Trumpetr</Button>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <Button variant="link">Sign Up / Sign In</Button>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: "Roboto", sans-serif;
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
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 24px;
      }
    `}</style>
  </nav>
);

export default Nav;
