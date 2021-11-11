import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Culture from "../components/Culture";
import CONFIG from "../const/config";
import listCulture from "../helper/listCulture";
import { MapPin } from 'react-feather';
import ProvinceRender from '../components/ProvinceRender';
export default function Index({ hero, cultureList, provinceData }) {
  hero=hero[0];
  return (
    <>
      <Head>
        <title>{ CONFIG.SITE }</title>
        <meta name="description" content={CONFIG.DESCRIPTION} />
      </Head>
      <Layout>
        {hero?(
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
        ):<></>}
        <section id="explore-culture">
          <div className="wrap">
            <h3>Explore Culture</h3>
            <div className="culture-list">
              {Object.keys(CONFIG.CATEGORY_LIST).map((slug)=>{
                let object=CONFIG.CATEGORY_LIST[slug];
                return (
                  <Link key={slug} href={"/explore/"+slug}>
                    <div className="culture-item">
                      <img src={object.image} className="culture-image" alt={object.name}/>
                      <h4>{object.name}</h4>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
        <section id="explore-province">
          <div className="wrap">
            <h3>Explore Province</h3>
            <ProvinceRender provinceData={provinceData}/>
          </div>
        </section>
        <section id="recently-added">
          <div className="wrap">
            <h3>Recently Added</h3>
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
      hero: listCulture(0,1),
      cultureList: listCulture(1,3),
      provinceData:{
        AC:{
          name:'Aceh',
          slug:'aceh',
          listCulture:listCulture(0,3,'aceh')
        },
        SU:{
          name:'Sumatra Utara',
          slug:'sumatra-utara',
          listCulture:listCulture(0,3,'sumatra-utara')
        },
        SB:{
          name:'Sumatra Barat',
          slug:'sumatra-barat',
          listCulture:listCulture(0,3,'sumatra-barat')
        },
        RI:{
          name:'Riau',
          slug:'riau',
          listCulture:listCulture(0,3,'riau')
        },
        KR:{
          name:'Kepulauan Riau',
          slug:'kepulauan-riau',
          listCulture:listCulture(0,3,'kepulauan-riau')
        },
        JA:{
          name:'Jambi',
          slug:'jambi',
          listCulture:listCulture(0,3,'jambi')
        },
        BE:{
          name:'Bengkulu',
          slug:'bengkulu',
          listCulture:listCulture(0,3,'bengkulu')
        },
        SS:{
          name:'Sumatra Selatan',
          slug:'sumatra-selatan',
          listCulture:listCulture(0,3,'sumatra-selatan')
        },
        BB:{
          name:'Kepulauan Bangka Belitung',
          slug:'kepulauan-bangka-belitung',
          listCulture:listCulture(0,3,'kepulauan-bangka-belitung')
        },
        LA:{
          name:'Lampung',
          slug:'lampung',
          listCulture:listCulture(0,3,'lampung')
        },
        JK:{
          name:'Jakarta',
          slug:'jakarta',
          listCulture:listCulture(0,3,'jakarta')
        },
        BT:{
          name:'Banten',
          slug:'banten',
          listCulture:listCulture(0,3,'banten')
        },
        JB:{
          name:'Jawa Barat',
          slug:'jawa-barat',
          listCulture:listCulture(0,3,'jawa-barat')
        },
        JT:{
          name:'Jawa Tengah',
          slug:'jawa-tengah',
          listCulture:listCulture(0,3,'jawa-tengah')
        },
        YO:{
          name:'Yogyakarta',
          slug:'yogyakarta',
          listCulture:listCulture(0,3,'yogyakarta')
        },
        JI:{
          name:'Jawa Timur',
          slug:'jawa-timur',
          listCulture:listCulture(0,3,'jawa-timur')
        },
        BA:{
          name:'Bali',
          slug:'bali',
          listCulture:listCulture(0,3,'bali')
        },
        NB:{
          name:'Nusa Tenggara Barat',
          slug:'nusa-tenggara-barat',
          listCulture:listCulture(0,3,'nusa-tenggara-barat')
        },
        NT:{
          name:'Nusa Tenggara Timur',
          slug:'nusa-tenggara-timur',
          listCulture:listCulture(0,3,'nusa-tenggara-timur')
        },
        KB:{
          name:'Kalimantan Barat',
          slug:'kalimantan-barat',
          listCulture:listCulture(0,3,'kalimantan-barat')
        },
        KT:{
          name:'Kalimantan Tengah',
          slug:'kalimantan-tengah',
          listCulture:listCulture(0,3,'kalimantan-tengah')
        },
        KS:{
          name:'Kalimantan Selatan',
          slug:'kalimantan-selatan',
          listCulture:listCulture(0,3,'kalimantan-selatan')
        },
        KI:{
          name:'Kalimantan Timur',
          slug:'kalimantan-timur',
          listCulture:listCulture(0,3,'kalimantan-timur')
        },
        KU:{
          name:'Kalimantan Utara',
          slug:'kalimantan-utara',
          listCulture:listCulture(0,3,'kalimantan-utara')
        },
        SA:{
          name:'Sulawesi Utara',
          slug:'sulawesi-utara',
          listCulture:listCulture(0,3,'sulawesi-utara')
        },
        GO:{
          name:'Gorontalo',
          slug:'gorontalo',
          listCulture:listCulture(0,3,'gorontalo')
        },
        ST:{
          name:'Sulawesi Tengah',
          slug:'sulawesi-tengah',
          listCulture:listCulture(0,3,'sulawesi-tengah')
        },
        SR:{
          name:'Sulawesi Barat',
          slug:'sulawesi-barat',
          listCulture:listCulture(0,3,'sulawesi-barat')
        },
        SN:{
          name:'Sulawesi Selatan',
          slug:'sulawesi-selatan',
          listCulture:listCulture(0,3,'sulawesi-selatan')
        },
        SG:{
          name:'Sulawesi Tenggara',
          slug:'sulawesi-tenggara',
          listCulture:listCulture(0,3,'sulawesi-tenggara')
        },
        MU:{
          name:'Maluku Utara',
          slug:'maluku-utara',
          listCulture:listCulture(0,3,'maluku-utara')
        },
        MA:{
          name:'Maluku',
          slug:'maluku',
          listCulture:listCulture(0,3,'maluku')
        },
        PB:{
          name:'Papua Barat',
          slug:'papua-barat',
          listCulture:listCulture(0,3,'papua-barat')
        },
        PA:{
          name:'Papua',
          slug:'papua',
          listCulture:listCulture(0,3,'papua')
        },
      }
    },
  };
}