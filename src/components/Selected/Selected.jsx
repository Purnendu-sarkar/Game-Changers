import PropTypes from 'prop-types';
import { RiDeleteBin5Line } from "react-icons/ri";

const Selected = ({ selectedPlayers, removePlayer, setActiveTab }) => {
    return (
        <div className="w-11/12 mx-auto flex flex-col gap-5 mb-52">
            {selectedPlayers.map(player => (
                
                        <div className="flex items-center justify-between p-6 rounded-2xl border" key={player.playerId}>
                            <div className="flex gap-6">
                            <img className="w-20 rounded-lg border" src={player.image} alt="" />
                            <div className="">
                            <p className="">{player.name}</p>
                            <p className="">{player.role}</p>
                            <p>$ {player.biddingPrice}</p>
                            </div>
                            
                            </div>
                            
                            <button onClick={() => removePlayer(player.playerId)}><RiDeleteBin5Line />
                            </button>
                        </div>
                    ))}
                    <button className='btn w-max bg-lime-300 text-dark-02 font-bold py-3 px-4 rounded-xl hover:bg-btn-yellow shadow-lg ring-4 ring-offset-4 ring-btn-yellow dark:ring-offset-slate-50' onClick={() => setActiveTab('available')}>Add More Player</button>
            <button></button>        
        </div>
    );
};

Selected.propTypes = {
    selectedPlayers: PropTypes.arrayOf(
        PropTypes.shape({
            playerId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            biddingPrice: PropTypes.number.isRequired,
        })
    ).isRequired,
    removePlayer: PropTypes.func.isRequired,
    setActiveTab: PropTypes.func.isRequired,
};

export default Selected;


