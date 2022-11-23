import "./Menu.css";

function Menu(props) {
  return (
    <div className="Menu-main btn btn-light" title={props.name}>
      <i class={props.icon}></i>
      {props.count > 0 && (
        <span className="badge badge-danger Menu-badge">{props.count}</span>
      )}
    </div>
  );
}
export default Menu;
