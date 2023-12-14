import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ColorsList from './components/ColorsList';
import ColorDetails from './components/ColorDetails';
import NewColorForm from './components/NewColorForm';

function App() {
  const [colors, setColors] = useState([{ name: 'red', hex: '#FF0000' }]); // Example color

  const addColor = (newColor) => {
    setColors(prevColors => [newColor, ...prevColors]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/colors" element={<ColorsList colors={colors} />} />
        <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route path="/" element={<Navigate replace to="/colors" />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </Router>
  );
}

export default App;


