import Head from "next/head";
import { Facebook, GitHub, Globe, Instagram } from "react-feather";
import Layout from "../components/Layout";
import CONFIG from "../const/config";
export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile | { CONFIG.SITE }</title>
      </Head>
      <Layout>
        <section id="hero">
          <img src="/assets/hasan-2.webp" className="hero-bg"/>
          <div className="hero-text center">
            <div className="wrap">
              <h2>Hello, I’m Muhammad Hasan Firdaus</h2>
            </div>
          </div>
        </section>
        <section id="profile">
          <div className="wrap profile">
            <figure className="profile-pict">
                <img src="/assets/hasan.jpg" alt="Muhammad Hasan Firdaus"/>
            </figure>
            <div className="profile-content">
                <p>I currently a student in Vocational High School 5 Batam, Riau Islands. I majored in Multimedia.</p>
                <p>I'm the type of person who gets bored easily so I often try new things. I love to explore the IT world. It started when I was in junior high school. I got to know MyWapBlog.com, a blogging platform for mobile phones created by Arvind Gupta. At that time, i'm exploring, and I also got to know PHP, HTML, CSS and JavaScript through that platform.</p>
                <p>At first I only studied HTML and PHP, at that time I was very anti-CSS and JavaScript. But over time I also like CSS and JavaScript, even now I prefer to do amazing things in front-end.</p>
                <p>In the past i'm is anti-framework person too, but now I'm also learning Laravel and ReactJS.</p>
                <h3>My Achivements</h3>
                <ul className="list">
                    <li>3<sup>rd</sup> Place Web Technologies LKS Nasional 2021.</li>
                    <li>1<sup>st</sup> Place Web Technologies LKS Province Kepulauan Riau 2021.</li>
                    <li>1<sup>st</sup> Place OSC Batam Linux User Group 2021.</li>
                    <li>1<sup>st</sup> Place HMTI Fair 2019.</li>
                    <li>1<sup>st</sup> Place HMTI Fair 2020.</li>
                </ul>
                <h3>My Links</h3>
                <ul className="socmed">
                    <li><Globe/> <a href="//hasanfirdaus.my.id">hasanfirdaus.my.id</a></li>
                    <li><Facebook/> <a href="//fb.me/hsnfirdaus">Muhammad Hasan Firdaus</a></li>
                    <li><Instagram/> <a href="//instagram.com/hsnfirdaus">@hsnfirdaus</a></li>
                    <li><GitHub/> <a href="//github.com/hsnfirdaus">@hsnfirdaus</a></li>
                </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}