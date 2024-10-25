import { RiDeleteBin5Line } from "react-icons/ri";

const Selected = ({ selectedPlayers }) => {
    return (
        <div className="w-11/12 mx-auto flex flex-col gap-5">
            <h3 className="font-bold text-xl">Selected Players ({selectedPlayers.length}/6)</h3>
            {selectedPlayers.map(player => (
                
                        <div className="flex items-center justify-between p-6 rounded-2xl border" key={player.playerId}>
                            <div className="flex gap-6">
                            <img className="w-20 rounded-lg border" src={player.image} alt="" />
                            <div className="">
                            <p className="">{player.name}</p>
                            <p className="">{player.role}</p>
                            </div>
                            </div>
                            <button><RiDeleteBin5Line />
                            </button>
                        </div>
                    ))}
        </div>
    );
};

export default Selected;


