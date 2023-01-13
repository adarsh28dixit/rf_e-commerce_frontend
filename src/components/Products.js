import React from "react";
import { Link } from "react-router-dom";

export default function Products({ items }) {
  return (
    <div className="products-col">
      <header>
        <h3>SHOES</h3>
        <div className="right-header">
          <span><i className="fa fa-search"></i></span>
          <span style={{border: '2px solid black', padding: '.2rem .5rem', margin: '0rem 1rem'}}>sort by</span>
        </div>
      </header>
      <div className="product-main">
        {items.map((i) => {
          return (
            <div className="product-div">
              <Link to={`/product-details/${i.id}`} className="prod-link">
                <div className="product-item" key={i.id}>
                  <img src={i.image} alt="" />
                  <div className="product-info">
                    <strong>{i.name}</strong>
                    <div className="product-info-list">
                      <div>Rs.{i.price}/-</div>
                      <div style={{ color: "hsl(41, 97%, 51%)" }}>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
