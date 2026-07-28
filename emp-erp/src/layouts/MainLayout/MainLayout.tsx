import { Outlet } from "react-router-dom";
import Header from "@/layouts/Header/Header";
import Sidebar from "@/layouts/Sidebar/Sidebar";

function Mainlayout() {
  return (
    <>
      <>
        <Header />

        <div
          style={{
            display: "flex",
          }}
        >
          <Sidebar />

          <main
            style={{
              flex: 1,
              padding: "20px",
            }}
          >
            <Outlet />
          </main>
        </div>
      </>
    </>
  );
}

export default Mainlayout;
