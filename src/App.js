import "./App.css";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import useFirestore from "./hooks/useFirestore";
import PhotoLine from "./components/PhotoLine/PhotoLine";
import Modal from "./components/Modal/Modal";
import SecondMenu from "./components/SecondMenu/SecondMenu";

function App() {
  const [language, setLanguage] = useState("eng");
  const [projectNumber, setProjectNumber] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const { docs } = useFirestore();

  return (
    <div className='App'>
      <main>
        <Menu
          projectNumber={projectNumber}
          docs={docs}
          language={language}
          setLanguage={setLanguage}
        />
        <PhotoLine
          projectNumber={projectNumber}
          docs={docs}
          language={language}
          setSelectedImage={setSelectedImage}
        />
        <SecondMenu setLanguage={setLanguage} />

        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            docs={docs}
          />
        )}
      </main>
    </div>
  );
}

export default App;
