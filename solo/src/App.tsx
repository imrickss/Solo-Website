import Nave from "./components/Nave";
import "./index.css";
import Header from "./components/Header";
import SectionProdutividade from "./components/SectionsProdutividade";
import SectionFacilidade from "./components/SectionsFacilidade";
import SectionLucratividade from "./components/SectionsLucratividade";
import OQueFazemos from "./components/OQueFazemos";

export default function App() {
  return (
    <main className="app-container">

        <nav>
          <Nave />
        </nav>
          <header>
            <Header />
          </header>
          <div className="Ellipse-34"></div>
          <div className="flex justify-end">
            <div className="Ellipse-35"></div>
          </div>

        <body className="sections">  
            <SectionProdutividade />
            <SectionFacilidade />
            <SectionLucratividade />
            <OQueFazemos />
            
        </body>
        <div className="Ellipse-34"></div>
    </main>
  );
}
