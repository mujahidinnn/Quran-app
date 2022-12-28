import "./App.css";
import { Fragment, useState } from "react";
import SidebarQuran from "./components/sidebar/SidebarQuran";
import MainQuran from "./components/main/MainQuran";
import HeaderQuran from "./components/header/HeaderQuran";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <Fragment>
      <HeaderQuran />
      <div className="App">
        <div className="wrapper-sidebar-quran">
          <SidebarQuran
            setNumber={(res) => {
              setNumber(res);
            }}
          />
        </div>
        <div className="wrapper-main-quran">
          <MainQuran number={number} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
