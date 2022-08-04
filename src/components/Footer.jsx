//Assets
import GithubLogo from "../assets/icons/Github-logo.svg";
import LinkedInLogo from "../assets/icons/LinkedIn-logo.svg";
//Styles
import "../css/Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <h2 className="footer--title">Santiago Rensonnet</h2>
      <nav className="footer--navbar">
        <a
          href="https://www.linkedin.com/in/santiago-rensonnet-92b48b19b/"
          rel="noopener noreferrer"
          target={"_blank"}
        >
          <img
            src={LinkedInLogo}
            className="footer--logo"
            alt="LinkedIn-link"
          />
        </a>
        <a
          href="https://github.com/SantiagoRensonnet"
          rel="noopener noreferrer"
          target={"_blank"}
        >
          <img src={GithubLogo} className="footer--logo" alt="Github-link" />
        </a>
      </nav>
    </div>
  );
}
