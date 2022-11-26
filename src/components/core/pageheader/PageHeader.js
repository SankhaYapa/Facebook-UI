import "./PageHeader.css";

function PageHeader(props) {
  return (
    <div className="container PageHeader-main">
      <div class="row">
        <div class="col-md-3">
          <img src={props.image} className="PageHeader-image" />
        </div>
        <div class="col-md-5">
          <h3>{props.name}</h3>
          <p>
            {props.username}·{props.category}
          </p>
        </div>
        <div class="col-md-4">
          <button className="btn btn-primary PageHeader-button">
            {props.buttonText}
          </button>
          <p className="PageHeader-link">{props.link}</p>
        </div>
      </div>
    </div>
  );
}
export default PageHeader;
