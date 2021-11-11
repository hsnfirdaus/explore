import Head from "next/head";
import Layout from "../../../components/Layout";
import Culture from "../../../components/Culture";
import CONFIG from "../../../const/config";
import listCulture from "../../../helper/listCulture";
import listProvinceFolder from "../../../helper/listProvinceFolder";
export default function Index({ cultureList, province }) {
    let provinceName=province.replace(/-/g,' ').replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
  return (
    <>
      <Head>
        <title>Explore {provinceName} | { CONFIG.SITE }</title>
      </Head>
      <Layout>
        <section id="hero">
          {cultureList[0]?(<img src={cultureList[0].frontmatter.thumbnail} className="hero-bg"/>):<></>}
          <div className="hero-text center">
            <div className="wrap">
              <h2>Explore {provinceName}</h2>
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
export async function getStaticPaths() {
  var listPath=[];
    listProvinceFolder().forEach((slug)=>{
        listPath.push({
            params:{
                province:slug
            }
        });
    });
    return {
        paths:listPath,
        fallback: false,
    };
}

export async function getStaticProps({ params: { province } }) {
  return {
    props: {
        province: province,
      cultureList: listCulture(0,9,province),
    },
  };
}