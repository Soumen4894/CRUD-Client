import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchItemById } from '../services/item.services';
import { ImCross } from "react-icons/im";

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetchItemById(id)
            .then((response) => setItem(response.data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!item) return <p>Loading...</p>;

    return (
        <>
            <div className='grid justify-items-center m-4'>
                <div className='bg-yellow-200 w-96 h-96 rounded'>
                <div className='grid justify-items-end p-1'><Link to='/'><ImCross  size={20}/></Link></div>
                    <div className='flex flex-col gap-4 font-bold p-4'>
                        <h1>Id: {item._id}</h1>
                        <h1>Name: {item.name}</h1>
                        <p>Description: {item.description}</p>
                        <p>Price: INR {item.price}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
