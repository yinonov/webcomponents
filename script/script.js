const products = [{
    name: 'mini car',
    description: 'Lorem ipsum dolor sit amet',
    img: 'http://images.buyacar.co.uk/img/med/mini_hatchback_37453.jpg'
}, {
    name: 'puzzle',
    description: 'Lorem ipsum dolor sit amet',
    img: 'http://www.brilliant-books.net/sites/brilliant-books.net/files/puzzles.jpg'
}, {
    name: 'rubik\'s cube',
    description: 'Lorem ipsum dolor sit amet',
    img: 'https://smhttp-ssl-62406.nexcesscdn.net/resources/images/assets/rubiks-cube-coloured.png'
}, {
    name: 'mini car',
    description: 'Lorem ipsum dolor sit amet',
    img: 'http://images.buyacar.co.uk/img/med/mini_hatchback_37453.jpg'
}, {
    name: 'puzzle',
    description: 'Lorem ipsum dolor sit amet',
    img: 'http://www.brilliant-books.net/sites/brilliant-books.net/files/puzzles.jpg'
}, {
    name: 'rubik\'s cube',
    description: 'Lorem ipsum dolor sit amet',
    img: 'https://smhttp-ssl-62406.nexcesscdn.net/resources/images/assets/rubiks-cube-coloured.png'
}];

window.addEventListener('DOMContentLoaded', e => {
    const storeProductElement = (name, description, img) => {
        const product = document.createElement('store-product');
        product.innerHTML = `
            <img slot="img" src="${img}">
            <span slot="name">${name}</span>
            <span slot="description">${description}</span>
        `;
        return product;
    }

    for (let product of products) {
        const {
            name,
            description,
            img
        } = product;
        const productsElem = document.querySelector('#products');
        productsElem.appendChild(storeProductElement(name, description, img));
    }
});