import "./App.css";

// Document
import CV from "./Assets/CV - Thais Ferreira Reis.pdf";

function App() {
  return (
  <>
    <div className="App">
      <header>
        <h1>Thais F. Reis</h1>
      </header>
      <div className="content">
        <a href="https://portfolio-thaisfreis.vercel.app/" target="_blank" rel="noreferrer">
          <button>
            Portfolio
          </button>
        </a>
        <a href="https://github.com/ThaisFReis" target="_blank" rel="noreferrer">
          <button>
            Github
          </button>
        </a>
        <a href="https://www.linkedin.com/in/thaisfreis/" target="_blank" rel="noreferrer">
          <button>
            LinkedIn
          </button>
        </a>
        <a href={CV} download="CV - Thais Ferreira Reis.pdf">
          <button>
            Download CV
          </button>
        </a>
      </div>
    </div>
    <footer>
        <a href="https://br.freepik.com/fotos-gratis/astronautas-saindo-da-cabine-ilustracoes-de-ficcao-cientifica-pintura-digital_14541120.htm#page=2&query=astronauta&position=49&from_view=search&track=sph">Imagem de liuzishan</a> no Freepik
    </footer>
  </>
  );
}

export default App;
