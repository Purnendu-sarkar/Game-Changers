import PropTypes from 'prop-types';
import banner from '../../assets/banner-main.png'
import backgroundShadow from '../../assets/bg-shadow.png'
const Banner = ({ addCoin }) => {
    return (
        <div style={{
            backgroundImage: `url(${backgroundShadow})`,
        }} className='w-11/12 mx-auto my-20 rounded-lg py-10 px-6  md:px-16 gap-6 bg-cover bg-gray-900 bg-center flex flex-col'>
            <img className='w-60 mx-auto' src={banner} alt="" />
            <div className="text-center">
                <h2 className='font-bold text-2xl md:text-4xl text-white mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='font-medium text-xl md:text-2xl text-white-01 mb-6'>Beyond Boundaries Beyond Limits</p>
                <button onClick={addCoin} className='bg-btn-yellow text-dark-02 font-bold py-3 px-4 rounded-xl hover:bg-lime-500  shadow-lg ring-1 ring-offset-4 ring-btn-yellow dark:ring-offset-slate-900'>Claim Free Credit</button>
            </div>
        </div>
    );
};

Banner.propTypes = {
    addCoin: PropTypes.func.isRequired,
};

export default Banner;