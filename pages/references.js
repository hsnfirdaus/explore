import Head from "next/head";
import Layout from "../components/Layout";
import CONFIG from "../const/config";
export default function References() {
  return (
    <>
      <Head>
        <title>References | { CONFIG.SITE }</title>
      </Head>
      <Layout>
        <section id="hero" className="min">
          <img src="/assets/images/1593517202-waisak_borobudur_2019-0535.webp" className="hero-bg"/>
          <div className="hero-text center">
            <div className="wrap">
              <h2>References and Resources</h2>
            </div>
          </div>
        </section>
        <section id="references">
          <div className="wrap content-block">
            <h3>Framework and Library</h3>
            <div className="ref-item">
              <h4><a href="https://nextjs.org/">NextJS</a></h4>
              <p>Static site generator (SSG) to build static html that build in top of ReactJS Framework.</p>
            </div>
            <div className="ref-item">
              <h4><a href="https://github.com/jonschlinkert/gray-matter">Gray Matter</a></h4>
              <p>Library to parse YAML in in top of Markdown (.md) file (parse metadata).</p>
            </div>
            <div className="ref-item">
              <h4><a href="https://github.com/markedjs/marked">Marked</a></h4>
              <p>Library to parse markdown file and transform into HTML tag.</p>
            </div>
            <h3>Essential UI</h3>
            <div className="ref-item">
              <h4><a href="https://github.com/feathericons/react-feather">React Feather</a></h4>
              <p>React Element for Feather icons.</p>
            </div>
            <div className="ref-item">
              <h4><a href="https://fonts.google.com">Google Fonts</a></h4>
              <p>Arima Madurai and Raleway font that's hosted in Google Fonts.</p>
            </div>
            <div className="ref-item">
              <h4><a href="https://commons.wikimedia.org/wiki/File:Indonesian_provinces_blank.svg">Indonesian Provinces Map</a></h4>
              <p>SVG Map of Indonesia created by user RXerself from Wikipedia, modified colour.</p>
            </div>
            <h3>Images and Content Resources</h3>
            <div className="ref-item">
              <h4><a href="https://wonderfulimage.id/">WonderfulImage.id</a></h4>
              <p>Many of images are from wonderfulimage.id and also content is translated from this website.</p>
              <ul>
                <li><a href="https://wonderfulimage.id/read/301/dieng-culture-festival" target="_blank">https://wonderfulimage.id/read/301/dieng-culture-festival</a></li>
                <li><a href="https://wonderfulimage.id/read/429/kemegahan-istana-basa-pagaruyung-menjadu-ikon-sumatra-barat" target="_blank">https://wonderfulimage.id/read/429/kemegahan-istana-basa-pagaruyung-menjadu-ikon-sumatra-barat</a></li>
                <li><a href="https://wonderfulimage.id/read/381/keunikan-motif-batik-batam-yang-mencuri-perhatian" target="_blank">https://wonderfulimage.id/read/381/keunikan-motif-batik-batam-yang-mencuri-perhatian</a></li>
                <li><a href="https://wonderfulimage.id/read/286/kerajinan-ukiran-patung-kayu-tradisional-bali" target="_blank">https://wonderfulimage.id/read/286/kerajinan-ukiran-patung-kayu-tradisional-bali</a></li>
                <li><a href="https://wonderfulimage.id/read/149/eksotisme-desa-adat-ratenggaro" target="_blank">https://wonderfulimage.id/read/149/eksotisme-desa-adat-ratenggaro</a></li>
                <li><a href="https://wonderfulimage.id/read/89/waisak-borobudur" target="_blank">https://wonderfulimage.id/read/89/waisak-borobudur</a></li>
                <li><a href="https://wonderfulimage.id/read/128/festival-morotai-land-of-stories-tampilkan-bambu-tada-dan-tari-kolosal" target="_blank">https://wonderfulimage.id/read/128/festival-morotai-land-of-stories-tampilkan-bambu-tada-dan-tari-kolosal</a></li>
                <li><a href="https://wonderfulimage.id/read/175/memperlihatkan-toleransi-dari-perang-topat" target="_blank">https://wonderfulimage.id/read/175/memperlihatkan-toleransi-dari-perang-topat</a></li>
                <li><a href="https://wonderfulimage.id/read/305/desa-adat-todo" target="_blank">https://wonderfulimage.id/read/305/desa-adat-todo</a></li>
                <li><a href="https://wonderfulimage.id/read/434/rumah-gadang-ukiran-cina" target="_blank">https://wonderfulimage.id/read/434/rumah-gadang-ukiran-cina</a></li>
                <li><a href="https://wonderfulimage.id/read/287/seniman-ukir-kayu-di-tengah-pandemi" target="_blank">https://wonderfulimage.id/read/287/seniman-ukir-kayu-di-tengah-pandemi</a></li>
                <li><a href="https://wonderfulimage.id/read/272/uniknya-pacu-jawi-tanah-datar" target="_blank">https://wonderfulimage.id/read/272/uniknya-pacu-jawi-tanah-datar</a></li>
              </ul>
            </div>
            <div className="ref-item">
              <h4><a href="https://translate.google.com">Google Translate</a></h4>
              <p>Some of website content is translated with Google Translate.</p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}