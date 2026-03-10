import React,{ useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <nav className="bg-gray-900 text-white ">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-lg md:text-xl font-bold">
                    Expense Tracker
                </h1>
                {/* Desktop Menu */}
                <div className="hidden md:flex">
                    <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
                        Logout
                    </button>
                </div>

                {/* Mobile menu Button */}
                <button className="md:hidden text-2xl" onClick={()=> setMenuOpen(!menuOpen)}>
                    ☰
                </button>
            </div>

           {/* mobile menu  */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4">
                    <button className="w-full bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Logout</button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;