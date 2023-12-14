import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

function ColorDetails({ colors }) {
  const { color } = useParams();
  const colorDetails = colors.find(c => c.name === color);

  if (!colorDetails) {
    return <Navigate to="/colors" />;
  }

  const divStyle = {
    height: '100vh',
    backgroundColor: colorDetails.hex
  };

  return (
    <div style={divStyle}>
      <h1>This is {colorDetails.name}.</h1>
      <h2>Isn't it beautiful?</h2>
    </div>
  );
}

export default ColorDetails;
