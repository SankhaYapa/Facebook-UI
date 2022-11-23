import Logo from "../core/logo/Logo";
import MenuBar from "../core/menubar/MenuBar";
import Profile from "../core/profile/Profile";
import SearchBox from "../core/searchbox/SearchBox";
import "./Header.css";

function Header() {
  return (
    <div className="Header-main">
      <div class="row">
        <div class="col-md-3">
          <Logo />
          <SearchBox></SearchBox>
        </div>
        <div class="col-md-6">
          <MenuBar></MenuBar>
        </div>
        <div class="col-md-3">
          <Profile name="Sankha Yapa"></Profile>
        </div>
      </div>
    </div>
  );
}

export default Header;
