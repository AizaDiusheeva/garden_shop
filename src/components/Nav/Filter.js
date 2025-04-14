import React, { useState } from "react";
import "./filter.scss";
import { FaChevronDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Filter = ({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  discountOnly,
  setDiscountOnly,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="filter">
      {/* Фильтр по цене */}
      <div className="filter__price">
        <h2>Price</h2>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value) || 0)}
          placeholder="from"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value) || 0)}
          placeholder="to"
        />
      </div>
      {/* Фильтр по скидке */}
      {location.pathname !== "/allSale" && (
        <div className="filter__discount">
          <label>Discounted items</label>
          <input
            type="checkbox"
            checked={discountOnly}
            onChange={() => setDiscountOnly(!discountOnly)}
            className="filter__discount-checkbox"
          />
        </div>
      )}
      ;{/* Кастомная кнопка сортировки */}
      <div className="filter__sort">
        <label>Sorted</label>
        <button
          className="filter__sort-btn"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          by default
          <FaChevronDown
            className={`arrow-icon ${isDropdownOpen ? "open" : ""}`}
          />
        </button>
      </div>
    </div>
  );
};
export default Filter;
