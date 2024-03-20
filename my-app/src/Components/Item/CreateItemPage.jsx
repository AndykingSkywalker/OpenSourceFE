import CreateItem from "./CreateItem";
import CreateBasket from "../Basket/CreateBasket";
import BasketDisplay from "../Basket/BasketDisplay";

function CreateItemPage() {
    return (
        <div style={{display: "flex"}}>
            <div style={{flex: 1}}>
            <CreateItem/>
            </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", marginRight: "30px", maxWidth: "600px", border: "3px solid black" }}>
                <CreateBasket/>
                <BasketDisplay/>
                </div>
            </div>
    )
}

export default CreateItemPage;