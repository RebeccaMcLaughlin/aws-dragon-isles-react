import React from "react";
import PropTypes from "prop-types";

const DragonPanel = (props) => {
  const { name, species, image } = props;

  return (
    <div style={{ paddingLeft: 40 }}>
      <h3>{name}</h3>
      <p>{species}</p>
      <img src={image} alt="Dragon" width="180" />
    </div>
  );
};

DragonPanel.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};


export default DragonPanel;
