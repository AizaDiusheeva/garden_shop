import React, { useState } from 'react';
import "./filter.scss";
import { FaChevronDown } from 'react-icons/fa';

const Filter = ({
                    minPrice, setMinPrice,
                    maxPrice, setMaxPrice,
                    discountOnly, setDiscountOnly,
                }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="filter">
            {/* Фильтр по цене */}
            <div className="filter__price">
                <h2>Price</h2>
                <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="from"
                    />
                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="to"
                />
            </div>

            {/* Фильтр по скидке */}
            <div className="filter__discount">
                <label>
                    Discounted items
                    <input
                        type="checkbox"
                        checked={discountOnly}
                        onChange={() => setDiscountOnly(!discountOnly)}
                    />
                </label>
            </div>

            {/* Кастомная кнопка сортировки */}
            <div className="filter__sort">
                <label>Sorted</label>
                <button
                    className="filter__sort-btn"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    by default
                    <FaChevronDown className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`} />
                </button>
            </div>
        </div>
    );
};

export default Filter;