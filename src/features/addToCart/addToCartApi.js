import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import user from "../../hooks/useAuth"
export const getAddToCart = async () => {
    // const axiosPublic = useAxiosPublic();
    // const { user } = useAuth();
    const { data } = await useAxiosPublic(`/addToCart/${user?.email}`);
    console.log(data)
    return data;
}