import React from "react";

const labelObject = [
  {
    type: "Food and Groceries",
    color: "#ffcd56",
    percent: "45",
  },
  {
    type: "Utilities",
    color: "#36a2eb",
    percent: "20",
  },
  {
    type: "Transportation",
    color: "#ff6384",
    percent: "10",
  },
];

const Label = () => {
  return (
    <>
      <div className="space-y-3 font-bodyFont">
        {labelObject.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white shadow-sm rounded-md px-4 py-2 w-64"
          >
            <div className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color ?? "#f9c74f" }}
              ></span>
              <h3 className="text-sm font-medium text-gray-800">
                {item.type ?? ""}
              </h3>
            </div>
            <h3 className="text-sm font-semibold text-indigo-700">
              {item.percent ?? 0}%
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Label;
