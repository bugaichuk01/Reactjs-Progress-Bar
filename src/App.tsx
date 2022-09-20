import React from 'react';
import './App.css';
import {ProgressBar} from "./components/ProgressBar";

function App() {
    const items = [
        {name: 'Got free', color: '#FC64FF', value: 70},
        {name: 'Free float', color: '#551379', value: 50},
        {name: 'Burned', color: '#EA0000', value: 80},
        {name: 'Free float', color: '#3133c5', value: 0},
    ]

  return (
    <div className="App">
        <ProgressBar items={items} width={1400} height={30} />
    </div>
  );
}

export default App;
