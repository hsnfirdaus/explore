import Link from "next/link";
import CONFIG from "../const/config";

const Header = () => {
  return (
    <header id="header">
        <div className="wrap">
            <div className="brand"><Link href="/" ><h1 dangerouslySetInnerHTML={{__html:CONFIG.SITE_BRAND}}></h1></Link></div>
            <nav className="navigation">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Pages</Link></li>
                    <li><Link href="/">Province</Link></li>
                    <li><Link href="/">Culture</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Header;