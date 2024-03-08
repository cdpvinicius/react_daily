// import { Fragment } from "react/jsx-runtime";
// import { MouseEvent, useState } from "react";
import { useState } from "react";

// {intem: [], heading:string}
interface Props {
  items: string[];
  heading: string;
  // (item: strign) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let itens = ["NY", "SF", "JP", "BR", "RU"];
  // let selectedIndex = 0;
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0]; // variable (selectedIndex)
  // arr[1]; // updater function
  // const [name, setName] =

  // event handler
  // const handleClick = (event?: MouseEvent) => console.log(event);
  // if (itens.length === 0) return <p>No itens Found</p>;
  // const message = itens.length === 0 ? <p> No item found</p> : null;

  // const getMessage = () => {
  //   return itens.length === 0 ? <p> No item found</p> : null;
  // };

  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {/* <li className="list-group-item">An Iten</li>
        <li className="list-group-item">A second Iten</li>
        <li className="list-group-item">A Third Iten</li>
        <li className="list-group-item">A Four Iten</li> */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// i dont understood Managing State
// passing funcions via props
