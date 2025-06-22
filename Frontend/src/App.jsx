import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register.jsx";
import LandingPage from "./components/landingPage.jsx";
import "./App.css";
import Login from "./components/Login/Login.jsx";
import Layout from "./components/Layouts/Layout.jsx";
import AboutUs from "./components/Pages/AboutUs.jsx";
import Blog from "./components/Pages/Blog.jsx";
import HowItWorks from "./components/Pages/HowItWorks.jsx";
import TandC from "./components/Pages/TandC.jsx";
import DownloadModal from "./components/Modals/downloadModal.jsx";
import ExpensePage from "./components/Pages/ExpensePage.jsx";
import DashLayout from "./components/Layouts/DashLayout.jsx";
import HomeDash from "./components/Dashboard/HomeDash.jsx";
import InvoiceView from "./components/Dashboard/invoiceView.jsx";
import ProfileSettings from "./components/Dashboard/ProfileSettings.jsx";
import History from "./components/Dashboard/History.jsx";
import RecentTransactions from "./components/Layouts/recentTransaction.jsx";
import AddExpenseModal from "./components/Modals/AddExpenseModal.jsx";
import DeleteModal from "./components/Modals/deleteModal.jsx";
import EditModal from "./components/Modals/editModal.jsx";
import IconModal from "./components/Modals/iconModal.jsx";
import MobileMenuModal from "./components/Modals/MobileMenuModal.jsx";
import NavBarModal from "./components/Modals/navBarModal.jsx";
import ScrollToTop from "./components/Layouts/ScrollToTop.jsx";
// import RouteChangeLoader from "./components/Spinner/RouteChangeLoader.jsx";
// import SortByModal from "./components/Modals/sortByModal.jsx";

function App() {
  const RenderRoute = () => (
    <>
      {/* <RouteChangeLoader /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <DashLayout>
              <HomeDash />
            </DashLayout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/how-it-works"
          element={
            <Layout>
              <HowItWorks />
            </Layout>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <Layout>
              <TandC />
            </Layout>
          }
        />
        <Route path="/download_modal" element={<DownloadModal />} />
        <Route path="/delete_modal" element={<DeleteModal />} />

        <Route path="/edit_modal" element={<EditModal />} />
        <Route path="/icon_modal" element={<IconModal />} />
        <Route path="/mobile_menu_modal" element={<MobileMenuModal />} />
        <Route path="/nav_bar_modal" element={<NavBarModal />} />
        {/* <Route path="/sort_modal" element={<SortByModal />} /> */}
        <Route path="/add_expense_modal" element={<AddExpenseModal />} />
        {/* <Route path="/uploadpicture" element={<ProfilePictureUpload />} /> */}
        {/* <Route path="/profilePicture" element={<Profile />} /> */}
        {/* <Route path="/recent" element={<ExpensePage />} /> */}
        <Route path="/recents" element={<RecentTransactions />} />
        {/* <Route path="/invoice" element={<InvoiceView />} /> */}
        <Route path="/profile-setting" element={<ProfileSettings />} />
        <Route path="/modal" element={<AddExpenseModal />} />
        <Route
          path="/invoice"
          element={
            <DashLayout>
              <InvoiceView />
            </DashLayout>
          }
        />
        <Route path="/profile-setting" element={<ProfileSettings />} />
        <Route
          path="/history"
          element={
            <DashLayout>
              <History />
            </DashLayout>
          }
        />
        <Route
          path="/recent"
          element={
            <DashLayout>
              <RecentTransactions />
            </DashLayout>
          }
        />
      </Routes>
    </>
  );
  return <> {RenderRoute()}</>;
}

export default App;
