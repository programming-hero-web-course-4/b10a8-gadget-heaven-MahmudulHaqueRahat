import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Card = ({ Card }) => {
    const { product_image, product_title, price } = Card || {}
    console.log(Card);
    return (
        <div className="w-[282.67px] h-[340px] gap-4">
            <div className="card bg-base-100 w-64 shadow-xl">
                <figure className=" ">
                    <img
                        src={product_image}
                        alt=" "
                        className=" h-40 rounded-xl text-center" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title font-bold">{product_title}</h2>
                    <p className="text-gray-500">Price:{price}k</p>
                    <div className="card-actions">

                        <NavLink className="btn btn-outline btn-primary">ViewDetails</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    Card: PropTypes.object.isRequired,

}
export default Card;