import Coverr from "../core/cover/Coverr";
import PageHeader from "../core/pageheader/PageHeader";
import "./Banner.css";
import image from "./image.jpg";

function Banner() {
  return (
    <div className="Banner-main">
      <div className="container Banner-container">
        <Coverr image="banner.jpg"></Coverr>
      </div>
      <PageHeader
        image={image}
        name="Sanha Yapa"
        username="@sankhayapa"
        category="Software Engineer"
        buttonText="Follow"
        link="sankhayapa.com"
      />
    </div>
  );
}

export default Banner;
