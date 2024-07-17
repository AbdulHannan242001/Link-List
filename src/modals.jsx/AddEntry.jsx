import React from 'react';

const AddEntry = ({ onClose }) => {
    return (
        <div className='fixed bg-slate-900 top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-4/12 max-h-[70vh] rounded-xl shadow-2xl overflow-y-auto'>
            <button onClick={onClose} className='absolute top-3 right-3 text-gray-400 hover:text-gray-600'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                </svg>
            </button>
            <p className='text-center text-lg md:text-4xl font-bold text-gray-400 my-2 md:my-4'>Add New Entry</p>
            <form className='px-2 md:px-4 py-3 md:py-6'>
                <div className='mb-2 md:mb-4'>
                    <label htmlFor='Image' className='block text-sm font-medium text-gray-400'>Image</label>
                    <input type='file' id='Image' name='Image' className='mt-1 block w-full px-3 py-2 text-white text-sm' />
                </div>
                <div className='mb-4'>
                    <label htmlFor='title' className='block text-sm font-medium text-gray-400'>Title</label>
                    <input type='text' id='title' name='title' className='mt-1 block w-full px-2 md:px-3 py-1 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-xs' />
                </div>
                <div className='flex justify-end'>
                    <button type='submit' className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primaryBlue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEntry;
