import "./styles.css";
import * as icons from "react-icons/fa";

function Card(props) {
  return (
    <div className={props.status !== `` ? `done` : `card`}>
      <input
        type="radio"
        name={props.name}
        onClick={() => props.handleComplete()}
      />
      <strong className="strong">{props.nome}</strong>
      <small className="strong">{props.tempo}</small>
      <icons.FaTrashAlt
        className="strong"
        onClick={() => props.handleRemove()}
      />
    </div>
  );
}

export default Card;
