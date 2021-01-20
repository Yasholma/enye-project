import "./index.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container footer__content">
        <p className="footer__text">
          Coded with <span className="footer__emoji">❤️</span> by{" "}
          <a
            href="https://twitter.com/yasholma"
            target="_blank"
            rel="noreferrer"
          >
            Yasholma
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
