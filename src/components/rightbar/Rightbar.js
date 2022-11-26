import "./Rightbar.css";

export default function Rightbar() {
  return (
    <div className="Rightbar">
      <div className="rightWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 Other friends</b> have a birthday today.{" "}
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rughtbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightBarFriends">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rigthbarUsername">John Center</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
