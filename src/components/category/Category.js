import { useEffect, useState } from "react";
import React from 'react';
import { useParams } from 'react-router-dom';
import './category.scss';
import Filter from '../Nav/Filter';
import { Link } from "react-router-dom";
import Product from "../product/Product.jsx";



const Category = () => {
    const { id } = useParams(); // Получаем ID категории из URL
    const [products, setProducts] = useState([]); // Все товары
    const [filteredProducts, setFilteredProducts] = useState([]); // Фильтрованные товары
    const [categoryName, setCategoryName] = useState(''); // Название категории

    // Фильтры
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [discountOnly, setDiscountOnly] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:3333/categories/${id}`);
                const result = await response.json();

                console.log("Полученные данные:", result);

                if (!result.data) {
                    throw new Error("Некорректные данные от API");
                }

                // Если data - объект, превращаем его в массив
                const products = Array.isArray(result.data) ? result.data : [];

                setProducts(products);
            } catch (error) {
                console.error("Ошибка загрузки:", error);
            }
        };


        const fetchCategoryName = async () => {
            try {
                const response = await fetch(`http://localhost:3333/categories/${id}`);

                if (!response.ok) {
                    throw new Error('Ошибка при загрузке категории');
                }
                const categoryData = await response.json();
                setCategoryName(categoryData.name);
            } catch (error) {
                console.error('Ошибка загрузки категории:', error);
            }
        };

        fetchProducts();
        fetchCategoryName();
    }, [id]);

    // Фильтрация
    useEffect(() => {
        let filtered = products;

        if (minPrice) filtered = filtered.filter(product => product.price >= Number(minPrice));
        if (maxPrice) filtered = filtered.filter(product => product.price <= Number(maxPrice));
        if (discountOnly) filtered = filtered.filter(product => product.discountPrice);
        if (searchQuery) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    }, [minPrice, maxPrice, discountOnly, searchQuery, products]);

    return (
        <div className="category-page">
            <h2>{categoryName}</h2>

            {/* Фильтры */}
            <Filter
                minPrice={minPrice} setMinPrice={setMinPrice}
                maxPrice={maxPrice} setMaxPrice={setMaxPrice}
                discountOnly={discountOnly} setDiscountOnly={setDiscountOnly}
                searchQuery={searchQuery} setSearchQuery={setSearchQuery}
            />

            {/* Список товаров */}
            <div className="products-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                            <div className="image-wrapper">
                                {product.discont_price && (
                                    <div className="discount-badge">
                                        -{Math.round(((product.price - product.discont_price) / product.price) * 100)}%
                                    </div>
                                )}
                                <img src={`http://localhost:3333${product.image}`} alt={product.title} />
                            </div>
                            <h3>{product.title}</h3>

                            <div className="price-container">
                                {product.discont_price ? (
                                    <>
                                        <p className="new-price">${product.discont_price}</p>
                                        <p className="old-price">${product.price}</p>
                                    </>
                                ) : (
                                    <p className="regular-price">${product.price}</p>
                                )}
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>Товары не найдены</p>
                )}
            </div>


        </div>
    );
};
  

export default Category;