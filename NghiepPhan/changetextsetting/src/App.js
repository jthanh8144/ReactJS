import { useState, createContext } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizePicker from './components/SizePicker';
import Reset from './components/Reset';
import Result from './components/Result';

const AppContext = createContext();

function App() {
  const [color, setColor] = useState('red');
  const [size, setSize] = useState(14);

  return (
    <AppContext.Provider value={
      {
        color,
        setColor,
        size,
        setSize
      }
    }>
      <div className="App">
        <ColorPicker></ColorPicker>
        <SizePicker></SizePicker>
        <Reset></Reset>
        <Result></Result>
      </div>
    </AppContext.Provider>
  );
}

export { AppContext };
export default App;
