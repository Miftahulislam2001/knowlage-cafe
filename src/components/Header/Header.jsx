

const Header = () => {
    return (
        <>

            <div className="navbar bg-base-400 rounded-lg shadow-lg flex md:flex-row  md:items-center md:justify-between mt-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    About

                                </a>

                            </li>
                            <li>
                                <a>Content</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl font-bold">Beginners Learn</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Home</a>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                About

                            </a>

                        </li>
                        <li>
                            <a>Content</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar md:mr-5 mr-1">
                        <div className="w-12 rounded-full">
                            <img src="https://s7280.pcdn.co/wp-content/uploads/2019/11/Stephen-Watts_avatar_1572964406-100x100.jpg.optimal.jpg" />
                        </div>
                    </label>
                </div>
            </div>
        </>
    );
};

export default Header;