import axios from "axios";

export let getUsers = async () => {
  console.log("Fetching users from API...");
  try {
    let response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export let getProducts = async () => {
  console.log("Fetching products from API...");
  try {
    let response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};