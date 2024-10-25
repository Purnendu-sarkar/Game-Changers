import logo from '../../assets/logo.png'
import coin1 from '../../assets/coin.png'
// import { FaBeer } from 'react-icons/fa';
const Header = ({ coin }) => {
    return (
        <div className="flex justify-between items-center w-11/12 mx-auto md:mt-12">
            <img src={logo} alt="" />
            <div className='flex gap-2'>
                <ul className='hidden md:flex items-center gap-2 font-normal text-dark-01'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <button className='btn font-semibold text-dark-02'>{coin} coin <img src={coin1} alt="" /></button>
            </div>
        </div>
    );
};

export default Header;