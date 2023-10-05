import "../index.css";
import Card from "./Card";

const Concepts = (props) => {
  return (
    <div id="concepts">
      <Card className="concept">
        <img src={props.concepts[0].image} alt={props.concepts[0].title} />
        <h2>{props.concepts[0].title}</h2>
        <p>{props.concepts[0].description}</p>
      </Card>
      <Card className="concept">
        <img src={props.concepts[1].image} alt={props.concepts[1].title} />
        <h2>{props.concepts[1].title}</h2>
        <p>{props.concepts[1].description}</p>
      </Card>
      <Card className="concept">
        <img src={props.concepts[2].image} alt={props.concepts[2].title} />
        <h2>{props.concepts[2].title}</h2>
        <p>{props.concepts[2].description}</p>
      </Card>
    </div>
  );
};
export default Concepts;
