import React from "react";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => dispatch(logout()))
      .catch((error) => console.error(error.message));
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-200 text-blue-500  hover:bg-blue-600 hover:text-white rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
