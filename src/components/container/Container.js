import React from "react";
import "./container.scss"; // Подключаем стили

const Container = ({ children }) => {
    return <div className="container">{children}</div>;
};

export default Container;