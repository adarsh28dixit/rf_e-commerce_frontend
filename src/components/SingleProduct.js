import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SingleProduct({ val, onClick }) {
  const navigate = useNavigate();
  const[selectedSize, setSelectedSize] = useState([])

  const goBack = () => {
    navigate(-1);
  };

  const handleSelectSize = (size) => {
    if(selectedSize.includes(size)){
      setSelectedSize(selectedSize.filter((f) => f !== size))
    }else{
      setSelectedSize([...selectedSize, size])
    }
  }
  return (
    <div className="single-product-col">
      <header>
        <h2>
          <strong onClick={goBack}> {"<"}</strong> Your design space
        </h2>
      </header>

      <div className="single-product-main">
        <div className="col-1">
          <img src={val.image} alt="" style={{height: '60%'}} />
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
          <button type="submit" className="share-btn">
            share design
          </button>
        </div>
        <div className="col-2">
          <img src={val.image} alt="" style={{height: '18%'}} />
          <img src={val.image} alt="" style={{height: '18%'}}/>
          <img src={val.image} alt="" style={{height: '18%'}}/>
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
          <strong className="prod-name">{val.name}</strong>
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
          <div className="front-info" >
            <div style={{ width: '30%'}}>Front{" "}</div>
            
            <span>
              <input type="checkbox" className="black-front" />
              <input type="checkbox" className="blue-front" />
              <input type="checkbox" className="grey-front" />
            </span>
          </div>
          <div className="front-info">
          <div style={{ width: '30%'}}>Middle{" "}</div>
            <span>
              <input type="checkbox" className="black-front" />
              <input type="checkbox" className="blue-front" />
              <input type="checkbox" className="grey-front" />
            </span>
          </div>
          <div className="front-info">
          <div style={{ width: '30%'}}>Back{" "}</div>
            <span>
              <input type="checkbox" className="black-front" />
              <input type="checkbox" className="blue-front" />
              <input type="checkbox" className="grey-front" />
            </span>
          </div>
          <div className="sole-info">
          <div style={{ width: '30%'}}>Sole{" "}</div>
            <span>
              <input type="checkbox" className="black-front" />
              <input type="checkbox" className="blue-front" />
              <input type="checkbox" className="grey-front" />
            </span>
          </div>
          <div className="sole-info">
          <div style={{ width: '30%'}}>Size{" "}</div>
            <span>
              
              <input type="checkbox" className="size-7" onChange={() => handleSelectSize("7")} />
              <input type="checkbox" className="size-8" onChange={() => handleSelectSize("8")}/>
              <input type="checkbox" className="size-9" onChange={() => handleSelectSize("9")}/>
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
      </div>
    </div>
  );
}
