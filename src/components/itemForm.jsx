// src/components/ItemForm.js

import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createItem, updateItem, fetchItemById } from '../services/item.services';
import { ImCross } from "react-icons/im";

const ItemForm = () => {
    const [item, setItem] = useState({
        name: '',
        description: '',
        price: '',
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchItemById(id)
                .then((response) => setItem(response.data))
                .catch((err) => console.log(err));
        }
    }, [id]);

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(item);
        if (id) {
            updateItem(id, item)
                .then(() => navigate(`/`))
                .catch((err) => console.log(err));
        } else {
            createItem(item)
                .then(() => navigate(`/`))
                .catch((err) => console.log(err));
        }
    };

    return (
        <>
            <div className='grid justify-items-center m-4'>
                <div className='bg-yellow-100 w-96 h-96 rounded font-bold'>
                <div className='grid justify-items-end p-1'><Link to="/"><ImCross  size={20}/></Link></div>
                    <h1 className='text-center p-2'>{id ? 'Update ' : 'Create '}Item</h1>
                    <div className='p-4'>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Name</label>
                                <input
                                    className="bg-yellow-100 border-2 border-black rounded-md p-1"
                                    type="text"
                                    value={item.name}
                                    name="name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Description</label>
                                <input
                                    className="bg-yellow-100 border-2 border-black rounded-md p-1"
                                    type="text"
                                    value={item.description}
                                    name="description"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Price</label>
                                <input
                                    className="bg-yellow-100 border-2 border-black rounded-md p-1"
                                    type="text"
                                    value={item.price}
                                    name="price"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                {id ? 'Update' : 'Create'} Item
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemForm;
