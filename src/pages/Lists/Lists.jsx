// import React, { useState } from 'react';
// import bg2 from '../../assets/Backgrounds/bg2.png';
// import { useParams } from 'react-router-dom';
// import { useDataContext } from '../../context/DataContext';
// import { MdEditNote, MdDeleteForever } from "react-icons/md";
// import { CiCirclePlus } from "react-icons/ci";
// import AddEntry from '../../modals.jsx/AddEntry';

// const Lists = () => {
//     const { categoryName, listName } = useParams();
//     const { Categories } = useDataContext();
//     const category = Categories ? Categories[categoryName] : undefined;

//     const lists = category ? (category.sublist ? category.subcategories[listName] : category.lists) : [];

//     const divStyle = {
//         minHeight: '90vh',
//         width: 'auto',
//         backgroundImage: `url(${bg2})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: 'flex',
//     };

//     const generateGradient = (index) => {
//         const gradients = [
//             'from-pink-400 to-purple-500',
//             'from-green-400 to-blue-500',
//             'from-sky-400 to-indigo-500',
//             'from-yellow-400 to-red-500',
//             'from-blue-400 to-indigo-500',
//             'from-amber-400 to-orange-500',
//             'from-teal-400 to-lime-500',
//             'from-purple-400 via-pink-500 to-red-500',
//             'from-lime-400 to-amber-500',
//             'from-rose-400 to-pink-500',
//             'from-red-400 to-rose-500',
//             'from-rose-400 to-pink-500',
//             'from-fuchsia-400 to-pink-500',
//             'from-sky-400 to-indigo-500',
//             'from-orange-400 to-amber-500',
//             'from-pink-400 to-rose-500',
//             'from-indigo-400 to-violet-500',
//             'from-violet-400 to-fuchsia-500',
//             'from-cyan-400 to-sky-500',
//             'from-sky-400 to-indigo-500',
//             'from-violet-400 to-fuchsia-500',
//         ];
//         return gradients[index % gradients.length];
//     };

//     const [showAddModal, setShowAddModal] = useState(false);

//     const handleNewItem = () => {
//         setShowAddModal(true);
//     };


//     return (
//         <div style={divStyle} className='flex-col items-center flex justify-center'>
//             <div className={`mt-[10vh] flex justify-center items-center bg-gradient-to-bl ${generateGradient(Math.floor(Math.random() * 20))} rounded-2xl h-28 w-28 md:h-24 md:w-24 flex items-center justify-center text-xl font-bold text-white mb-2`}>
//                 <p>{listName ? listName : categoryName}</p>
//             </div>
//             <h1 className='text-slate-400 font-inter text-lg md:text-lg mb-4'>{listName ? listName : categoryName}</h1>
//             <div className='w-full md:px-0 px-8 mt-4 md:mt-8 md:w-4/12'>
//                 <div onClick={() => handleNewItem()} className='p-2 w-3/12 ml-auto mb-4 flex flex-row gap-x-2 justify-center items-center bg-slate-900 rounded-lg cursor-pointer'>
//                     <CiCirclePlus className='text-3xl text-white' />
//                     <p className='text-slate-400 font-inter text-xs md:text-sm text-center'>Add New</p>
//                 </div>
//                 {lists.length > 0 ? lists.map(list => (
//                     <div
//                         key={list.id}
//                         className='py-2 w-12/12 flex flex-row items-center border-y-[2px] border-slate-700'
//                     >
//                         <div className='w-4/12 items-center'>
//                             <img src={list.img} alt="" className='w-20 h-20 rounded-lg object-cover content-center' />
//                         </div>

//                         <p className='w-6/12 text-slate-200 text-lg md:text-2xl font-extralight font-inter items-center'>{list.name}</p>
//                         <div className='flex w-3/12'>
//                             <span className=' text-xl items-center text-blue-400 border-blue-700 border rounded p-2 mx-1 cursor-pointer'><MdEditNote /></span>
//                             <span className=' text-xl items-center text-red-400 border-red-700 border rounded p-2 mx-1 cursor-pointer'><MdDeleteForever /></span>
//                         </div>
//                     </div>
//                 )) : <p className='text-slate-400 font-inter text-lg'>No items available</p>}
//             </div>

