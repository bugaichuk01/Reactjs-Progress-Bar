import React from 'react';
import './App.css';
import {ProgressBar} from "./components/ProgressBar";

function App() {
    const items = [
        {name: 'Sold', color: '#BD1FBE', value: 677},
        {name: 'Got free', color: '#FC64FF', value: 223},
        {name: 'Free float', color: '#551379', value: 50},
        {name: 'Burned', color: '#EA0000', value: 200},
        {name: 'Free float', color: '#00ea5e', value: 800},
        {name: 'Free float', color: '#3133c5', value: 0},
    ]

  return (
    <div className="App">
        <ProgressBar items={items} width={1400} height={35} />
        <ProgressBar items={items} width={800} height={35} />
        <ProgressBar items={items} width={400} height={35} />
    </div>
  );
}

export default App;
