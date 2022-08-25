import "./App.css";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import useFirestore from "./hooks/useFirestore";
import PhotoLine from "./components/PhotoLine/PhotoLine";
import ProjectList from "./components/ProjectsList/ProjectList";

function App() {
  const [language, setLanguage] = useState("eng");
  const [projectNumber, setProjectNumber] = useState(0);
  const { docs } = useFirestore();

  console.log(docs);
  return (
    <div className='App'>
      <main>
        <Menu language={language} />
        <PhotoLine
          projectNumber={projectNumber}
          docs={docs}
          language={language}
        />
        <ProjectList
          projectNumber={projectNumber}
          docs={docs}
          language={language}
        />
      </main>
    </div>
  );
}

export default App;
