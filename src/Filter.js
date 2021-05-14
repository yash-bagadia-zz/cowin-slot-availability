import React from "react";
import { FilterOutlined } from "@ant-design/icons";
import { Button, Tag } from "antd";

const Filter = ({
  items = [],
  itemRemoved,
  allItemsRemoved,
  visible,
  isDistrict
}) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="simple-border" data-tour="display-filter">
      <FilterOutlined style={{ marginRight: "0.5rem" }} type="filter" />
      {createFilters(items, itemRemoved, isDistrict)}
      {items.length > 1 && (
        <Button danger onClick={allItemsRemoved}>
          Clear All
        </Button>
      )}
    </div>
  );
};

const createFilters = (items, itemRemoved, isDistrict) => {
  if (items.length) {
    return items.map((item) => (
      <Tag
        color="#108ee9"
        closable
        onClose={() => itemRemoved(item)}
        key={isDistrict ? item.district_id : item}
      >
        {isDistrict ? item.district_name : item}
      </Tag>
    ));
  } else {
    return (
      <span style={{ opacity: "0.5", userSelect: "none" }}>
        Add a pincode or select a district. You can add multiple.
      </span>
    );
  }
};

export default Filter;
