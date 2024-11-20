import ReactStars from "react-rating-stars-component";
import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { add } from "./Utilities/cart";
import { addcard } from "./Utilities/indes";
const CardDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();



    const [gadet, Setgadet] = useState({});
    useEffect(() => {
        const single = data.find((item) => item.product_id === parseInt(id));
        Setgadet(single);
    }, [data, id]);

    const ratingChanged = (newRating) => {
        console.log("New Rating:", newRating);
    };

   
    const { product_image, price, Specification } = gadet;

    const handlecart = (gadet) => {
        add(gadet);

    }
    const handlecard = (gadet) => {
        addcard(gadet);

    }
    return (
        <div className="w-11/12 mx-auto">
            <div className="absolute text-center items-center py-2 bg-purple-700 w-11/12 mx-auto h-96">
                <h1 className="text-4xl text-white font-bold pb-3">Product Details</h1>
                <p className="pb-2 text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                    the coolest accessories, we have it all!
                </p>
            </div>

            <div className="relative top-40 hero bg-base-200 h-[450px] rounded-lg max-w-4xl mx-auto ">
                <div className="flex">
                    <img src={product_image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="pl-3 space-y-1">
                        <h1 className="font-semibold text-2xl">Samsung Galaxy S23 Ultra</h1>
                        <p>Price: ${price}</p>
                        <div className="badge badge-primary badge-outline">In Stock</div>
                        <p>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                        <h1 className="text-black font-semibold">Specification:</h1>
                        <ul className="list-disc list-inside">
                            {Specification &&
                                Specification.map((spec, index) => <li key={index}>{spec}</li>)}
                        </ul>
                        <div className="font-semibold flex items-center">
                            <span>Rating: </span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => handlecart(gadet)} className="btn bg-purple-600 flex justify-start w-[140px] py-[11px} px-[22px] text-white">
                                Add to cart <FaShoppingCart />
                            </button>
                            <div className="text-2xl pt-3">
                                <button onClick={() => handlecard(gadet)} ><FaHeart /></button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
