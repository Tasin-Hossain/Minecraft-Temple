import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Verify from "./Pages/Auth/Verify";
import VerifyEmail from "./Pages/Auth/VerifyEmail";
import Support from "./Pages/Support";
import Advertise from "./Pages/Advertise";
import Discord from "./Pages/Discord";
import Forums from "./Pages/Community/Forums";
import YourProfile from "./Pages/Accounts/YourProfile";
import AccountSidebar from "./Components/AccountSidebar";
import PasswordAndSecurity from "./Pages/Accounts/PasswordAndSecurity";
import AccountDetails from "./Pages/Accounts/AccountDetails";
import Privacy from "./Pages/Accounts/Privacy";
import Preferences from "./Pages/Accounts/Preferences";
import Alerts from "./Pages/Accounts/Alerts";
import ReactionsRecived from "./Pages/Accounts/ReactionsRecived";
import Bookmarks from "./Pages/Accounts/Bookmarks";
import PushRequests from "./Pages/Accounts/PushRequests";
import Premium from "./Pages/Accounts/Premium";
import Medales from "./Pages/Accounts/Medales";
import Signature from "./Pages/Accounts/Signature";
import LinksDiscord from "./Pages/Accounts/LinksDiscord";
import LinksSteam from "./Pages/Accounts/LinksSteam";
import Ignoring from "./Pages/Accounts/Ignoring";
import ApiCredentials from "./Pages/Accounts/ApiCredentials";
import AccountRemoval from "./Pages/Accounts/AccountRemoval";
import ManageTeams from "./Pages/Accounts/ManageTeams";
import ChangeUserName from "./Pages/Accounts/ChangeUserName";
import TwofaVerify from "./Pages/Auth/TwofaVerify";
import Posts from "./Pages/Community/Posts";

import AllProducts from "./Pages/Products/AllProducts";
import ProductsSidebar from "./Components/ProductsSidebar";
import WelcomeMsg from "./Components/WelcomMessage/WelcomeMsg";

import ProductDetails from "./Pages/Products/ProductDetails";
import AdminLayout from "./Admin/AdminLayout";
import Dashboard from "./Admin/pages/Dashboard";


import AppearanceOverview from "./Admin/pages/appearance/AppearanceOverview";
import AdvertisingPage from "./Admin/pages/appearance/AdvertisingPage";
import PhrasesPage from "./Admin/pages/appearance/PhrasesPage";
import TemplatesPage from "./Admin/pages/appearance/TemplatesPage";
import StylesPage from "./Admin/pages/appearance/StylesPage";
import ResourcesOverview from "./Admin/pages/Resources/ResourcesOverview";
import PendingResources from "./Admin/pages/Resources/PendingResources";
import ResourceCategories from "./Admin/pages/Resources/ResourceCategories";
import PendingReviews from "./Admin/pages/Resources/PendingReviews";
import PendingUpdates from "./Admin/pages/Resources/PendingUpdates";
import ResourceSettings from "./Admin/pages/Resources/ResourceSettings";
import AddResources from "./Admin/pages/Resources/AddResources";
import Resources from "./Admin/pages/Resources/Resources";


