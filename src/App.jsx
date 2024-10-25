
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'

function App() {
  const [coin, setCoin] = useState(0);

  const addCoin = () => {
    setCoin(coin + 100000);
    alert(`Coins: ${coin + 100000}`);
  }

  return (
    <>
    <Header coin={coin}></Header>
    <Banner addCoin={addCoin}></Banner>
    </>
  )
}

export default App
