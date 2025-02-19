import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Nav from "../components/Layout/Nav";

export default function Layout({ isLogin }) {
  return (
    <>
      <Header isLogin={isLogin} />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
