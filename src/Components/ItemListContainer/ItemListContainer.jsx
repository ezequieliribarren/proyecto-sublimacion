import React from "react";
import { products } from "../../productsMock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

const{categoryName} = useParams()

const productFilter = products.filter ((element) => element.category === categoryName)

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(categoryName? productFilter: products);
    });
    productList
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]);
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
