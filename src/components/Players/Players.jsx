import PropTypes from 'prop-types';
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
      <div className="w-11/12 mx-auto flex items-center justify-between mb-10">
        <h3 className="font-bold text-xl text-dark-02">{activeTab === 'available' ? 'Available Players' : `Selected Players (${selectedPlayers.length}/6)`}</h3>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5 mt-9 mb-56">
          {players.map(player => (
            <Player key={player.playerId} player={player} addPlayer={addPlayer} />
          ))}
        </div>
      )}
    </div>
  );
};

Players.propTypes = {
  addPlayer: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  
  selectedPlayers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Players;

