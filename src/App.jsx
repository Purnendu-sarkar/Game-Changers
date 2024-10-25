
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Players from './components/Players/Players';
import Selected from './components/Selected/Selected';


function App() {
  const [coin, setCoin] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showSelected, setShowSelected] = useState(false);



  const addCoin = () => {
    setCoin(coin + 10000000);
    alert(`Coins: ${coin + 100000}`);
  };

  const addPlayer = (player) => {
    if (selectedPlayers.some(p => p.playerId === player.playerId)) {
        alert("Player already added.");
        return;
    }
    if (coin < player.biddingPrice) {
        alert("Insufficient coins.");
        return;
    }
    setSelectedPlayers([...selectedPlayers, player]);
    setCoin(coin - player.biddingPrice);
    alert("Player added.");
};


const toggleSelected = () => {
  setShowSelected(!showSelected);
};

  return (
    <>
    <Header coin={coin}></Header>
    <Banner addCoin={addCoin}></Banner>
    {showSelected && <Selected selectedPlayers={selectedPlayers}></Selected>}
    <Players addPlayer={addPlayer} toggleSelected={toggleSelected} selectedPlayers={selectedPlayers}></Players>
    
    </>
  )
}

export default App;
