import { useEffect, useState } from "react";

import Singlewish from "./Singlewish";
import { gettheval } from "./indes";

 

const Whishlist = () => {
    const [data,setData]= useState([])
    useEffect(()=>{
        const fav=  gettheval();
        setData(fav);


    },[])
    return (
        <div className="max-w-6xl mx-auto">
            <div className="pt-3 text-3xl font-semibold">Wishlist</div>
            <div className="gap-[400px]" >
            {
                 data.map((cardinfo, idx) => <Singlewish key={idx} value={cardinfo} ></Singlewish> )
             }
            </div>
             
        </div>
    );
};

export default Whishlist;