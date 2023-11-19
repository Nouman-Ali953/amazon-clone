import React from "react";
import styles from "./admin.module.scss";
import MiniDrawer from "@/components/admin/SideBar";
import RootLayout from "../layout";
const Admin = () => {
  return (
    <>
      <RootLayout isAdminPage={true}>
          <MiniDrawer />
      </RootLayout>
      
    </>
  );
};

export default Admin;
