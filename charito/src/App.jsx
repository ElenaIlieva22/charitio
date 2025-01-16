import React from 'react';
import MainSectionHome from './components/MainSectionHome';
import Navbar from './layout/Navbar/Navbar';



function App() {
  return (
    <div className="min-h-screen bg-gray-50">
    < Navbar />
      
      <main className="relative">
        <MainSectionHome />
      </main>
  
    </div>
  );
}

export default App;