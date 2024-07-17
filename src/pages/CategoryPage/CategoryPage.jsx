import React, { useState } from 'react';
import bg2 from '../../assets/Backgrounds/bg2.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import { CiCirclePlus } from "react-icons/ci";
import AddList from '../../modals.jsx/AddList';

const getInitials = (name) => {
    const initials = name.split(' ').map(n => n[0]).join('');
    return initials.toUpperCase();
};

const CategoryPage = () => {
    const navigate = useNavigate();
    const { categoryName } = useParams();
    const { Categories } = useDataContext();
    const category = Categories[categoryName];

    const divStyle = {
        minHeight: '90vh',
        width: 'auto',
        backgroundImage: `url(${bg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
    };

    const handleListClick = (listName) => {
        navigate(`/lists/${categoryName}/${listName}`);
    };

    const generateGradient = (index) => {
        const gradients = [
            'from-green-400 to-blue-500',
            'from-purple-400 via-pink-500 to-red-500',
            'from-yellow-400 to-red-500',
            'from-blue-400 to-indigo-500',
            'from-pink-400 to-purple-500',
            'from-teal-400 to-lime-500',
            'from-sky-400 to-indigo-500',
            'from-violet-400 to-fuchsia-500',
            'from-rose-400 to-pink-500',
            'from-amber-400 to-orange-500',
            'from-cyan-400 to-sky-500',
            'from-fuchsia-400 to-pink-500',
            'from-red-400 to-rose-500',
            'from-lime-400 to-amber-500',
            'from-violet-400 to-fuchsia-500',
            'from-sky-400 to-indigo-500',
            'from-rose-400 to-pink-500',
            'from-indigo-400 to-violet-500',
            'from-pink-400 to-rose-500',
            'from-orange-400 to-amber-500',
            'from-sky-400 to-indigo-500',
        ];
        return gradients[index % gradients.length];
    };

    const [showAddModal, setShowAddModal] = useState(false);

    const handleNewList = () => {
        setShowAddModal(true);
    };

    return (
        <div style={divStyle}>
            <div className='px-12 md:max-w-[1400px] overflow-hidden mx-auto items-center flex flex-col'>
                <div className='w-full h-auto text-center mb-4 mt-10'>
                    <h1 className='text-primaryWhite font-semibold font-inter text-lg md:text-2xl mb-4'>{categoryName} Lists</h1>
                    <input
                        type="text"
                        className='bg-primaryWhite bg-opacity-30 rounded-2xl py-1 px-4 font-inter'
                        placeholder="Search"
                    />
                </div>
                <div className='grid grid-cols-3 md:grid-cols-5 gap-x-4 mt-8 md:mt-12 '>
                    {Object.keys(category.subcategories).map((subCategoryName, idx) => (
                        <div
                            key={idx}
                            className='px-4 py-2 flex flex-col items-center rounded-lg cursor-pointer hover:scale-105 duration-300'
                            onClick={() => handleListClick(subCategoryName)}
                        >
                            <div className={`bg-gradient-to-r ${generateGradient(Math.floor(Math.random() * 20))} rounded-2xl h-20 w-20 md:h-24 md:w-24 flex items-center justify-center text-3xl font-bold text-white mb-2`}>
                                {getInitials(subCategoryName)}
                            </div>
                            <p className='text-gray-300 text-sm font-poppins'>{subCategoryName}</p>
                        </div>
                    ))}
                    <div className='px-4 py-2 flex flex-col items-center cursor-pointer'>
                        <div onClick={() => handleNewList()} className='bg-black bg-opacity-30 text-slate-400 rounded-2xl h-20 w-20 md:h-24 md:w-24 flex justify-center items-center text-5xl font-bold mb-2'>
                            < CiCirclePlus />
                        </div>
                        <p className='text-gray-300 text-sm font-poppins'>Add New List</p>
                    </div>
                </div>
            </div>
            {showAddModal && <AddList onClose={() => setShowAddModal(false)} />}
        </div>
    );
};
export default CategoryPage;
