// import Message from "./Message";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  const [alertVisivle, setAlertVisivle] = useState(false);
  return (
    <div>
      {alertVisivle && (
        <Alert onClose={() => setAlertVisivle(false)}>My alert</Alert>
      )}
      <Buttons color="danger" onClick={() => setAlertVisivle(true)}>
        prima btn
      </Buttons>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Alert>
//         Mr <span> Hello </span> W
//       </Alert>
//     </div>
//   );
// }

// import ListGroup from "./components/ListGroup";
// function App() {
//   let itens = ["NY", "SF", "JP", "BR", "RU"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div className="">
//       <ListGroup
//         items={itens}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       ></ListGroup>
//       {/* <ListGroup></ListGroup> */}
//     </div>
//   );
// }

export default App;
