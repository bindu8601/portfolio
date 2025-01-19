import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { MainSection } from "./components/Mainsection";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import "./style.css";
function App() {
  return (
    <div>
      <Header />
      <MainSection />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
