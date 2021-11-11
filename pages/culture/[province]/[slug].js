import fs from "fs";
import path from "path";
import matter from "gray-matter";
import * as marked from "marked";
import Head from "next/head";
import Layout from "../../../components/Layout";
import Culture from "../../../components/Culture";
import CONFIG from "../../../const/config";
import listCulture from "../../../helper/listCulture";
import { MapPin } from "react-feather";
export default function SingleCulture({ frontmatter: {title, location, thumbnail}, content }) {
  return (
    <>
      <Head>
        <title>{title}  | { CONFIG.SITE }</title>
      </Head>
      <Layout>
        <section id="hero">
          <img src={thumbnail} className="hero-bg"/>
          <div className="hero-text center">
            <div className="wrap">
              <h2>{title}</h2>
              <div className="culture-location"><MapPin/>{location}</div>
            </div>
          </div>
        </section>
        <section id="single-culture">
          <div className="wrap">
            <div className="culture-content" dangerouslySetInnerHTML={{ __html: marked.marked(content) }}/>
          </div>
        </section>
      </Layout>
    </>
  );
}
export async function getStaticPaths() {
  var listPath=[];
    listCulture().forEach((item)=>{
        listPath.push({
            params:{
                province:item.folder.replace(/\//g,''),
                slug:item.baseSlug
            }
        });
    });
    return {
        paths:listPath,
        fallback: false,
    };
}

export async function getStaticProps({ params: { province, slug } }) {
  const markdown = fs.readFileSync(path.join("culture",province, slug+".md"), "utf-8");
  const { data: frontmatter, content } = matter(markdown);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}