
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';




const BusinessNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className=" container max-w-[1438px] mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center gap-16 text-white">
          <Logo logoStyle={"w-[200px]"} />
          <div className="md:flex hidden justify-center gap-4 text-base font-medium text-white font-Roboto">
            <Menu
              menuStyle={"flex item-center gap-6"}
              toggleMenu={toggleMenu}
            />
          </div>
          <button className="md:hidden block">
            <IoMdMenu fontSize={30} onClick={toggleMenu} className='ml-10'/>
          </button>
        </div>
        <div className="flex justify-between items-center gap-8 text-white">
          <div className="md:flex hidden justify-center items-center gap-8 text-base font-medium text-white font-Roboto">
            <NavLink to="/">PERSONAL</NavLink>

            <NavLink to="/BusinessPage">BUSINESS</NavLink>
          </div>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </nav>
      {isOpen && (
        <nav className="fixed inset-0 z-50 h-full w-full bg-black text-white p-4 space-y-4">
          <div className="flex items-center justify-between">
            <Logo logoStyle={"w-[200px]"} />
            <button>
              <FaTimes fontSize={30} onClick={toggleMenu} />
            </button>
          </div>
          <Menu
            menuStyle="space-y-6 gap-6 font-bold text-lg"
            toggleMenu={toggleMenu}
          />
        </nav>
      )}
    </>
  );
}

export default BusinessNav
