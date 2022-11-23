import Menu from "./Menu";
import "./MenuBar.css";

function MenuBar() {
  return (
    <div className="MenuBar-main">
      <Menu name="Home" icon="fas fa-home" />
      <Menu name="Watch" icon="fab fa-youtube" count="4" />
      <Menu name="Group" icon="fa fa-users" count="4" />
      <Menu name="Gaming" icon="fas fa-chess-board" />
    </div>
  );
}
export default MenuBar;
