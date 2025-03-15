// import React from 'react'
// import LoadingSpinner from '../components/Shared/LoadingSpinner';
// import { Navigate } from 'react-router-dom';
// import useRole from '../hooks/useRole';

// const AdminRouter = ({ children }) => {
//     const [role, isPending] = useRole()

//     if (isPending) return <LoadingSpinner />
//     if (role === 'Admin') return children
//     return <Navigate to='/dashboard' replace='true' />
// }

// export default AdminRouter
