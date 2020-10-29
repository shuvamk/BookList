import React from 'react'
import AuthContextProvider from './ contexts/AuthContext';
import ThemeContextProvider from './ contexts/ThemeContext';

import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />          
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
