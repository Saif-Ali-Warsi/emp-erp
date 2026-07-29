import { Outlet } from "react-router-dom";
import Header from "@/layouts/Header/Header";
import Sidebar from "@/layouts/Sidebar/Sidebar";
import styles from "@/layouts/MainLayout/MainLayout.module.css";

function Mainlayout() {
  return (
    <>
      <>
        <Header />

        <div className={styles.container}>
          <Sidebar />

          <main className={styles.main}>
            <Outlet />
          </main>
        </div>
      </>
    </>
  );
}

export default Mainlayout;
