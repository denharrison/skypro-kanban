import "./App.css";
import PopUser from "./components/PopUser/PopUser.";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <div className="wrapper">
        {/* Первые компонент */}
        <PopUser />
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
