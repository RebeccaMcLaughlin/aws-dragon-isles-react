import React, { useEffect } from "react";
import DragonPanel from "./DragonPanel";
import GetDragons from "../api/GetDragons";

const Dragons = (props) => {
  const [dragons, setDragons] = React.useState([]);

  const init = async () => {
    const getDragons = await GetDragons();
    setDragons(getDragons);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div style={{ display: "flex", marginLeft: -40 }}>
      {dragons.map((d, index) => {
        return (
          <DragonPanel
            // eslint-disable-next-line react/no-array-index-key
            key={`dragon${index}`}
            name={d.name}
            species={d.species}
            image={d.image}
          />
        );
      })}
    </div>
  );
};

export default Dragons;
