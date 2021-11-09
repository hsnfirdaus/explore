import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Post from "../components/Post";
import CONFIG from "../const/config";
import listCulture from "../helper/listCulture";
import { MapPin } from 'react-feather';
export default function Index({ hero, cultureList }) {
  hero=hero[0];
  return (
    <>
      <Head>
        <title>{ CONFIG.SITE }</title>
        <meta name="description" content={CONFIG.DESCRIPTION} />
      </Head>
      <Layout>
        <section id="hero">
          <img src={hero.frontmatter.thumbnail} className="hero-bg"/>
          <div className="hero-text">
            <div className="wrap">
              <div className="hero-location"><MapPin/>{hero.frontmatter.location}</div>
              <h2>{hero.frontmatter.title}</h2>
              <div className="primary-btn"><Link href={hero.slug}>Read More</Link></div>
            </div>
          </div>
        </section>
        <div className="posts">
          {cultureList.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      hero: listCulture(0,1),
      cultureList: listCulture(1,3),
    },
  };
}