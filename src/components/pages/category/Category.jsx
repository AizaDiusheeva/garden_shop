import { useEffect, useState } from "react";
import React from 'react';
import { useParams } from 'react-router-dom';
import "./category.scss";
import Filter from '../../Nav/Filter.js';
import { Link } from "react-router-dom";
import Container  from "../../container/Container.js"


const categoryNames = {
    1: "Fertilizer",
    2: "Protective products",
    3: "Planting material",
    4: "Tools and equipment",
    5: "Pots and planters"
};

const Category = () => {
    const { id } = useParams();
    const numericId = Number(id);
    const categoryName = categoryNames[numericId];
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Фильтры
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [discountOnly, setDiscountOnly] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (!categoryName) return;

        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:3333/categories/${numericId}`);
                const result = await response.json();

                if (result.status === "ERR") {
                    console.error("Ошибка API:", result.message);
                    setProducts([]);
                    return;
                }

                setProducts(result.data || []);
            } catch (error) {
                console.error("Loading error:", error);
            }
        };

        fetchProducts();
    }, [numericId, categoryName]);


       

    // Фильтрация
    useEffect(() => {
        let filtered = products;

        if (minPrice) filtered = filtered.filter(product => product.price >= Number(minPrice));
        if (maxPrice) filtered = filtered.filter(product => product.price <= Number(maxPrice));
        if (discountOnly) filtered = filtered.filter(product => product.discont_price && product.discont_price < product.price);
        if (searchQuery) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    }, [minPrice, maxPrice, discountOnly, searchQuery, products]);



    return (
        <div className="category">
        <Container>
            <h2 className="category__title">{categoryName}</h2>

            <Filter
                minPrice={minPrice} setMinPrice={setMinPrice}
                maxPrice={maxPrice} setMaxPrice={setMaxPrice}
                discountOnly={discountOnly} setDiscountOnly={setDiscountOnly}
                searchQuery={searchQuery} setSearchQuery={setSearchQuery}
            />

            <div className="category__products">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="product">
                            <div className="product__image-wrapper">
                                {product.discont_price && (
                                    <div className="product__discount">
                                        -{Math.round(((product.price - product.discont_price) / product.price) * 100)}%
                                    </div>
                                )}
                                <img src={`http://localhost:3333${product.image}`} alt={product.title} className="product__image" />
                                <Link to="/cart" className="product__button">Add to cart</Link>
                            </div>
                            <div className="product__title-wrapper">
                                <h3 className="product__title">{product.title}</h3>
                            </div>

                            <div className="product__price">
                                {product.discont_price ? (
                                    <>
                                        <p className="product__price--new">${product.discont_price}</p>
                                        <p className="product__price--old">${product.price}</p>
                                    </>
                                ) : (
                                    <p className="product__price--regular">${product.price}</p>
                                )}
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="category__empty">No products found</p>
                )}
            </div>
        </Container>
    </div>
);
};

  

export default Category;