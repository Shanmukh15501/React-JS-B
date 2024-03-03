import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  const categories = ['Home','business', 'entertainment', 'science', 'sports', 'technology'];
  const [category, setCategory] = useState(() => {
    // Retrieve the category from localStorage if available, otherwise default to undefined
    return localStorage.getItem('category') || undefined;
  });

  useEffect(() => {
    if (category !== undefined) {
      // Store the category in localStorage on every state update
      localStorage.setItem('category', category);
    }
  }, [category]);

  const handleNewsCategory = (category) => {
    setCategory(category);
  };

  // Fetch the category from localStorage and set it as the last stored value
  useEffect(() => {
    const lastStoredCategory = localStorage.getItem('category');
    if (lastStoredCategory !== null) {
      setCategory(lastStoredCategory);
    }
  }, []);


  return (
    <div className="App">
      <Navbar categories={categories} handleNewsCategory={handleNewsCategory} />
      <News category={category} />
    </div>
  );
}

export default App;
