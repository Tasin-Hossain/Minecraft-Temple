import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import Search from "../../../Components/ui/Search/Search";
import products from "../../../Api/Product";
import { Link } from "react-router-dom";
import CheckboxOption from "../../../Components/ui/Checkox/CheckboxOption";
import Button, { ButtonPrimary } from "../../../Components/ui/Button/Button";
import { MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FiClock, FiGlobe, FiLock } from "react-icons/fi";
import VisibilityBadge from "../../components/VisibilityBadge";
import Tooltip from "../../../Components/Tooltip";

const Resources = () => {
  const truncateText = (text, maxLength) => {
    if (!text) return "No description";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };
  return (
    <>
      <div className="flex flex-col gap-5 h-auto w-full">
        <div className="bg-(--accent) rounded-md flex items-center justify-between py-3 px-4 ">
          <h2 className="w-[50%] text-[20px] font-semibold capitalize">
            All Resources
          </h2>
        </div>

        <div className="bg-(--accent) rounded-md flex items-center justify-between py-3 px-4 ">

          {/* search  */}
          <Search />
        </div>

       

        {
          products.length !== 0 ? (
            <table className="rounded-md w-full text-[14px] border-collapse bg-(--accent) border-none!">
          <thead className="">
            <tr className="divide-y divide-none!">
              <th scope="col" className="px-3! w-[5%] pl-6!">
                <CheckboxOption />
              </th>
              <th
                scope="col"
                class="px-6 py-3! w-[60%] text-(--dim-white-color) uppercase text-left"
              >
                Resources
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                {""}
              </th>
              <th scope="col" class="px-6 py-3 font-medium border-none!">
                {""}
              </th>
            </tr>
          </thead>
          <tbody className="">
            {products.map((products, i) => {
              return (
                <tr
                  key={i}
                  className="divide-y divide-none! border border-(--border-color) hover:bg-(--secondary)"
                >
                  {/* checkbox */}
                  <td className="px-3! w-[5%] pl-6!">
                    <CheckboxOption />
                  </td>

                  {/* Resources */}
                  <td className="py-3! border-none!">
                    <div className="flex items-start gap-5">
                      {/* Thumbnail */}
                      <div className="w-[180px] h-[120px] shrink-0">
                        <img
                          src={products.thumbnail}
                          alt={products.title}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Link
                            to={`/resource/${products.slug || products._id}`}
                          >
                            <h1 className="text-[14px] font-medium hover:underline">
                              {truncateText(products.title, 50)}
                            </h1>
                          </Link>
                          <div className="flex gap-1">
                            {products.versions?.map((v, idx) => (
                              <span
                                key={idx}
                                className="text-[13px] opacity-80"
                              >
                                v{v.version}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-[14px] opacity-80 mb-3">
                          <Link to={`/user/${products.creator.username}`}>
                            <h1 className="hover:underline">
                              {products.creator.username}
                            </h1>
                          </Link>
                          <span>•</span>
                          <span>
                            {new Date(products.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </span>
                          <span>•</span>
                          <span>{products.category}</span>
                          {products.subCategory && (
                            <>
                              <span>/</span>
                              <span>{products.subCategory}</span>
                            </>
                          )}
                        </div>

                        <p className="text-(--dim-white-color) text-[13px]">
                          {truncateText(
                            products.description || "No description",
                            70
                          )}
                        </p>
                        <div className="mt-3">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[12px] font-medium`}
                          >
                            <VisibilityBadge product={products} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* stats */}
                  <td className="py-4! flex flex-col gap-1 justify-between  border-none!">
                    {/* reviews */}
                    <div className="mb-2">
                      {products.reviews.length > 0 ? (
                        <>
                          <div className="flex items-center justify-between  gap-3 ">
                            <div className="flex items-center gap-1">
                              <span className="text-gray-400">•</span>
                              {[...Array(5)].map((_, i) => {
                                const averageRating =
                                  products.reviews.reduce(
                                    (acc, rev) => acc + rev.rating,
                                    0
                                  ) / products.reviews.length;
                                const floored = Math.floor(averageRating);
                                const hasHalf = averageRating - floored >= 0.5;

                                return (
                                  <svg
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < floored
                                        ? "text-(--white-color) fill-(--custom-color)"
                                        : i === floored && hasHalf
                                        ? "text-(--white-color) fill-(--custom-color)"
                                        : "text-gray-700"
                                    }`}
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                  </svg>
                                );
                              })}
                              <span className="text-gray-400">•</span>
                            </div>

                            <span className="text-[12px] font-medium text-(--dim-white-color)">
                              {products.stats.reviews}
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="text-[13px] text-(--dim-white-color)">
                          No reviews yet
                        </div>
                      )}
                    </div>

                    {/* downloads */}
                    <div className="flex items-center justify-between  gap-3 ">
                      <span className="text-[13px] text-(--dim-white-color)">
                        Downloads
                      </span>
                      <span className="text-[13px] font-medium text-(--dim-white-color)">
                        {products.stats.downloads}
                      </span>
                    </div>

                    {/* Views */}
                    <div className="flex items-center justify-between  gap-3 ">
                      <span className="text-[13px] text-(--dim-white-color)">
                        Views
                      </span>
                      <span className="text-[13px] font-medium text-(--dim-white-color)">
                        {products.stats.views}
                      </span>
                    </div>

                    {/* Purchases */}
                    <div className="flex items-center justify-between  gap-3 ">
                      <span className="text-[13px] text-(--dim-white-color)">
                        Purchases
                      </span>
                      <span className="text-[13px] font-medium text-(--dim-white-color)">
                        {products.stats.purchases}
                      </span>
                    </div>
                  </td>

                  {/* acctions button */}
                  <td className="border-none!">
                    <div className="flex items-center justify-center gap-2">
                      <Tooltip text="Edit">

                        <ButtonPrimary
                          icon={<MdEdit />}
                          className="p-2! text-(--accent)!"
                        />
                      </Tooltip>
                      <Tooltip text="View">

                      <ButtonPrimary
                        icon={<FaRegEye />}
                        className="p-2! text-(--accent)!"
                      />
                      </Tooltip>
                      <Tooltip text="Delete">

                      <ButtonPrimary
                        icon={<MdOutlineDelete />}
                        className="p-2! text-(--accent)!"
                      />
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
          ):(
            <p>No Products</p>
          )
        }
      </div>
    </>
  );
};

export default Resources;
