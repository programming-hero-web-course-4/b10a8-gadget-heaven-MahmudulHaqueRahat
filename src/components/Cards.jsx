import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";



const Cards = () => {
    const data = useLoaderData()
    const { category } = useParams()
    const [cata, setCategory] = useState([])

    useEffect(() => {
        const filted = [...data].filter(categoris => categoris.category === category)
        setCategory(filted)

    }, [data, category])
    console.log(cata);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 pt-5">
            {
                cata.map(Cards => <Card key={Cards.id} Card={Cards} />)
            }

        </div>
    );
};

export default Cards;