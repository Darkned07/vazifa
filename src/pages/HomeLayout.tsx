import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

function HomeLayout() {
  return (
    <>
      <>
        <Header />
      </>
      <>
        <Navbar />
      </>
      <main>
        <section className="align-element py-20">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default HomeLayout;