const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      { path: "/admin/appearance", element: <AppearanceOverview /> },
      { path: "/admin/appearance/styles", element: <StylesPage /> },
      { path: "/admin/appearance/templates", element: <TemplatesPage /> },
      { path: "/admin/appearance/phrases", element: <PhrasesPage /> },
      { path: "/admin/appearance/advertising", element: <ResourcesOverview /> },
      
      { path: "/admin/resources/all", element: <Resources /> },
      { path: "/admin/resources/add", element: <AddResources /> },
      { path: "/admin/resources/pending", element: <PendingResources /> },
      { path: "/admin/resources/categories", element: <ResourceCategories /> },
      { path: "/admin/resources/updates", element: <PendingUpdates /> },
      { path: "/admin/resources/reviews", element: <PendingReviews /> },
      { path: "/admin/resources/settings", element: <ResourceSettings /> },
    ],
  },
  {
    path: "/login",
    element: (
      <>
        <section>
          <div>
            <Header />
          </div>
          <div className="bg-(--secend-background-color) py-6">
            <Login />
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <section>
        <div>
          <Header />
        </div>
        <div className="bg-(--secend-background-color) py-6">
          <Register />
        </div>
        <Footer />
      </section>
    ),
  },
  {
    path: "/verify",
    element: (
      <>
        <Verify />
      </>
    ),
  },
  {
    path: "/verify-email",
    element: (
      <>
        <VerifyEmail />
      </>
    ),
  },
  {
    path: "/2fa/verify/",
    element: (
      <>
        <TwofaVerify />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <Header />

        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/resources/minecraft",
    element: (
      <>
        <section className="">
          <Header />

          <div className="main flex container gap-5">
            <div className="w-[25%] py-8">
              <ProductsSidebar />
            </div>
            <div className="w-[75%] py-8 flex flex-col gap-6">
              <WelcomeMsg />
              <AllProducts />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: `/resources/product/:slug`,
    element: (
      <>
        <section className="">
          <Header />

          <div className="main flex container gap-5">
            <div className="w-[75%]">
              <ProductDetails />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/community",
    element: (
      <>
        <section className="bg-(--secend-background-color)">
          <div className="sticky top-0 z-1000">
            <Header />
          </div>
          <div className="flex container">
            <div className="w-[75%]">
              <Forums />
            </div>
            <div className="w-[25%]">
              <Posts />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/support",
    element: (
      <>
        <Header />
        <Support />
        <Footer />
      </>
    ),
  },
  {
    path: "/ads",
    element: (
      <>
        <Header />
        <Advertise />
        <Footer />
      </>
    ),
  },
  {
    path: "/discord",
    element: (
      <>
        <Header />
        <Discord />
      </>
    ),
  },
  {
    path: "/account",
    element: (
      <>
        <section className="bg-(--secend-background-color)">
          <div className="sticky top-0 z-1000">
            <Header />
          </div>

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[72%] h-auto py-10 px-4">
              <AccountDetails />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },

  {
    path: "/account/profile",
    element: (
      <>
        <section>
          <Header />
          <div className="bg-(--background2-color)">
            <YourProfile />
          </div>
          <Footer />
        </section>
      </>
    ),
  },

  {
    path: "/account/alerts",
    element: (
      <>
        <section>
          <Header />

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%]">
              <Alerts />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/reactions",
    element: (
      <>
        <section>
          <Header />

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%]">
              <ReactionsRecived />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/bookmarks",
    element: (
      <>
        <section>
          <Header />

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%]">
              <Bookmarks />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/push-requests",
    element: (
      <>
        <section>
          <Header />

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%]">
              <PushRequests />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/premium",
    element: (
      <>
        <section>
          <Header />

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%]">
              <Premium />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/medales",
    element: (
      <>
        <section>
          <Header />

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%]">
              <Medales />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/details",
    element: (
      <>
        <section className="bg-(--secend-background-color)">
          <div className="sticky top-0 z-1000">
            <Header />
          </div>

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[72%] h-auto py-10 px-4">
              <AccountDetails />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/security",
    element: (
      <>
        <section className="bg-(--secend-background-color)">
          <div className="sticky top-0 z-1000">
            <Header />
          </div>

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%] h-auto py-10 px-4">
              <PasswordAndSecurity />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/privacy",
    element: (
      <>
        <section>
          <Header />

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%]">
              <Privacy />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/preferences",
    element: (
      <>
        <section className="bg-(--secend-background-color)">
          <div className=" sticky top-0 z-1000">
            <Header />
          </div>

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%] h-auto py-10 px-4">
              <Preferences />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/signature",
    element: (
      <>
        <section className="bg-(--secend-background-color)">
          <Header />

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%] py-10 px-4 ">
              <Signature />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/discord/",
    element: (
      <>
        <section>
          <Header />

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%]">
              <LinksDiscord />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/steam/",
    element: (
      <>
        <section>
          <Header />

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%]">
              <LinksSteam />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/ignored",
    element: (
      <>
        <section>
          <Header />

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%]">
              <Ignoring />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/api",
    element: (
      <>
        <section>
          <Header />

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%]">
              <ApiCredentials />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/removal",
    element: (
      <>
        <section>
          <Header />

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%]">
              <AccountRemoval />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/teams/",
    element: (
      <>
        <section>
          <Header />

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%]">
              <ManageTeams />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
  {
    path: "/account/change-username",
    element: (
      <>
        <section>
          <Header />

          <div className="main flex">
            <div className="w-[25%]">
              <AccountSidebar />
            </div>
            <div className="w-[75%]">
              <ChangeUserName />
            </div>
          </div>
          <Footer />
        </section>
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
