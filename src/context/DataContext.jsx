import React, { createContext, useContext } from 'react';

const DataContext = createContext();

const data = {
    Categories: {
        "Holidays Preparation": {
            sublist: true,
            subcategories: {
                Christmas: [
                    {
                        name: "List 1",
                        img: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
                    },
                    {
                        name: "List 2",
                        img: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
                    },
                ],
                NewYear: [
                    {
                        name: "List 1",
                        img: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
                    },
                    {
                        name: "List 2",
                        img: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
                    },
                ],
            },
        },
        "Kids Toys": {
            sublist: true,
            subcategories: {
                Trains: [
                    {
                        name: "List 1",
                        img: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
                    },
                    {
                        name: "List 2",
                        img: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
                    },
                ],
                Cars: [
                    {
                        name: "List 1",
                        img: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
                    },
                    {
                        name: "List 2",
                        img: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
                    },
                ],
            },
        },
        "Shopping": {
            sublist: false,
            lists: [
                {
                    name: "List 1",
                    img: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
                },
                {
                    name: "List 2",
                    img: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
                },
            ],
        },
        "Others": {
            sublist: false,
            lists: [
                {
                    name: "List 1",
                    img: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
                },
                {
                    name: "List 2",
                    img: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
                },
            ],
        },
    },
};

export const DataProvider = ({ children }) => {
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => useContext(DataContext);
