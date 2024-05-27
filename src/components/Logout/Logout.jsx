import React from 'react';
import { logout } from "@/lib";
import { redirect } from "next/navigation";
const Logout = () => {
    return (
        <form action={async () => {
            await logout();
            redirect("/");
          }}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                    <div  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Change password</div>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <button type="submit" className='w-[100%] text-right lg:text-left'>Logout</button>
                </li>
            </ul>
        </form>
    );
};

export default Logout;