import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQueries, useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: users = [], isPending } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/${user?.email}`);
      // console.log(data);
      return data;
    },
  });
  return [users, isPending];
};

export default useRole;
