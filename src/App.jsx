import React from 'react';
import './App.css';

 function tick () {
  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is { new Date().toLocaleString() }.</h2>
    </div>
  )
}
function App() {
  return (
    <main>
      { tick() } React⚛️ + Vite⚡ + Replit🌀
    </main>
  );
}

export default App;