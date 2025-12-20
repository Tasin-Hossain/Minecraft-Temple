// ProductDetail.jsx
import { Link, useParams } from "react-router-dom";
import products from "../../Api/Product";
import Button, {
  CategoryButton,
  ReportButton,
} from "../../Components/ui/Button/Button";
import { useState } from "react";
import { GoDependabot } from "react-icons/go";
import { TbActivity } from "react-icons/tb";
import { MdOutlineStarBorder } from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { TbFileDescription } from "react-icons/tb";
import ReactionSystem, {
  ReactButton,
  ReactionsBar,
} from "../../Components/ReactionSystem";

const ProductDetails = () => {
  const [activeProductDetails, setActiveProductDetails] =
    useState("description");

  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);

  if (!product) return <div>Product not found</div>;

  const productActiveTabRender = () => {
    switch (activeProductDetails) {
      case "description":
        return (
          <div className="px-4 pt-4 bg-(--accent) text-(--white-color) space-y-8">
            {/* Main Thumbnail */}
            <div className="flex justify-center">
              <img
                src={product.thumbnail}
                alt="X Prison Core Thumbnail"
                className="rounded-xl shadow-2xl max-w-lg border-4 border-(--primary-color)"
              />
            </div>

            {/* Tagline */}
            <p className="text-3xl font-bold text-center text-(--primary-color) tracking-wide">
              {product.shortDescription}
            </p>

            {/* Introduction */}
            <div className="text-center text-xl">
              <p>{product.description}</p>
              <p className="mt-4 text-(--primary-color)">
                The ultimate prison experience for your server!
              </p>
            </div>

            {/* Key Features - Rich List like TipTap */}
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-(--primary-color)">
                🔥 Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✨</span> Infinite Custom Enchants
                  (Create unlimited enchants)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⛏️</span> Advanced Mines with
                  Auto-Reset & WorldGuard Regions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💰</span> Multi-Currencies (Tokens,
                  Gems, Money)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📈</span> Ranks, Prestige & Rebirth
                  System
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span> Global/Personal
                  Multipliers
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💣</span> Mine Bombs & Explosives
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🛒</span> Auto-Sell, Pickaxe
                  Upgrades & Enchant Shop
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎁</span> Daily/Weekly/Monthly
                  Rewards
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">👥</span> Gangs & Alliances
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span> Leaderboards & Holograms
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⚙️</span> Fully Configurable GUIs &
                  Messages
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🔌</span> Vault, PlaceholderAPI,
                  WorldGuard Support
                </li>
              </ul>
            </div>

            {/* Gallery / Screenshots */}
            {product.gallery.length > 0 && (
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-(--primary-color)">
                  📸 Screenshots
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.gallery.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Screenshot ${index + 1}`}
                      className="rounded-lg shadow-xl border-2 border-(--border-color) hover:scale-105 transition-transform"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Requirements */}
            <div className="max-w-4xl mx-auto bg-(--accent-foreground) p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">📋 Requirements</h2>
              <ul className="list-disc pl-8 space-y-2">
                {product.requirements?.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>

            {/* Optional: Config Example */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-(--primary-color)">
                ⚙️ Example Command
              </h2>
              <pre className="bg-black p-4 rounded-lg overflow-x-auto">
                <code className="text-green-400">
                  /prison ranks - Open ranks GUI
                </code>
                <br />
                <code className="text-green-400">
                  /mines - Teleport to mines
                </code>
                <br />
                <code className="text-green-400">
                  /enchants - Custom enchant shop
                </code>
              </pre>
            </div>

            <ReactionSystem
              initialReactions={product.reactions || {}}
              onReact={(newReactions) => console.log("Updated:", newReactions)}
            >
              {(context) => (
                <div className="">
                  <div className=" flex justify-between items-center py-3 border-t border-(--border-color)">
                    <ReactionsBar
                      totalReactions={context.totalReactions}
                      userReactions={context.userReactions}
                      onToggle={context.toggleReaction}
                    />
                    <div className="flex items-center gap-4">
                      <ReactButton
                        className="bg-(--accent-foreground)"
                        showPicker={context.showPicker}
                        setShowPicker={context.setShowPicker}
                        onToggle={context.toggleReaction}
                      />
                    </div>
                  </div>
                </div>
              )}
            </ReactionSystem>
          </div>
        );

      case "dependencies":
        return (
          <div className="p-8 bg-(--accent) text-(--white-color)">
            {product.dependencies && product.dependencies.length > 0 ? (
              <>
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[20px] font-semibold text-(--primary-color)">
                    🔌Dependencies
                  </span>
                  <span>🔴Required 🟢Optional</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.dependencies.map((dep, index) => (
                    <Link to={dep.url}>
                      <div
                        key={index}
                        className="bg-(--accent-foreground) cursor-pointer hover:bg-(--border-color) p-3 rounded-sm border border-(--border-color)"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span>{dep.required ? "🔴" : "🟢"}</span>
                          <h3 className="font-semibold">{dep.name}</h3>
                        </div>
                        <p className="text-sm opacity-80 ml-8">
                          {dep.required ? "Required" : "Optional"} - {dep.note}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <p>No dependencies listed.</p>
            )}
          </div>
        );

      case "changeLogs":
        return (
          <div className="p-8 bg-(--accent) text-(--white-color)">
            {product.changelog && product.changelog.length > 0 ? (
              <>
                <h1 className="mb-5 text-[20px] font-semibold text-(--primary-color)">
                  📜 Change Logs
                </h1>
                <div className="flex flex-col gap-6">
                  {product.changelog.map((log, index) => (
                    <ReactionSystem
                      key={index}
                      initialReactions={log.reactions || {}}
                      onReact={(newReactions) =>
                        console.log("Updated:", newReactions)
                      }
                    >
                      {(context) => (
                        <div className="bg-(--accent-foreground) rounded-sm border border-(--border-color) ">
                          <div className="flex justify-between  items-center py-5 px-5 border-b border-(--border-color)">
                            <span className="font-bold text-(--primary-color)">
                              v{log.version}
                            </span>
                            <span className="opacity-70">{log.date}</span>
                          </div>

                          <ul className="text-[13px] list-disc px-10 py-2 space-y-2">
                            {log.changes.map((change, i) => (
                              <li key={i} className="">
                                {change}
                              </li>
                            ))}
                          </ul>

                          <div className="px-5 flex justify-between items-center py-3 border-t border-(--border-color)">
                            <ReactionsBar
                              totalReactions={context.totalReactions}
                              userReactions={context.userReactions}
                              onToggle={context.toggleReaction}
                            />
                            <div className="flex items-center gap-4">
                              <ReactButton
                                showPicker={context.showPicker}
                                setShowPicker={context.setShowPicker}
                                onToggle={context.toggleReaction}
                              />
                              <ReportButton>Report</ReportButton>
                            </div>
                          </div>
                        </div>
                      )}
                    </ReactionSystem>
                  ))}
                </div>
              </>
            ) : (
              <p>No changelog available.</p>
            )}
          </div>
        );

      case "reviews":
        return (
          <div className="p-8 bg-(--accent) text-(--white-color)">
            <div className="space-y-4">
              <h2 className="mb-5 text-[20px] font-semibold text-(--primary-color)">
                Customer Reviews {product.stats.rating}
              </h2>

              {product.reviews.length > 0 ? (
                product.reviews.map((review) => (
                  <>
                    <div className="flex items-center  bg-(--accent-foreground)">
                      <div
                        key={review._id}
                        className="w-[95%] bg-(--accent-foreground) border-r border-(--border-color) rounded-md p-5 flex gap-4  transition-colors relative group"
                      >
                        {/* Avatar */}
                        <div className="shrink-0">
                          <div className="w-10 h-10 bg-linear-to-br from-purple-700 to-indigo-800 rounded-md flex items-center justify-center text-white font-bold text-lg shadow-md">
                            {review.user.username.charAt(0).toUpperCase()}
                          </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 min-w-0">
                          {/* Header Line */}
                          <div className="flex items-center flex-wrap gap-2 text-sm text-gray-300 mb-2">
                            <span className="font-semibold text-(--white-color)">
                              {review.user.username}
                            </span>
                            <span className="text-gray-500">•</span>
                            {/* reating */}
                            <div className="flex items-center gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? "text-(--white-color) fill-(--primary-color)"
                                      : "text-gray-700"
                                  }`}
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-gray-500">•</span>
                            {/* Date */}
                            <span>
                              {new Date(review.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )}
                            </span>
                            {/* version */}
                            <span className="text-gray-500">
                              • Version: {product.versions[0].version}
                            </span>
                          </div>

                          {/* Comment */}
                          <p className=" opacity-70  leading-relaxed">
                            {review.comment}
                          </p>

                          <div className="mt-4 flex items-center gap-6 text-sm">
                            <ReportButton>
                              Report
                            </ReportButton>
                          </div>
                        </div>
                      </div>
                      {/* Helpful Vote - Exactly like your screenshot */}
                      <div className="w-[5%] flex flex-col items-center gap-1 text-gray-500">
                        <button className="cursor-pointer hover:text-green-400 transition-colors">
                          <svg
                            className="w-5 h-5 rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        <span className="text-(--white-color) font-medium px-3">
                          {review.helpful}
                        </span>
                        <button className=" cursor-pointer hover:text-red-400 transition-colors">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <div className="text-center py-12 text-gray-500">
                  No reviews yet. Be the first to leave a review!
                </div>
              )}
            </div>

            {/* Load More */}
            {product.stats.reviews > product.reviews.length && (
              <div className="text-center pt-6">
                <button className="px-6 py-2 bg-indigo-600/20 text-indigo-400 font-medium rounded-md hover:bg-indigo-600/30 transition-colors">
                  Load More Reviews (
                  {product.stats.reviews - product.reviews.length} more)
                </button>
              </div>
            )}
          </div>
        );

      case "history":
        return <div className="p-8">Update history...</div>;
      case "discussion":
        return <div className="p-8">Discussion thread...</div>;
      default:
        return null;
    }
  };
  return (
    <div className="product-detail py-2">
      <div className="py-3 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2">
          {/* subCategory */}
          <Link to={`/resources/minecraft/${product.subCategory}`}>
            <CategoryButton>{product.subCategory}</CategoryButton>
          </Link>
          {/* Product Title */}
          <h2 className="text-[16px] text-(--white-color)">{product.title}</h2>
          {/* product version */}
          {product.versions?.map((v) => (
            <span key={v._id} className="text text-[16px] font-light">
              v{v.version}
            </span>
          ))}
        </div>
        {/* product description */}
        <p className="font-light mb-2">{product.description}</p>
      </div>

      <div className="border-t-5 rounded-sm border-(--primary-color) h-auto bg-(--accent)">
        {/* Tabs */}
        <div className="container bg-(--accent) border border-(--border-color)">
          <div className="flex space-x-6 ">
            <TabButton
              icon={<TbFileDescription />}
              label="Description"
              active={activeProductDetails === "description"}
              onClick={() => setActiveProductDetails("description")}
            />
            <TabButton
              icon={<GoDependabot />}
              label="Dependencies"
              active={activeProductDetails === "dependencies"}
              onClick={() => setActiveProductDetails("dependencies")}
            />
            <TabButton
              icon={<TbActivity />}
              label="ChangeLogs"
              active={activeProductDetails === "changeLogs"}
              onClick={() => setActiveProductDetails("changeLogs")}
            />
            <TabButton
              icon={<MdOutlineStarBorder />}
              label={`Reviews (${product.stats.reviews})`}
              active={activeProductDetails === "reviews"}
              onClick={() => setActiveProductDetails("reviews")}
            />
            <TabButton
              icon={<AiOutlineHistory />}
              label="History"
              active={activeProductDetails === "history"}
              onClick={() => setActiveProductDetails("history")}
            />
            <TabButton
              icon={<GoCommentDiscussion />}
              label="Discussion"
              active={activeProductDetails === "discussion"}
              onClick={() => setActiveProductDetails("discussion")}
            />
          </div>
        </div>

        <div>{productActiveTabRender()}</div>
      </div>
    </div>
  );
};

function TabButton({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1  ${
        active
          ? "text-(--primary-color) cursor-pointer bg-(--accent-foreground) py-3 px-3"
          : "hover:text-(--white-color) cursor-pointer py-3 px-3 "
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default ProductDetails;