//             {showAddModal && <AddEntry onClose={() => setShowAddModal(false)} />}
//         </div>
//     );
// };

// export default Lists;





import React, { useState } from 'react';
import bg2 from '../../assets/Backgrounds/bg2.png';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import { MdEditNote, MdDeleteForever } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import AddEntry from '../../modals.jsx/AddEntry';

const Lists = () => {
    const { categoryName, listName } = useParams();
    const { Categories } = useDataContext();
    const category = Categories && Categories[categoryName];
    const lists = (category) ? ((category.sublist && listName) ? category.subcategories[listName] : []) : Categories[listName].lists;
    const divStyle = {
        minHeight: '90vh',
        width: 'auto',
        backgroundImage: `url(${bg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
    };

    const generateGradient = (index) => {
        const gradients = [
            'from-pink-400 to-purple-500',
            'from-green-400 to-blue-500',
            'from-sky-400 to-indigo-500',
            'from-yellow-400 to-red-500',
            'from-blue-400 to-indigo-500',
            'from-amber-400 to-orange-500',
            'from-teal-400 to-lime-500',
            'from-purple-400 via-pink-500 to-red-500',
            'from-lime-400 to-amber-500',
            'from-rose-400 to-pink-500',
            'from-red-400 to-rose-500',
            'from-rose-400 to-pink-500',
            'from-fuchsia-400 to-pink-500',
            'from-sky-400 to-indigo-500',
            'from-orange-400 to-amber-500',
            'from-pink-400 to-rose-500',
            'from-indigo-400 to-violet-500',
            'from-violet-400 to-fuchsia-500',
            'from-cyan-400 to-sky-500',
            'from-sky-400 to-indigo-500',
            'from-violet-400 to-fuchsia-500',
        ];
        return gradients[index % gradients.length];
    };

    const [showAddModal, setShowAddModal] = useState(false);

    const handleNewItem = () => {
        setShowAddModal(true);
    };

    return (
        <div style={divStyle} className='flex-col items-center flex justify-center'>
            <div className={`mt-[10vh] flex justify-center items-center bg-gradient-to-bl ${generateGradient(Math.floor(Math.random() * 20))} rounded-2xl h-28 w-28 md:h-24 md:w-24 flex items-center justify-center text-xl font-bold text-white mb-2`}>
                <p>{listName ? listName : categoryName}</p>
            </div>
            <h1 className='text-slate-400 font-inter text-lg md:text-lg mb-4'>{listName ? listName : categoryName}</h1>
            <div className='w-full md:px-0 px-8 mt-4 md:mt-8 md:w-4/12'>
                <div onClick={handleNewItem} className='p-2 w-3/12 ml-auto mb-4 flex flex-row gap-x-2 justify-center items-center bg-slate-900 rounded-lg cursor-pointer'>
                    <CiCirclePlus className='text-3xl text-white' />
                    <p className='text-slate-400 font-inter text-xs md:text-sm text-center text-nowrap'>Add New</p>
                </div>
                {lists && lists.length > 0 ? lists.map((list, index) => (
                    <div
                        key={index}
                        className='py-2 w-12/12 flex flex-row items-center border-y-[2px] border-slate-700'
                    >
                        <div className='w-4/12 items-center'>
                            <img src={list.img} alt="" className='w-20 h-20 rounded-lg object-cover content-center' />
                        </div>

                        <p className='w-6/12 text-slate-200 text-lg md:text-2xl font-extralight font-inter items-center'>{list.name}</p>
                        <div className='flex w-3/12'>
                            <span className=' text-xl items-center text-blue-400 border-blue-700 border rounded p-2 mx-1 cursor-pointer'><MdEditNote /></span>
                            <span className=' text-xl items-center text-red-400 border-red-700 border rounded p-2 mx-1 cursor-pointer'><MdDeleteForever /></span>
                        </div>
                    </div>
                )) : <p className='text-slate-400 font-inter text-lg'>No items available</p>}
            </div>

            {showAddModal && <AddEntry onClose={() => setShowAddModal(false)} />}
        </div>
    );
};

export default Lists;
