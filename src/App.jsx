import "./App.css";
import { PopReg } from "./components /pop-components";
import { PopNewCard } from "./components /pop-components";
import { PopBrowse } from "./components /pop-components";
import Header from "./components /header-component";
import Main from "./components /main-component";
function App() {
  return (
    <>
      <div className="wrapper">
        {/* Первые компонент */}
        <PopReg />
        <PopNewCard />
        {/* Второй компонент */}
        <PopBrowse />
        {/* Третий компонент */}
        <Header />
        {/* Четвертый  компонент */}
        <Main />
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
