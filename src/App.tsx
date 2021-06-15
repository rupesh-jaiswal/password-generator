import React, { useState } from 'react';
import { RangeSelector, Toggle } from './components';
import './App.scss';

const MIN_LENGTH=4;
const MAX_LENGTH=16;
function App() {

  const [length, saveLength] = useState(MIN_LENGTH);
  const saveValue = (value: number) => {
    saveLength(value);
  };

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__container__header">
          Password Generator
        </div>
        <div className="app__container__action">
          Click Generate
        </div>
        <RangeSelector
          min={MIN_LENGTH}
          max={MAX_LENGTH}
          callback={saveValue}
          unit="Length"
        />
        <div className="settings">
            <Toggle
              onToggle={(value: boolean) => {}}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
