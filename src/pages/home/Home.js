import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import "./Home.css";
import Feed from "../../components/feed/Feed";

function Home() {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
