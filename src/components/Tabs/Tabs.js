import React, { useState } from "react";
import { Tabs as HolismTabs } from "@holism/core";

const IItem = [
  {
    id: "currentATM",
    label: "Текущее расположение банкоматов",
    isActive: true,
  },
  { id: "radiusATM", label: "Радиус банкоматов", isActive: false },
  { id: "humanflowATM", label: "С передвижением людей", isActive: false },
];

const Tabs = () => {
  const [list, setList] = useState(IItem);
  return (
    <HolismTabs
      list={list}
      onChange={({ id, isActive, label }) => {
        setList(
          list.map((item) =>
            item.id === id
              ? { id, isActive: true, label }
              : { ...item, isActive: false }
          )
        );
      }}
    />
  );
};

export default Tabs;
