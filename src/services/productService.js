const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        price: 19.99,
        image: 'product1.jpg',
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description of Product 2',
        price: 29.99,
        image: 'product2.jpg',
    },
    // Add more products here
];

export function getAllProducts() {
    return products;
}

export function getProductById(id) {
    return products.find((product) => product.id === id);
}
