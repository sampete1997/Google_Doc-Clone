import "./App.css";
import TextEditor from "./components/TextEditor/index.js";
import TopBarWrapper from "./components/TopBarWrapper";
import FormatTools from "./components/FormatTools/FormatTools";
import GoogleTools from "./components/GoogleTools";
import CustomDrawer from "./components/GoogleTools/CustomDrawer";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [titleAndUrl, setTitleAndUrl] = useState({title: " ", linkTo: "#"});
  const [componentToRender, setComponentToRender] = useState(<div />);
  const handleDrawer = (flag) => setIsOpen(flag);
  const getGoogleToolComponent = (component) => {
    setComponentToRender(component);
  };
  const getTitleAndUrl = ({title,linkTo="https://myaccount.google.com/xyz"}) => setTitleAndUrl({title,linkTo})

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
        getTitleAndUrl={getTitleAndUrl}
        handleDrawer={handleDrawer}
      />

      {isOpen && (
        <CustomDrawer
          componentToRender={componentToRender}
          handleDrawer={handleDrawer}
          titleAndUrl={titleAndUrl}
        />
      )}
    </div>
  );
}

export default App;
