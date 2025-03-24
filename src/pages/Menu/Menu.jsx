import React, { useContext } from 'react'
import MenuCard from '../../Components/Shared/menuCard/MenuCard'
import { AuthContext } from '../../providers/AuthProvider'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Menu = () => {
    const { menuItems, setMenuItems } = useContext(AuthContext);
    const { data = [] } = useQuery({
        queryKey: [`menu-items`],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/menu`);
            setMenuItems(data);
            return data;
        }
    });

    console.log(menuItems);

    return (
        <div className='bg-white dark:bg-black w-11/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4'>
                {
                    menuItems.map(menu => <MenuCard key={menu._id} menu={menu}></MenuCard>)
                }
            </div>
        </div>
    )
}

export default Menu
