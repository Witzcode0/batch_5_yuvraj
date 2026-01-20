import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { cates } from "../data/categories";

function Footer() {
  return (
    <>
      <hr />

      <div className="main-footer">
        Footer
        <hr />
        <nav className="footer">
          <Link to="/categories" className="footer-item" >All</Link>

          {cates.map((cate) => (
            <Link
              key={cate}
              to={`/categories/${cate.toLowerCase()}`}
              className="footer-item"
            >
              {cate}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Footer;
