import logo from "../../assets/logo.svg"
import { AiFillCaretDown } from "react-icons/ai"
import { FiSearch } from "react-icons/fi"
import { BsCart3 } from "react-icons/bs"

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center mt-4 pb-4 px-4 border-b-[1px]">
        <div className="flex justify-center items-center">
          <a href="/">
            <img src={logo} alt="Logo" title="Plinkit" />
          </a>
        </div>
        <div>
          <h4 className="font-bold">Delievery in 8 minutes</h4>
          <div className="flex items-center">
            <p>Sector 16, </p>
            <AiFillCaretDown />
          </div>
        </div>
        <div className="border border-[#e8e8e8] w-1/2 flex items-center p-2 rounded-xl bg-[#f8f8f8]">
          <FiSearch />
          <input className="w-full outline-none px-2 bg-transparent" type="text" placeholder="Search" />
        </div>
        <button >Login</button>
        <div className="bg-[#0c831f] flex items-center mr-4 h-12 w-28 rounded-lg justify-center text-white">
          <BsCart3 />
          <button className="ml-2">My Cart</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
