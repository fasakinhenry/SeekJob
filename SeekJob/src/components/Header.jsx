import { FaBars, FaPlus, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import { SiGooglehome } from "react-icons/si";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = ({responsive}) => {
  const active = ({ active }) => {
    active ? "active" : "";
  };
  return (
    <div className="shadow-sm app-header flex items-center py-2 px-10 justify-between">
      <NavLink to="/jobs">
      <Logo />
      </NavLink>
      <div className="flex justify-center text-[1.43rem] gap-5 items-center">
        <NavLink to="/jobs" className={`app-page-tabs ${active} ${responsive ? 'hidden' : ''}`}>
          <SiGooglehome />
        </NavLink>
        <NavLink to="/search" className={`app-page-tabs ${active} ${responsive ? 'hidden' : ''}`}>
          <FaMagnifyingGlass />
        </NavLink>
        <NavLink to="/profile" className={`app-page-tabs ${active} ${responsive ? 'hidden' : ''}`}>
          <FaUser />
        </NavLink>
      </div>
      <div className="flex justify-center text-[1.43rem] cursor-pointer gap-5 items-center">
        <NavLink to="/create">
          <FaPlus className={`hover-app-text-color`} />
        </NavLink>
        <NavLink to="/menu">
          <FaBars className={`${responsive ? 'hidden' : ''} hover-app-text-color`} />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
