import { Outlet } from "react-router-dom";
import AccountNav from "../features/MyAccount/AccountNav";
// import Settings from "./Settings";

function MyAccount() {
  return (
    <main className="main">
      <div className="user-view">
        {/* Account nav */}
        <AccountNav />

        <div className="user-view__content">
          {/* content */}
          {/* <Settings /> */}
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default MyAccount;
