
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Players from './components/Players/Players';
import Selected from './components/Selected/Selected';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';


function App() {
  const [coin, setCoin] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  // const [showSelected, setShowSelected] = useState(false);
  const [activeTab, setActiveTab] = useState('available');



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


const removePlayer = (playerId) => {
  const playerToRemove = selectedPlayers.find(player => player.playerId === playerId);
  if (playerToRemove) {
    setSelectedPlayers(selectedPlayers.filter(player => player.playerId !== playerId));
    alert(`${playerToRemove.name} removed from selection.`);
  }
};

// const toggleSelected = () => {
//   setShowSelected(!showSelected);
//   setActiveTab(activeTab === 'available' ? 'selected' : 'available');
// };

  return (
    <>
    <Header coin={coin}></Header>
    <Banner addCoin={addCoin}></Banner>
    <Players addPlayer={addPlayer} activeTab={activeTab} setActiveTab={setActiveTab} selectedPlayers={selectedPlayers}></Players>
    {activeTab === 'selected' && <Selected selectedPlayers={selectedPlayers} removePlayer={removePlayer} setActiveTab={setActiveTab}></Selected>}
    <Newsletter></Newsletter>
    <Footer></Footer>
    </>
  )
}

export default App;
