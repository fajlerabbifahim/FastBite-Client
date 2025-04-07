import React from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRestaurant = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: restaurants = [], isPending } = useQuery({
    queryKey: ["restaurant"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/restaurants`);
      // console.log("all restaurant data from use restaurant", data);
      return data;
    },
  });
  return [restaurants, isPending];
};

export default useRestaurant;
