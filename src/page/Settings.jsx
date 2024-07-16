import UserUpdate from "../features/settings/UserUpdate";
import PasswordUpdate from "../features/settings/PasswordUpdate";

const Settings = () => {
  return (
    <>
      {/* Account Setting */}
      <UserUpdate />

      <div className="line">&nbsp;</div>
      {/* Password Change */}
      <PasswordUpdate />
    </>
  );
};

export default Settings;
