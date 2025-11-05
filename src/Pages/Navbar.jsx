import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
    return(
        <>
        <nav className="flex gap-8 p-5 bg-gray-100 justify-center">
            <Link
                className="px-4 py-2 rounded text-gray-700 font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-200"
                to="/"
            >
                Home
            </Link>
            <Link
                className="px-4 py-2 rounded text-gray-700 font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-200"
                to="/about"
            >
                About
            </Link>
            <Link
                className="px-4 py-2 rounded text-gray-700 font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-200"
                to="/contact"
            >
                Contact
            </Link>
            <Link
                className="px-4 py-2 rounded text-gray-700 font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-200"
                to="/product"
            >
                Product
            </Link>
            <Link
                className="px-4 py-2 rounded text-gray-700 font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-200"
                to="/login"
            >
                Login
            </Link>
            <Link
                className="px-4 py-2 rounded text-gray-700 font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-200"
                to="/form"
            >
                Form
            </Link>
            <Link
                className="px-4 py-2 rounded text-gray-700 font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-200"
                to="/letter"
            >
                Letter
            </Link>
        </nav>
        </>
    )
}
export default Navbar;