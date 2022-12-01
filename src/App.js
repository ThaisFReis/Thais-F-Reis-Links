import "./App.css";

// Document
import CV from "./Assets/CV - Thais Ferreira Reis.pdf";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Thais F. Reis</h1>
      </header>
      <div className="content">
        <a href="https://portfolio-thaisfreis.vercel.app/" target="_blank" rel="noreferrer">
          <button>
            <ion-icon name="laptop"></ion-icon>
            Portfolio
          </button>
        </a>
        <a href="https://github.com/ThaisFReis" target="_blank" rel="noreferrer">
          <button>
            <ion-icon name="logo-github"></ion-icon>
            Github
          </button>
        </a>
        <a href="https://www.linkedin.com/in/thaisfreis/" target="_blank" rel="noreferrer">
          <button>
            <ion-icon name="logo-linkedin"></ion-icon>
            LinkedIn
          </button>
        </a>
        <a href={CV} download="CV - Thais Ferreira Reis.pdf">
          <button>
            <ion-icon name="download-outline"></ion-icon>
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
