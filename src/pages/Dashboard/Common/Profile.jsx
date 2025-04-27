import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import useUser from "../../../hooks/useUser";
import LoadingSpinner from "../../LoadingSpinner";

const Profile = () => {
  // const { user, loading } = useAuth();
  // const [role, isLoading] = useRole();
  const [user, isPending] = useUser();
  if (isPending) return <LoadingSpinner />;
  console.log(user);
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <Helmet>
        <title>Profile</title>
      </Helmet> */}
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
        <img
          alt="cover photo"
          // src={coverImg}
          src="https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full mb-4 rounded-t-lg h-56"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={
                user.image ||
                "https://img.icons8.com/?size=48&id=z-JBA_KtSkxG&format=png"
              }
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-lime-500 rounded-full">
            {user.role}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Id: {user._id}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">{user.name}</span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user.email}</span>
              </p>

              <div>
                <button className="bg-lime-500 px-10 py-1 rounded-lg text-black cursor-pointer hover:bg-lime-800 block mb-1">
                  Update Profile
                </button>
                <button className="bg-lime-500 px-7 py-1 rounded-lg text-black cursor-pointer hover:bg-lime-800">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
