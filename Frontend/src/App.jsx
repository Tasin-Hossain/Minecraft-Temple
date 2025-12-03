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
import Forums from "./Pages/Forums";
import NavLinksHome from "./Components/NavLinks/NavLinksHome";
import NavLinksForums from "./Components/NavLinks/NavLinksForums";
import NavLinksSupport from "./Components/NavLinks/NavLinksSupport";
import NavLinksYourAccount from "./Components/NavLinks/NavLinksYourAccount";
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


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <NavLinksHome />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <section>
          <div>
            <Header />
            <NavLinksHome />
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
          <NavLinksHome />
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
    path: "/forums",
    element: (
      <>
        <Header />
        <NavLinksForums />
        <Forums />
        <Footer />
      </>
    ),
  },
  {
    path: "/support",
    element: (
      <>
        <Header />
        <NavLinksSupport />
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
            <NavLinksYourAccount />
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
          <NavLinksYourAccount />
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
          <NavLinksYourAccount />

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
          <NavLinksYourAccount />

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
          <NavLinksYourAccount />

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
          <NavLinksYourAccount />

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
          <NavLinksYourAccount />

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
          <NavLinksYourAccount />

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
            <NavLinksYourAccount />
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
            <NavLinksYourAccount />
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
          <NavLinksYourAccount />

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
            <NavLinksYourAccount />
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
          <NavLinksYourAccount />

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
          <NavLinksYourAccount />

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
          <NavLinksYourAccount />

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
          <NavLinksYourAccount />

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
          <NavLinksYourAccount />

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
          <NavLinksYourAccount />

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
          <NavLinksYourAccount />

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
          <NavLinksYourAccount />

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
      {/* RouterProvider wraps everything, including TokenExpiryHandler */}
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  );
}

export default App;
