import "./App.css";
import TextEditor from "./components/TextEditor/index.js";
import TopBarWrapper from "./components/TopBarWrapper";
import FormatTools from "./components/formatTools/FormatTools";
import GoogleTools from "./components/GoogleTools";
import CustomDrawer from "./components/GoogleTools/CustomDrawer";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(false);
  const [componentToRender, setComponentToRender] = useState(<div />);
  const handleDrawer = () => setIsOpen(!isOpen);
  const getGoogleToolComponent = (component) => {
    setComponentToRender(component);
  };
  const getTitle = (title) => setTitle(title)

  return (
    <div className="App">
      <div className="flex flex-col items-center justify-between h-[100vh] w-full mx-1">
        <div className="sticky pb-1 w-full ">
          <TopBarWrapper />

          <FormatTools />
        </div>
        <TextEditor />
      </div>

      <GoogleTools
        getGoogleToolComponent={getGoogleToolComponent}
        getTitle={getTitle}
        handleDrawer={handleDrawer}
      />

      {isOpen && (
        <CustomDrawer
          componentToRender={componentToRender}
          handleDrawer={handleDrawer}
          title={title}
        />
      )}
    </div>
  );
}

export default App;
