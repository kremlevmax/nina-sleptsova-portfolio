import "./App.css";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import useFirestore from "./hooks/useFirestore";
import PhotoLine from "./components/PhotoLine/PhotoLine";

function App() {
  const [language, setLanguage] = useState("eng");
  const [projectNumber, setProjectNumber] = useState(0);
  const { docs } = useFirestore();

  return (
    <div className='App'>
      <main>
        <Menu language={language} />
        <PhotoLine projectNumber={projectNumber} docs={docs} />
        <section className='project-list'></section>
      </main>
    </div>
  );
}

export default App;
