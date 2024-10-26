
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Players from './components/Players/Players';
import Selected from './components/Selected/Selected';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [coin, setCoin] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [activeTab, setActiveTab] = useState('available');



  const addCoin = () => {
    setCoin(coin + 700000);
    toast.success(`Congrats! 700000 Credit have been added to your account`, {
      style: { backgroundColor: 'blue', color: 'white' }, 
    });
  };

  const addPlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.warn("Your squad is full.", {
        style: { backgroundColor: 'red', color: 'white' },
      } );
      return;
    }
    if (selectedPlayers.some(p => p.playerId === player.playerId)) {
      toast.warn(`${player.name}is already in your squad`);
        return;
    }
    if (coin < player.biddingPrice) {
      toast.warn(`Not enough coin to buy ${player.name}`, {
        style: { backgroundColor: 'red', color: 'white' },
      });
        return;
    }
    setSelectedPlayers([...selectedPlayers, player]);
    setCoin(coin - player.biddingPrice);
    toast.success(`Congrats! ${player.name} have been added to your squad`);
};


const removePlayer = (playerId) => {
  const playerToRemove = selectedPlayers.find(player => player.playerId === playerId);
  if (playerToRemove) {
    setSelectedPlayers(selectedPlayers.filter(player => player.playerId !== playerId));
    toast.info(`${playerToRemove.name} removed from selection.`);
  }
};

// const toggleSelected = () => {
//   setShowSelected(!showSelected);
//   setActiveTab(activeTab === 'available' ? 'selected' : 'available');
// };

  return (
    <>
    <ToastContainer position="top-center"></ToastContainer>
    <Header coin={coin}></Header>
    <Banner addCoin={addCoin}></Banner>
    <Players addPlayer={addPlayer} activeTab={activeTab} setActiveTab={setActiveTab} selectedPlayers={selectedPlayers}></Players>
    {activeTab === 'selected' && <Selected selectedPlayers={selectedPlayers} removePlayer={removePlayer} setActiveTab={setActiveTab}></Selected>}
    {activeTab === 'available' && (
      <>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </>
    )}
    
    </>
  )
}

export default App;
