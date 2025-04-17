import useUser from "../../../hooks/useUser";

const MyProfile = () => {

  const [users, isPending] = useUser();
  
  // console.log(users);
  return (
  <div className="flex flex-col items-center pt-[100px]">
          

  <div className="flex flex-col justify-center max-w-6xl border p-20 shadow-md rounded-xl sm:px-12 dark:bg-gray-500 dark:text-gray-800">
	{users?.image && (
            <img
              referrerPolicy="no-referrer"
              className="w-32 h-32 border mx-auto rounded-full dark:bg-gray-500 aspect-square"
              src={users?.image}
              alt="avatar"
            />
          )}
	<div className="space-y-4 text-center divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h4 className="mx-0 font-bold capitalize mt-2 text-2xl  dark:text-white">
            {users?.name}
            </h4>
            <p className="my-3">{ users.email}</p>
          <p className="mx-1 mt-1 bg-red-700 px-2 py-1 rounded-2xl text-sm font-medium text-white dark:text-white">
            {users.role}
      </p>
		</div>
		
	</div>
</div>
    </div>
    
  );
};

export default MyProfile;