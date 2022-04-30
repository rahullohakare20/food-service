import { Button, Zoom } from "@mui/material";
import { useEffect, useState } from "react";
import AddForm from "../addForm/addForm.component";
import ProductCard from "../card/productCard.component";
import { FoodService } from './card.service';
import { ProductCardWrapper, ProductContainerWrapper } from "./cardContainer.style";

function CardContainer() {
    const [foodData, setFoodData] = useState([]);
    const [openForm, setOpenForm] = useState(false);
    const [deletedItem, setDeletedItem] = useState();
    const [latestId, setLatestId] = useState(6);

    useEffect(() => {
        const data = FoodService.getFoodData();
        setFoodData([...data]);
    }, []);

    const handleDelete = (id) => {
        setDeletedItem(id);
    }

    const handleAdd = () => {
        setOpenForm(true);
    }

    const handleDeleteItem = (id) => {
        const updatedFoodData = foodData.filter(food => food.id !== id);
        setFoodData(updatedFoodData);
    }

    const handleSave = (data) => {
        const updatedData = [...foodData];
        const newId = latestId + 1;

        updatedData.push({ ...data, id: newId });
        setLatestId(newId);
        setFoodData(updatedData);
        setOpenForm(false);
    }

    return (
        <div>
            <div>
                <div className="header">
                    <h2>Food Services</h2>
                </div>
                <div className="add">
                    <Button
                        className="addButton"
                        variant="outlined"
                        color="secondary"
                        onClick={handleAdd}>
                        Add Food
                    </Button>
                </div>
            </div>
            <ProductContainerWrapper>
                {foodData && foodData.length > 0 ?
                    <>
                        {foodData.map((foodItem) => <Zoom
                            onExited={() => handleDeleteItem(foodItem.id)}
                            in={deletedItem !== foodItem.id}
                            style={{ transitionDelay: '100ms' }}
                        >
                            <ProductCardWrapper key={foodItem.id}>
                                <ProductCard key={foodItem.id} productDetail={foodItem} handleDelete={handleDelete} />
                            </ProductCardWrapper>
                        </Zoom>
                        )}
                    </> :
                    <div>No data found</div>}
            </ProductContainerWrapper>
            <AddForm open={openForm} setOpen={setOpenForm} handleSave={handleSave} />
        </div>
    );
}

export default CardContainer;
