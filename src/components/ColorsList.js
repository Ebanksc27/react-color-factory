import React from 'react';
import { Link } from 'react-router-dom';

function ColorsList({ colors }) {
  return (
    <div>
      <h1>Welcome to the color factory.</h1>
      <h2><Link to="/colors/new">Add a color</Link></h2>
      <ul>
        {colors.map(color => (
          <li key={color.name}>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorsList;
