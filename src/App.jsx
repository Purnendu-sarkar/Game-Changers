
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Players from './components/Players/Players';


function App() {
  const [coin, setCoin] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const addCoin = () => {
    setCoin(coin + 100000);
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

  return (
    <>
    <Header coin={coin}></Header>
    <Banner addCoin={addCoin}></Banner>
    <Players addPlayer={addPlayer}></Players>
    </>
  )
}

export default App;
