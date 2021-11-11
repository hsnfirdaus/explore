import CONFIG from "../const/config";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="supported">
        <div className="wrap">
          <h3 className="primary-text">Supported By</h3>
          <div className="support-logo">
            <img src="/assets/logo hmti.png" alt="HMTI Polibatam"/>
            <img src="/assets/SMKN 5 Batam.png" alt="SMK Negeri 5 Batam"/>
          </div>
        </div>
      </div>
      <div id="copyright">
        <div className="center">Copyright &copy; {new Date().getFullYear()} <Link href="/">{CONFIG.SITE}</Link></div>
      </div>
    </footer>
  );
};

export default Footer;