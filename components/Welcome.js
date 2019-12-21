import Layout from "./Layout";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Welcome = () => (
  <>
    <div className="Welcome">
      <div className="IntroSection">
        <h1>
          {/* Share the <span className="underline">bible verse</span> you read */}
          Share the bible verse you read today and what you learnt with people you care about.
        </h1>
        <p>
          It will help you be accountable, share what you learn and also learn
          from others
        </p>
      </div>
      <div className="ActionSection">
        <Link href="/register">
          <Button variant="outline-dark" size="lg">
            Start Sharing
          </Button>
        </Link>
      </div>
    </div>

    <style jsx>{`
      h1 {
        font-size: 50px;
      }
      h1 .underline {
        border-bottom: 5px solid #6610f2;
      }

      .Welcome {
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      .Welcome .ActionSection,
      .Welcome .IntroSection {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      @media only screen and (max-width: 600px) {
        h1 {
          font-size: 40px;
        }
      }
    `}</style>
  </>
);

export default Welcome;
