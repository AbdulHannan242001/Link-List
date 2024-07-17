import React, { createContext, useContext } from 'react';

const DataContext = createContext();

const data = {
    Categories: {
        "Holiday Preparation": {
            sublist: true,
            subcategories: {
                Christmas: [
                    {
                        name: "Christmas Decorations",
                        img: "https://images.unsplash.com/photo-1543759616-92ca87aaedd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hyaXN0bWFzJTIwRGVjb3JhdGlvbnN8ZW58MHx8MHx8fDA%3D",
                    },
                    {
                        name: "Christmas Gifts",
                        img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2hyaXN0bWFzJTIwR2lmdHN8ZW58MHx8MHx8fDA%3D",
                    },
                ],
                NewYear: [
                    {
                        name: "New Year Party Supplies",
                        img: "https://images.unsplash.com/photo-1510924199351-4e9d94df18a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE5ldyUyMFllYXIlMjBQYXJ0eSUyMFN1cHBsaWVzfGVufDB8fDB8fHww",
                    },
                    {
                        name: "New Year Resolutions",
                        img: "https://images.unsplash.com/photo-1609153315698-a0396f42fd64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmV3JTIwWWVhciUyMFJlc29sdXRpb258ZW58MHx8MHx8fDA%3D",
                    },
                ],
            },
        },
        "Kids Toys": {
            sublist: true,
            subcategories: {
                Trains: [
                    {
                        name: "Electric Trains",
                        img: "https://images.unsplash.com/photo-1464552052518-7e7443ec1768?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWxlY3RyaWMlMjB0b3klMjBUcmFpbnN8ZW58MHx8MHx8fDA%3D",
                    },
                    {
                        name: "Wooden Trains",
                        img: "https://images.unsplash.com/photo-1505003098838-83ce5356c228?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V29vZGVuJTIwVHJhaW5zfGVufDB8fDB8fHww",
                    },
                ],
                Cars: [
                    {
                        name: "Toy Cars",
                        img: "https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG95JTIwQ2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
                    },
                    {
                        name: "Remote Control Cars",
                        img: "https://images.unsplash.com/photo-1705638538811-5d4988b5527e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVtb3RlJTIwQ29udHJvbCUyMENhcnN8ZW58MHx8MHx8fDA%3D",
                    },
                ],
            },
        },
        "Kids Lists": {
            sublist: true,
            subcategories: {
                John: [
                    {
                        name: "Toy Airplane",
                        img: "https://images.unsplash.com/photo-1692171078510-558c4d1b63ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VG95JTIwQWlycGxhbmV8ZW58MHx8MHx8fDA%3D",
                    },
                    {
                        name: "Soccer Ball",
                        img: "https://images.unsplash.com/photo-1614632537190-23e4146777db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U29jY2VyJTIwQmFsbHxlbnwwfHwwfHx8MA%3D%3D",
                    },
                ],
                Emily: [
                    {
                        name: "Stuffed Bear",
                        img: "https://images.unsplash.com/photo-1632787953475-8018a87bdbf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3R1ZmZlZCUyMEJlYXJ8ZW58MHx8MHx8fDA%3D",
                    },
                    {
                        name: "Dollhouse",
                        img: "https://images.unsplash.com/photo-1537192685901-9843fda15f88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RG9sbGhvdXNlfGVufDB8fDB8fHww",
                    },
                ],
            },
        },
        "Shopping": {
            sublist: false,
            lists: [
                {
                    name: "Groceries",
                    img: "https://images.unsplash.com/photo-1584473457406-6240486418e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JvY2VyaWVzfGVufDB8fDB8fHww",
                },
                {
                    name: "Clothing",
                    img: "https://plus.unsplash.com/premium_photo-1673125286956-38010cd70260?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
                },
            ],
        },
        "Exercise": {
            sublist: false,
            lists: [
                {
                    name: "Yoga",
                    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WW9nYXxlbnwwfHwwfHx8MA%3D%3D",
                },
                {
                    name: "Running",
                    img: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UnVubmluZ3xlbnwwfHwwfHx8MA%3D%3D",
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
