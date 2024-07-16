import axios from "axios";
export async function getAllTours() {
  //   const res = await fetch("https://natours-bz63.onrender.com/api/v1/tours");
  //   const data = await res.json();
  const { data } = await axios.get(
    "https://natours-bz63.onrender.com/api/v1/tours"
  );
  // console.log("data from Get:", data.data.data);

  return data.data.data;
}
