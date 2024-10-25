
import PropTypes from 'prop-types';
import { FaUser, FaFlag } from 'react-icons/fa';

const Player = ({ player, addPlayer }) => {
    return (
        <div className="player-card border p-4 rounded-lg">
            <img className="w-full h-96 object-cover rounded-md" src={player.image} alt={player.name} />
            <div className='flex items-center gap-3 mt-3'>
                <FaUser style={{ fontSize: '20px', color: 'gray' }} />
                <h4 className="font-bold text-lg mt-2">{player.name}</h4>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <FaFlag />
                    <p className="text-gray-600">{player.country}</p>
                </div>
                <div className="px-4 py-2 border rounded-lg">
                    {player.role}
                </div>
            </div>
            <div className="divider"></div>
            <h5 className='font-bold text-dark-02'>Rating</h5>
            <div className="flex items-center justify-between">
                <p className="font-semibold text-dark-02 my-3">{player.battingType}</p>
                <p className="font-normal text-dark-01">{player.bowlingType}</p>
            </div>
            <div className="flex items-center justify-between">
                <p className="font-semibold text-dark-02">Price: {player.biddingPrice}</p>
                <button className='btn font-normal text-sm text-dark-01'  onClick={() => addPlayer(player)}>Choose Player</button>
            </div>
        </div>
    );
};

// Props validation
Player.propTypes = {
    player: PropTypes.shape({
        playerId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        battingType: PropTypes.string.isRequired,
        bowlingType: PropTypes.string.isRequired,
        biddingPrice: PropTypes.number.isRequired,
    }).isRequired,
};

export default Player;
