import React from "react";
import products from "../../Api/Product";
import { Link } from "react-router-dom";
import Button, { CategoryButton } from "../../Components/ui/Button/Button";
const AllProducts = () => {
  return (
    <div className="py-4 px-6 h-auto bg-(--accent) rounded-sm">
      {products.map((product) => (
        <div key={product._id} className="mb-2 border border-(--accent) rounded-md hover:border hover:border-(--border-color) px-3 py-4 cursor-pointer flex items-center gap-3 ">
          {/* product Image */}
          <div className="w-18">
            <img
              src={product.thumbnail}
              className="w-full rounded-md"
              alt={product.title}
            />
          </div>

          <div className="flex flex-col ">
            <div className="flex gap-1 mb-2">
              {/* subCategory */}
              <Link to={`/resources/minecraft/${product.subCategory}`}>
                <CategoryButton>{product.subCategory}</CategoryButton>
              </Link>
              {/* Title */}
              <Link to={`/resources/product/${product.slug}`}>
                <h1 className=" hover:underline cursor-pointer">
                {product.title}
              </h1>
              </Link>

              {/* Versions */}
              <div className="flex gap-2">
                {product.versions?.map((v) => (
                  <span key={v._id} className="font-bold text-[16px]">
                    [v{v.version}]
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 mb-1">
              {/* created user */}
              <h1 className="hover:underline cursor-pointer text-[12px]">
                {product.creator?.username}
              </h1>

              {/* Date */}
              <span className="font-light text-[12px]">
                {new Date(product.createdAt).toLocaleDateString()}
              </span>

              {/* subCategory */}
            </div>

            <div>
              {/* short description */}
              <p className="font-light text-[12px]">
                {product.shortDescription}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
