import axios from "axios";

export async function login({ email, password }) {
  try {
    const response = await axios.post(
      "https://natours-bz63.onrender.com/api/v1/users/login",
      { email, password },
      {
        withCredentials: true,
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error in Login:", error);
  }
}

export async function getMe() {
  try {
    const response = await axios.get(
      "https://natours-bz63.onrender.com/api/v1/users/me'"
    );
    console.log("CurrentUser:", response);
    return response;
  } catch (err) {
    console.log("Error IN Getting Current User:", err);
  }
}
