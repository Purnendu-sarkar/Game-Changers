import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({ addPlayer, activeTab, setActiveTab, selectedPlayers }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('/blogs.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <h3 className="font-bold text-xl text-dark-02">Available Players</h3>
        <div className="flex border rounded-lg">
          <button 
            className={`px-7 py-3 ${activeTab === 'available' ? 'bg-yellow-500 rounded-lg' : ''}`} 
            onClick={() => setActiveTab('available')}
          >
            Available
          </button>
          <button 
            className={`px-7 py-3 ${activeTab === 'selected' ? 'bg-yellow-500 rounded-lg' : ''}`} 
            onClick={() => setActiveTab('selected')}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {activeTab === 'available' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5 mt-9">
          {players.map(player => (
            <Player key={player.playerId} player={player} addPlayer={addPlayer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Players;

