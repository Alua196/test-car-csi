const productsData = [
    {
        id: 1,
        prodName: 'Кузов',
        price: 11000,
        quantity: 1,
        subProducts: [
            {
                id: 1.1,
                prodName: 'Двери',
                price: 11000,
                quantity: 1,
                subsubProducts: [
                    {
                        id: 1.11,
                        prodName: 'Замок',
                        price: 5000,
                        quantity: 1
                    },
                    {
                        id: 1.12,
                        prodName: 'Ручки',
                        price: 6000,
                        quantity: 1
                    },
                ],
            },
            {
                id: 1.2,
                prodName: 'Sub Product 2',
                price: 3,
                quantity: 1
            },
        ],
    },
    {
        id: 2,
        prodName: 'Двигатель',
        price: 12000,
        quantity: 1,
        subProducts: [
            { id: 2.1, prodName: 'Поршни', price: 10000, quantity: 1 },
            { id: 2.2, prodName: 'Кольца', price: 2000, quantity: 1 },
            { id: 2.3, prodName: 'Sub Product 5', price: 2, quantity: 1 },
        ],
    },
    // Add more products with sub-products as needed
];