import axios from "axios";
import React from "react";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // baseURL: "https://fast-bite-server-brown.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
