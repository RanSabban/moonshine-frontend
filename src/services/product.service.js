
// import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { utilService } from './util.service'


const STORAGE_KEY = 'product'

export const productService = {
    query,
    getById,
    save,
    remove,
    getEmptyProduct,
    addProductMsg
}
window.cs = productService

const gProducts = [
    {
        "id": 1,
        "name": "Beach T-Shirt",
        "description": "Comfortable and stylish beach t-shirt, perfect for hot summer days.",
        "price": 29.99,
        "currency": "USD",
        "sizes": ["S", "M", "L", "XL"],
        "colors": ["blue", "green", "red"],
        "category": "T-Shirts",
        "availability": true,
        "images": [
            "http://example.com/images/product1-1.png",
            "http://example.com/images/product1-2.png"
        ],
        "tags": ["beach", "summer", "t-shirt", "casual"]
    },
    {
        "id": 2,
        "name": "Beach Shorts",
        "description": "Lightweight and quick-drying beach shorts, available in various patterns.",
        "price": 45.50,
        "currency": "USD",
        "sizes": ["S", "M", "L"],
        "colors": ["black", "white"],
        "category": "Shorts",
        "availability": false,
        "images": [
            "http://example.com/images/product2-1.png",
            "http://example.com/images/product2-2.png"
        ],
        "tags": ["beach", "summer", "shorts", "swimwear"]
    }
]


async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get(STORAGE_KEY, filterBy)
}

function getById(productId) {
    return httpService.get(`product/${productId}`)
}

async function remove(productId) {
    return httpService.delete(`product/${productId}`)
}
async function save(product) {
    var savedProduct
    if (product._id) {
        savedProduct = await httpService.put(`product/${product._id}`, product)

    } else {
        savedProduct = await httpService.post('product', product)
    }
    return savedProduct
}

async function addProductMsg(productId, txt) {
    const savedMsg = await httpService.post(`product/${productId}/msg`, { txt })
    return savedMsg
}


function getEmptyProduct() {
    return {
        vendor: 'Susita-' + utilService.makeId(),
        price: utilService.getRandomIntInclusive(1000, 9000),
        msgs: []
    }
}





