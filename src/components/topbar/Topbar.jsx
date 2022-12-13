import "./topbar.css";
import {
  Search,
  Person,
  Chat,
  Notifications,
  ArrowDropDownCircle,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const logout = () => {
    localStorage.clear();
    navigator("/login");
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SL GUIDER</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for visiting places, hotels, guiders or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person sx={{ fontSize: 24 }} />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat sx={{ fontSize: 24 }} />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications sx={{ fontSize: 24 }} />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div></div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/profile.jpg"
            }
            alt=""
            className="topbarImg"
          />
        </Link>

        <Link
          to={`/login`}
          onClick={logout}
          // style={{ backgroundColor: "red", color: "white", padding: "20px" }}
        >
          Log
        </Link>
      </div>
    </div>
  );
}
