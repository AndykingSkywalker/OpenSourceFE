import { useEffect, useState } from "react";
import axios from "axios";
import ItemDisplay from "./ItemDisplay";


function PageForItem(props) {
  const [items, setItems] = useState([]);
  function getItems() {
    axios.get("http://localhost:8088/item/get")
      .then((response) => { 
        setItems(response.data)
       })
      .catch(console.log);
  }

  useEffect(() => {
    getItems();
  }, []);

  

  return (
    <div>
      <h1>Groceries</h1>
      <div id="">
        <ItemDisplay listItems={items} />
      
      </div>
    </div>
  );
}

export default PageForItem;
