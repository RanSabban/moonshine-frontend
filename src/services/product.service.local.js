
import { storageService } from './async-storage.service'
import { utilService } from './util.service'
// import { userService } from './user.service'

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
            "https://res.cloudinary.com/dwutylewo/image/upload/v1714162897/Unisex_cotton_linen_henley_shirt_with_a_traditional_collar_white_long-sleeve_small_MS_logo_on_the_front_lightweight_fabric._The_image_should_hig_t5vvge.webp",
            "https://res.cloudinary.com/dwutylewo/image/upload/v1714162897/Unisex_cotton_linen_henley_shirt_with_a_hood_white_long-sleeve_small_MS_logo_on_the_front_casual_beach_style._The_image_should_focus_on_the_shir_x9u8hi.webp",
            "https://res.cloudinary.com/dwutylewo/image/upload/v1714162896/Unisex_cotton_linen_henley_shirt_with_roll-up_sleeves_white_long-sleeve_small_MS_logo_on_the_front_stylish_and_suitable_for_beach_and_casual_wea_aj2d7o.webp"
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
            "https://res.cloudinary.com/dwutylewo/image/upload/v1714162897/Unisex_cotton_linen_henley_shirt_with_a_traditional_collar_white_long-sleeve_small_MS_logo_on_the_front_lightweight_fabric._The_image_should_hig_t5vvge.webp",
            "https://res.cloudinary.com/dwutylewo/image/upload/v1714162897/Unisex_cotton_linen_henley_shirt_with_a_hood_white_long-sleeve_small_MS_logo_on_the_front_casual_beach_style._The_image_should_focus_on_the_shir_x9u8hi.webp",
            "https://res.cloudinary.com/dwutylewo/image/upload/v1714162896/Unisex_cotton_linen_henley_shirt_with_roll-up_sleeves_white_long-sleeve_small_MS_logo_on_the_front_stylish_and_suitable_for_beach_and_casual_wea_aj2d7o.webp"
        ],
        "tags": ["beach", "summer", "shorts", "swimwear"]
    },
    {
        "id": 3,
        "name": "Beach Shorts",
        "description": "Lightweight and quick-drying beach shorts, available in various patterns.",
        "price": 45.50,
        "currency": "USD",
        "sizes": ["S", "M", "L"],
        "colors": ["black", "white"],
        "category": "Shorts",
        "availability": false,
        "images": [
            "https://res.cloudinary.com/dwutylewo/image/upload/v1714162897/Unisex_cotton_linen_henley_shirt_with_a_traditional_collar_white_long-sleeve_small_MS_logo_on_the_front_lightweight_fabric._The_image_should_hig_t5vvge.webp",
            "https://res.cloudinary.com/dwutylewo/image/upload/v1714162897/Unisex_cotton_linen_henley_shirt_with_a_hood_white_long-sleeve_small_MS_logo_on_the_front_casual_beach_style._The_image_should_focus_on_the_shir_x9u8hi.webp",
            "https://res.cloudinary.com/dwutylewo/image/upload/v1714162896/Unisex_cotton_linen_henley_shirt_with_roll-up_sleeves_white_long-sleeve_small_MS_logo_on_the_front_stylish_and_suitable_for_beach_and_casual_wea_aj2d7o.webp"
        ],
        "tags": ["beach", "summer", "shorts", "swimwear"]
    },
    {
        "id": 4,
        "name": "Beach Shorts",
        "description": "Lightweight and quick-drying beach shorts, available in various patterns.",
        "price": 45.50,
        "currency": "USD",
        "sizes": ["S", "M", "L"],
        "colors": ["black", "white"],
        "category": "Shorts",
        "availability": false,
        "images": [
            "https://res.cloudinary.com/dwutylewo/image/upload/v1714162897/Unisex_cotton_linen_henley_shirt_with_a_traditional_collar_white_long-sleeve_small_MS_logo_on_the_front_lightweight_fabric._The_image_should_hig_t5vvge.webp",
            "https://res.cloudinary.com/dwutylewo/image/upload/v1714162897/Unisex_cotton_linen_henley_shirt_with_a_hood_white_long-sleeve_small_MS_logo_on_the_front_casual_beach_style._The_image_should_focus_on_the_shir_x9u8hi.webp",
            "https://res.cloudinary.com/dwutylewo/image/upload/v1714162896/Unisex_cotton_linen_henley_shirt_with_roll-up_sleeves_white_long-sleeve_small_MS_logo_on_the_front_stylish_and_suitable_for_beach_and_casual_wea_aj2d7o.webp",
            "https://res.cloudinary.com/dwutylewo/image/upload/v1714162897/Unisex_cotton_linen_henley_shirt_with_a_traditional_collar_white_long-sleeve_small_MS_logo_on_the_front_lightweight_fabric._The_image_should_hig_t5vvge.webp",

        ],
        "tags": ["beach", "summer", "shorts", "swimwear"]
    }
]


async function query(filterBy = { txt: '', price: 0 }) {
    var products = await storageService.query(STORAGE_KEY)
    
    if (!products.length) {
        _save(STORAGE_KEY,gProducts) 
        return gProducts
    }
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     products = products.filter(product => regex.test(product.vendor) || regex.test(product.description))
    // }
    // if (filterBy.price) {
    //     products = products.filter(product => product.price <= filterBy.price)
    // }

    // Return just preview info about the boards
    // products = products.map(({ _id, vendor, price, owner }) => ({ _id, vendor, price, owner }))
    return products
}

function getById(productId) {
    return storageService.get(STORAGE_KEY, productId)
}

async function remove(productId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, productId)
}

async function save(product) {
    var savedProduct
    if (product._id) {
        const productToSave = {
            _id: product._id,
            price: product.price
        }
        savedProduct = await storageService.put(STORAGE_KEY, productToSave)
    } else {
        // Later, owner is set by the backend
        const productToSave = {
            vendor: product.vendor,
            price: product.price,
            owner: userService.getLoggedinUser(),
            msgs: []
        }
        savedProduct = await storageService.post(STORAGE_KEY, productToSave)
    }
    return savedProduct
}

async function addProductMsg(productId, txt) {
    // Later, this is all done by the backend
    const product = await getById(productId)

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    product.msgs.push(msg)
    await storageService.put(STORAGE_KEY, product)

    return msg
}

function getEmptyProduct() {
    return {
        vendor: 'Susita-' + utilService.makeId(),
        price: utilService.getRandomIntInclusive(1000, 9000),
        msgs: []
    }
}

// PRIVATE 

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




