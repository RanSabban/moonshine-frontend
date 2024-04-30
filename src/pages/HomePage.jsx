import { useEffect, useState } from "react";
import { productService } from "../services/product.service.local";
import { HomeCollection } from "../cmps/HomeCollection";

export function HomePage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (!products.length) {
            loadProducts()
        }
    }, [])

    async function loadProducts() {
        try {
            const products = await productService.query()
            setProducts(products)
        } catch (err) {
            console.error('cannot load products', err);
        }
    }

    console.log(products);


    return (
        <>
            <div className="welcome-img-container full">
                <img src="https://res.cloudinary.com/dwutylewo/image/upload/v1714154524/DALL_E_2024-04-26_21.00.50_-_A_group_of_friends_enjoying_a_fun_activity_on_the_beach_all_wearing_white_breathable_beach_shirts_suitable_for_a_sunny_day._The_scene_captures_them_p_zhwwhn.webp" alt="" />
            </div>
            <section className="home-page">
                <section className="products-collection-home">
                    <span className="home-collection-title">Explore The Selection of MoonShine</span>
                </section>
                <ul className="home-collections-list">
                    <HomeCollection products={products} />
                </ul>
            </section>
        </>
    )
}