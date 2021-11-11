import Head from "next/head";
import Layout from "../../components/Layout";
import Culture from "../../components/Culture";
import CONFIG from "../../const/config";
import listCulture from "../../helper/listCulture";
export default function CultureMore({ cultureList, category }) {
  return (
    <>
      <Head>
        <title>Explore Culture | { CONFIG.SITE }</title>
      </Head>
      <Layout>
        <section id="hero">
          <img src={cultureList[0].frontmatter.thumbnail} className="hero-bg"/>
          <div className="hero-text center">
            <div className="wrap">
              <h2>Explore Culture</h2>
            </div>
          </div>
        </section>
        <section id="recently-added">
          <div className="wrap">
            <div className="culture-grid">
              {cultureList.map((item, index) => (
                <Culture item={item} key={index} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      cultureList: listCulture(),
    },
  };
}