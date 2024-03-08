// import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  const itens = ["NY", "SF", "JP"];

  return (
    <>
      <h1>Title</h1>
      <ul className="list-group">
        {/* <li className="list-group-item">An Iten</li>
        <li className="list-group-item">A second Iten</li>
        <li className="list-group-item">A Third Iten</li>
        <li className="list-group-item">A Four Iten</li> */}
        {itens.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
