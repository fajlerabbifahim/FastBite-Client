import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../pages/LoadingSpinner";

const useRider = () => {
  const axiosPublic = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: allRider = [], isPending } = useQuery({
    queryKey: ["all-riders"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/all-riders`);
      // console.log("all restaurant data from use restaurant", data);
      return data;
    },
  });

  return [allRider, isPending];
};

export default useRider;
