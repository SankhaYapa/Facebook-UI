import "./Profile.css";
import image from "./profile.jpg";

function Profile(props) {
  return (
    <div className="Profile-main">
      <img src={image} className="Profile-photo" alt="Profile" />
      <span>{props.name}</span>
    </div>
  );
}
export default Profile;
