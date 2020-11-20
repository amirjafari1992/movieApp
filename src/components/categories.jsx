import React from "react";

const Categories = props => {
  const { onItemSelect, textProperty, selectedItem } = props;
  return (
    <ul className="list-group">
      {props.items.map(item => (
        <li
          className={
            item === selectedItem
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          key={item[textProperty]}
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

Categories.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default Categories;
