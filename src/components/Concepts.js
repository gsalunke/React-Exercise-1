import "../index.css";
import Card from "./Card";
import { useState, useEffect } from "react";

const Concepts = (props) => {
  const [userEmail, setUserEmail] = useState([]);
  const conceptsList = props.concepts.map((item) => (
    <Card key={item.id} className="concept">
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </Card>
  ));
  useEffect(() => {
    const userDataApiUrl = "https://dummyjson.com/users";
    fetch(userDataApiUrl).then((response) =>
      response
        .json()
        .then((json) => {
          console.log("I am all data", json);
          setUserEmail(json.users);
        })
        .catch((e) => {
          console.log("ERROR:::", e);
        })
    );
  }, []);

  return (
    <div>
      <center>
        <h2>Map Example</h2>
      </center>
      <div id="concepts">{conceptsList}</div>
      <center>
        <h2>API Call - with fetch method</h2>
        <p>
          You will see console.log is called twice in developer tools, its
          because crate-react-app ads "React.StrictMode" inside your `index.js`
          if you want to avoid twice useEffect loading issue then remove `
          "React.StrictMode" from your index.js file and check once.
        </p>
        {userEmail.map((item) => {
          return <div key={item.id}>{item.email}</div>;
        })}
      </center>
    </div>
  );
};
export default Concepts;
