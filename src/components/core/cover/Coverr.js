import "./Coverr.css";

function Coverr(props) {
  return (
    <div
      className="Cover-main"
      style={{
        backgroundImage: "url(" + props.image + ")",
      }}
    ></div>
  );
}
export default Coverr;
