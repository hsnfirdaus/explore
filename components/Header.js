import { useState, useEffect } from 'react';
import Link from "next/link";
import CONFIG from "../const/config";
import { ChevronDown, Menu } from 'react-feather';

const Header = () => {
    const [topZero,setTopZero]=useState(false);
    const [menuShow,setMenuShow]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',function(){
            if(window.scrollY>50){
                setTopZero(true);
            }else{
                setTopZero(false);
            }
        });
    },[]);
    const menuToggle=(ev)=>{
        ev.preventDefault();
        if(menuShow){
            setMenuShow(false);
        }else{
            setMenuShow(true);
            setTopZero(true);
        }
    }
    return (
    <header id="header" className={topZero?"scrolled":""}>
        <div className="wrap">
            <div className="brand"><Link href="/" ><h1 dangerouslySetInnerHTML={{__html:CONFIG.SITE_BRAND}}></h1></Link></div>
            <nav className={menuShow?"navigation show":"navigation"}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/profile">Profile</Link></li>
                    <li><Link href="/references">References</Link></li>
                    <li className="has-children">
                        <a href="#">Culture <ChevronDown/></a>
                        <ul className="children">
                        {Object.keys(CONFIG.CATEGORY_LIST).map((slug)=>{
                            let object=CONFIG.CATEGORY_LIST[slug];
                            return (
                            <li key={slug}><Link key={slug} href={"/explore/"+slug}>{object.name}</Link></li>
                            )
                        })}
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="mobile-toggle right">
                <button onClick={menuToggle} className="menu-btn">
                    <Menu/>
                </button>
            </div>
        </div>
    </header>
    );
};

export default Header;