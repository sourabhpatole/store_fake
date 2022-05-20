import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMount = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMount) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMount = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((a) => a.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div
          className="buttons mb-2 pb-5"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Cloth
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Cloth
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewellery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top"
                    height="250px"
                    alt={product.title}
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p
                      class="card-text lead "
                      style={{ fontWeight: 700, marginTop: "12px" }}
                    >
                      ₹ {product.price}
                    </p>

                    <Link
                      to={`/products/${product.id}`}
                      class="btn btn-outline-dark"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-4 py-4">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-border text-center">Latest Product</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
