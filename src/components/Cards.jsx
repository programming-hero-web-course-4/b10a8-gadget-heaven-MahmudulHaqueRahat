import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";



const Cards = () => {
    const data = useLoaderData()
    const { category } = useParams()
    const [cata, setCategory] = useState([])
    
    useEffect(() => {
        if (category) {
            const newdata = [...data].filter(
                gadget => gadget.category === category)
                setCategory(newdata);
        }
        else {
            setCategory(data.slice(0,9));
        }
    }, [data,category])

 
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 pt-5">
            {
                cata.map((Cards,idx) => <Card key={idx} Card={Cards} />)
            }

        </div>
    );
};

export default Cards;