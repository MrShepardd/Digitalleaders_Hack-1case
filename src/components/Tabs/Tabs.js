import React, { useState } from "react";
import { Tabs as HolismTabs } from "@holism/core";

const Tabs = ({items, updateActiveTab}) => {
  const [list, setList] = useState(items);

  const handleTabChange = ({ id, isActive, label }) => {
      updateActiveTab(id);
      setList(
          list.map((item) =>
              item.id === id
                  ? { id, isActive: true, label }
                  : { ...item, isActive: false }
          )
      );
  };

  return (
      <div className="my-3 p-2 pb-3 pl-5 border">
          <HolismTabs
              list={list}
              onChange={handleTabChange}
          />
      </div>
  );
};

export default Tabs;
