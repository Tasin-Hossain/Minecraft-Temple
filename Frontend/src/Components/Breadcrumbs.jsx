import { Link, useLocation } from "react-router-dom";
import Logo from "../Assets/logo.png";

const Breadcrumbs = () => {
  let breadcrumbPath = ""; // <-- const না, let হবে
  const location = useLocation();
  const pathName = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumbs flex gap-2">
      <Link to="/">
        <div className="w-7">
          <img src={Logo} alt="" className="w-full"/>
        </div>
      </Link>

      {pathName.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathName.length - 1;

        return isLast ? (
          <span
            key={breadcrumbPath}
            className="  hover:cursor-not-allowed"
          >
            {" "}
            <span className="text-(--dim-white-color)">/</span> {name}
          </span>
        ) : (
          <Link
            key={breadcrumbPath}
            to={breadcrumbPath}
            className="text-(--custom-color) hover:text-(--custom-color)"
          >
            / {name}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
