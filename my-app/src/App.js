import css from './App.module.css';
import NavBarSimple from './components/NavBarSimple';
import SideBar from './components/SideBar';
function App() {
  return (
    <div className={css.App}>
      <div><SideBar /></div>
      <div><NavBarSimple /></div>
    </div>
  );
}

export default App;