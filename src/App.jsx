import { useState, useEffect, useRef } from 'react';
import './App.css';
import Grid from './components/Grid'

import { validate, generateArray } from './util/util';

const App = () => {
  const [selectLevel, setSelectLevel] = useState('3');
  const [array, setArray] = useState([]);//generateArray(selectLevel) 
  const [selectedPair, setSelectedPair] = useState([]); // need to also pop
  const [currSelected, setCurrSelected] = useState({})

  const timeout = useRef(null);

  useEffect(()=>{
    if (validate(selectedPair)){
      alert(selectedPair + ' win!');
      setSelectedPair([...[], ...array]);
    }else if (selectedPair.length === 2){
      // alert('wrong')
      timeout.current = setTimeout(()=>{
        setSelectedPair([]),
        setCurrSelected({})
        alert('wrong!')
      }, 100)//clear after 1 sec
    }
    return () => {
      clearTimeout(timeout);
    };
  },[selectedPair]);

  useEffect(()=>{
    setArray(generateArray(selectLevel))
    setCurrSelected({})
    setSelectedPair([])
  },[selectLevel])


  const handleLevelChange = (e)=>{
    setSelectLevel(e.target.value);
  }

  //validate selected pair

  const checkFlipped = (cardNum)=>{
    // if (currSelected ===)
    return selectedPair.indexOf(cardNum) > -1
  }

  return (
    <div className="App">
      <header>
        <h3>Play a matching game</h3>
      </header>

      <div className="main">
      <label>
        Choose a level
      <select value={selectLevel}
        onChange={handleLevelChange}
      >
        <option value="3">Easy</option>
        <option value="5">Medium</option>
        <option value="7">Hard</option>
      </select>
      </label>
  
      <button onClick={()=>setSelectedPair([])}>Hide all</button>
      <button onClick={()=>setSelectedPair([...selectedPair, ...array])}>Reveal all</button>

      {array ? <Grid level={selectLevel} array={array} checkFlipped={checkFlipped}
        selectedPair={selectedPair} setSelectedPair={setSelectedPair}
        currSelected={currSelected} setCurrSelected={setCurrSelected}

      /> : ''}

      </div>
    </div>
  );
};

export default App;
