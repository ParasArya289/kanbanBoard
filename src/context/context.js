import { createContext, useContext, useState } from "react";

const context = createContext();

export const ContextProvider = ({ children }) => {
  const [columns, setColumns] = useState([
    {
      title: "Column 1",
      tasks: [
        { title: "CT11", column: "Column 1" },
        { title: "CT12", column: "Column 1" },
        { title: "CT13", column: "Column 1" },
        { title: "CT14", column: "Column 1" }
      ]
    },
    {
      title: "Column 2",
      tasks: [
        { title: "CT21", column: "Column 2" },
        { title: "CT22", column: "Column 2" },
        { title: "CT23", column: "Column 2" }
      ]
    },
    {
      title: "Column 3",
      tasks: [
        { title: "CT31", column: "Column 3" },
        { title: "CT32", column: "Column 3" }
      ]
    }
  ]);
  const [currentlyDragging, setCurrentlyDragging] = useState(null);

  return (
    <context.Provider
      value={{ columns, currentlyDragging, setColumns, setCurrentlyDragging }}
    >
      {children}
    </context.Provider>
  );
};

export const useKanban = () => useContext(context);
