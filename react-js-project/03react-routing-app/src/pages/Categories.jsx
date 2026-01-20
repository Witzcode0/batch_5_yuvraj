import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./categories.css";
import { cates } from "../data/categories";

function Categories() {
  return (
    <>
      <nav className="nested-navbar">
        <Link className="nested-nav-item" to="">
          All
        </Link>

        {cates.map((cate) => (
          <Link
            key={cate}
            className="nested-nav-item"
            to={cate.toLowerCase()}
          >
            {cate}
          </Link>
        ))}
      </nav>

      <Outlet />
    </>
  );
}

export default Categories;
