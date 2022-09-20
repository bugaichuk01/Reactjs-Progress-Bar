import React from 'react';
import './App.css';
import {ProgressBar} from "./components/ProgressBar";

function App() {

    const items = [
        {name: 'Sold', color: '#BD1FBE', value: 677},
        {name: 'Got free', color: '#FC64FF', value: 223},
        {name: 'Burned', color: '#EA0000', value: 223},
        {name: 'Free float', color: '#00ea5e', value: 800},
        {name: 'Free float', color: '#00ea5e', value: 0},
    ]

  return (
    <div className="App">
        <ProgressBar items={items} width={1400} height={25} />
        <ProgressBar items={items} width={800} height={50} />
    </div>
  );
}

export default App;
