import Head from "next/head";
import Layout from "../../components/Layout";
import Culture from "../../components/Culture";
import CONFIG from "../../const/config";
import listCulture from "../../helper/listCulture";
export default function Index({ cultureList, category }) {
  return (
    <>
      <Head>
        <title>Explore {CONFIG.CATEGORY_LIST[category].name} | { CONFIG.SITE }</title>
      </Head>
      <Layout>
        <section id="hero">
          <img src={CONFIG.CATEGORY_LIST[category].image} className="hero-bg"/>
          <div className="hero-text center">
            <div className="wrap">
              <h2>Explore {CONFIG.CATEGORY_LIST[category].name}</h2>
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
  Object.keys(CONFIG.CATEGORY_LIST).forEach((slug)=>{
    let totalPage=Math.ceil(listCulture(false,false,false,slug).length/9);
    listPath.push({
      params:{
        category:[slug]
      }
    });
    for(let i=1;i<=totalPage;i++){
      listPath.push({
        params:{
          category:[slug,""+i]
        }
      });
    }
  });
  return {
    paths:listPath,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category } }) {
  const page=category[1]?category[1]:1;
  let start=(page-1)*9;
  return {
    props: {
      category: category[0],
      cultureList: listCulture(start,9,false,category[0]),
    },
  };
}