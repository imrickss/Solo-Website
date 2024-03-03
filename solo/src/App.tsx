import Nave from "./components/Nave";
import "./index.css";
import Header from "./components/Header";
import SectionProductive from "./components/Sections";

export default function App() {
  return (
    <main className="app-container">
      <nav>
        <Nave />
      </nav>
      <header>
        <Header />
      </header>
        <body>
          <SectionProductive />
        </body>
    </main>
  );
}
