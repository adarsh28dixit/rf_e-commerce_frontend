import React from "react";
import { useNavigate } from "react-router-dom";

export default function SingleProduct({ val, onClick }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="single-product-col">
      <header>
        <h2>
          <strong onClick={goBack}> {"<"}</strong> Your design space
        </h2>
      </header>

      <div className="single-product-main">
        <div className="col-1">
          <img src={val.image} alt="" />
          <div>
            {" "}
            Rate product{" "}
            <span style={{ color: "hsl(41, 97%, 51%)" }}>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
            </span>
          </div>
        </div>
        <div className="col-2">
          <img src={val.image} alt="" />
          <img src={val.image} alt="" />
          <img src={val.image} alt="" />
          <div>
            <button
              type="submit"
              onClick={() => onClick(val.id)}
              className="addToCardBut-l"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="col-3">
          <strong>{val.name}</strong>
          <div>{val.description}</div>
          <p>
            <span style={{ color: "hsl(41, 97%, 51%)" }}>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
            </span>
            <div>{val.reviews} reviews</div>
          </p>
          <p>
            <strong>Rs. {val.price}/-</strong>
            <div>Get an exclusive 20% off with HDFC card</div>
          </p>
          <div className="front-info">
            Front{" "}
            <span>
              <input type="checkbox" className="black-front" />
              <input type="checkbox" className="blue-front" />
              <input type="checkbox" className="grey-front" />
            </span>
          </div>
          <div className="front-info">
            Middle{" "}
            <span>
              <input type="checkbox" className="black-front" />
              <input type="checkbox" className="blue-front" />
              <input type="checkbox" className="grey-front" />
            </span>
          </div>
          <div className="front-info">
            Back{" "}
            <span>
              <input type="checkbox" className="black-front" />
              <input type="checkbox" className="blue-front" />
              <input type="checkbox" className="grey-front" />
            </span>
          </div>
          <div className="sole-info">
            Sole{" "}
            <span>
            <input type="checkbox" className="black-front" />
              <input type="checkbox" className="blue-front" />
              <input type="checkbox" className="grey-front" />
            </span>
          </div>
          <div className="size-info">
            Size{" "}
            <span>
              <input
                type="checkbox"
                className="black-sole"
                placeholder=""
              />
              <input type="checkbox" className="blue-sole" />
              <input type="checkbox" className="grey-sole" />
            </span>
          </div>
          <div>
            <button
              type="submit"
              onClick={() => onClick(val.id)}
              className="addToCardBut-s"
            >
              Add to cart
            </button>
          </div>
        </div>
        {/* {val.map((i) => {
          return (
            <>
              <div className="col-1">
                <img src={i.image} alt="" />
                <div> Rate product ########</div>
              </div>
              <div className="col-2">
                <img src={i.image} alt="" />
                <img src={i.image} alt="" />
                <img src={i.image} alt="" />
                <div style={{ position: "absolute", bottom: "0px" }}>
                  <button type="submit" onClick={() => onClick(i.id)}>Add to cart</button>
                </div>
              </div>
              <div className="col-3">
                <strong>{i.name}</strong>
                <div>{i.description}</div>
                <p>
                  <span>#########</span>
                  <div>{i.reviews} reviews</div>
                </p>
                <p>
                  <strong>Rs. {i.price}/-</strong>
                  <div>Get an exclusive 20% off with HDFC card</div>
                </p>
                <div className="sole-info">
                  Sole{" "}
                  <span>
                    <input type="checkbox" className="black-sole" />
                    <input type="checkbox" className="blue-sole" />
                    <input type="checkbox" className="grey-sole" />
                  </span>
                </div>
                <div className="size-info">
                  Size{" "}
                  <span>
                    <input
                      type="checkbox"
                      className="black-sole"
                      style={{ content: "7" }}
                    />
                    <input type="checkbox" className="blue-sole" />
                    <input type="checkbox" className="grey-sole" />
                  </span>
                </div>
              </div>
            </>
          );
        })} */}
      </div>
    </div>
  );
}
