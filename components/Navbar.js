import Link from "next/link";
import Button from "react-bootstrap/Button";

const Nav = ({ user, logout }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <p className="logo">Trumpetr</p>
          </Link>
        </li>
        <li>
        {!user ? (
          <>
            <Link href="/login">
              <Button className="mr-2" variant="outline-dark">Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="dark">Register</Button>
            </Link>
          </>
        ) : (
          <>
            <span className="mr-2">Welcome {user.nickname}</span>
            <Button onClick={logout} variant="dark">Logout</Button>
          </>
        )}
        </li>
      </ul>

      <style jsx>{`
        nav {
          text-align: center;
          border-bottom: 8px solid #007bff;
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
          align-items: center;
          justify-content: center;
          padding: 6px 8px;
        }
        .logo {
          color: black;
          font-size: 24px;
          font-weight: bold;
          font-style: normal;
          margin: 0;
        }
      `}</style>
    </nav>
  )
};

export default Nav;
