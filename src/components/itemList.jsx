// src/components/ItemList.js

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchItems, deleteItem } from '../services/item.services';
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems()
            .then(response => setItems(response.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        deleteItem(id)
            .then(() => {
                const newItems = items.filter(item => item._id !== id);
                setItems(newItems);
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className='grid justify-items-center m-4'>
                <div className='bg-yellow-200 w-96 h-auto rounded-md'>
                    <nav className='flex justify-between p-3 font-bold '>
                        <h1>Items</h1>
                        <Link to="/create"><h1 className='border-2 border-green-400 rounded-md p-1 '>Create New</h1></Link>

                    </nav>
                    <div>
                        <ul>
                            {items.map(item => (
                                <li key={item._id} className='flex justify-between p-4 font-bold'>
                                    <div>
                                        {item.name} - INR {item.price}
                                    </div>
                                    <div className='flex gap-6'>
                                        <Link to={`/item/${item._id}`}><FaEye size={20} className='' /></Link>
                                        <Link to={`/edit/${item._id}`}><FaEdit size={20} /></Link>
                                        <button onClick={() => handleDelete(item._id)}><AiFillDelete size={20} /></button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ItemList;
