import React from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRestaurant = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: restaurant = [], isPending } = useQuery({
    queryKey: ["restaurant"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/restaurant`);
      //   console.log(data);
      return data;
    },
  });
  return [restaurant, isPending];
};

export default useRestaurant;
