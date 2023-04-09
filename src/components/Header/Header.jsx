import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
  } from "@heroicons/react/24/solid";


const Header = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className="navbar bg-slate-300 px-12">
                    <div className="navbar-start">
                        <BoltIcon className="h-6 w-6 text-blue-500" ></BoltIcon>
                        <a className=" btn-ghost normal-case text-xl">nextPage</a>
                    </div>

                    <div className="navbar-end">
                        <ul className="flex space-x-4 font-bold">
                            <li>
                                <NavLink exact to="/" activeClassName="active">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/books" activeClassName="active">
                                    Books
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" activeClassName="active">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;