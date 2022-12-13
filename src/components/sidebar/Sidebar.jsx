import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  Place,
  Hotel,
  OfflineShareRounded,
  TravelExplore,
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Place className="sidebarIcon" sx={{ fontSize: 24 }} />
            <span className="sidebarListItemText">Best Visiting Places</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" sx={{ fontSize: 24 }} />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined
              className="sidebarIcon"
              sx={{ fontSize: 24 }}
            />
            <span className="sidebarListItemText">Videos </span>
          </li>
          <li className="sidebarListItem">
            <Hotel className="sidebarIcon" sx={{ fontSize: 24 }} />
            <span className="sidebarListItemText">Hotels</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" sx={{ fontSize: 24 }} />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <OfflineShareRounded
              className="sidebarIcon"
              sx={{ fontSize: 24 }}
            />
            <span className="sidebarListItemText">Offer for Tickets</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" sx={{ fontSize: 24 }} />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <TravelExplore className="sidebarIcon" sx={{ fontSize: 24 }} />
            <span className="sidebarListItemText">Guiders</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <span className="Recommended">Recommended Travel Guiders</span>
        {/* <button className="sidebarButton">Show More</button> */}

        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
