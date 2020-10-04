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

const Tabs = ({updateActiveTab}) => {
  const [list, setList] = useState(IItem);
  return (
      <div className="my-3 p-2 pb-3 pl-5 border">
          <HolismTabs
              list={list}
              onChange={({ id, isActive, label }) => {
                  updateActiveTab(id);
                  setList(
                      list.map((item) =>
                          item.id === id
                              ? { id, isActive: true, label }
                              : { ...item, isActive: false }
                      )
                  );
              }}
          />
      </div>
  );
};

export default Tabs;
