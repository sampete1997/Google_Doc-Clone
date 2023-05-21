import "./App.css";
import TextEditor from "./components/TextEditor/index.js";
import TopBarWrapper from "./components/TopBarWrapper";
import FormatTools from "./components/formatTools/FormatTools";
import GoogleTools from "./components/googleTools";
import CustomDrawer from "./components/googleTools/CustomDrawer";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <div className="flex flex-col items-center justify-between h-[100vh] w-full mx-1">
        <div className="sticky pb-1 w-full ">
          <TopBarWrapper />

          <FormatTools />
        </div>
        <TextEditor />
      </div>

      <GoogleTools handleDrawer={handleDrawer} />

      {isOpen && <CustomDrawer handleDrawer={handleDrawer} />}
    </div>
  );
}

export default App;
