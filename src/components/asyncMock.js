
const products = [
    {
        id: '1',
        name: 'Iphone 13Pro',
        price: 1000,
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/10/iphone-13-pro-max-blue-select.png',
        stock: 22,
        description: 'Descripcion de Iphone 13Pro'
    },
    { id: '2', name: 'Samsung S22 ', price: 800, category: 'celular', img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/2202/gallery/ar-galaxy-s22-s901-sm-s901ezklaro-thumb-530921588?imwidth=480', stock: 8, description: 'Descripcion de Samsung S22'},
    { id: '3', name: 'Samsung Tab ', price: 700, category: 'tablet', img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-x200nzsmaro/gallery/ar-galaxy-a8-sm-x200-sm-x200nzsmaro-thumb-531066560?$172_172_PNG$', stock: 14, description: 'Descripcion de Samsung Tab'}
]



export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === category));
        }, 500);
    });
};