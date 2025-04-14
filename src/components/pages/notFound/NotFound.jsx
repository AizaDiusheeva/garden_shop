import React from "react";
import "./notFound.scss";
import notFound from "../../assets/notfound/404.png";
import Container from "../../container/Container";
import { Link } from "react-router-dom";

const NotFound = () => {
  

  return (
    <div className="notFound_container">
    <Container>
    <img src={notFound} alt="notFound" className="notFound__image" />
        <div className="notFound_content">
            <h1>Page Not Found</h1>
            <p>We’re sorry, the page you requested could not be found.
                <br/>
                Please go back to the homepage.</p>
        </div>
        <Link to="/">
        <button className="notFound_btn">Go Home</button>
        </Link>
    </Container>
</div>
);
};
export default NotFound;
