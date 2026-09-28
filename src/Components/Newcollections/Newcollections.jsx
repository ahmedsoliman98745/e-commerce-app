import React from "react";
import "./Newcollections.css";
import Item from "../Item/Item";
import new_collections from "../Assets/new_collections";
const Newcollections = () => {
  return (
    <div className="newCollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item) => {
          return (
            <Item
              key={item.id}
              name={item.name}
              id={item.id}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Newcollections;
