import styled from "styled-components";
import { MdDashboardCustomize } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const StyledSidebar = styled.aside`
  padding: 3.2rem 2.4rem;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
`;

const LiItem = ({ children, to }) => {
  return (
    <li className=" w-56 rounded-lg bg-slate-100 shadow-sm hover:bg-slate-200">
      <NavLink to={to}>
        <label className="flex items-center gap-2 px-4 py-2 cursor-pointer">
          {children}
        </label>
      </NavLink>
    </li>
  );
};

const Siderbar = () => {
  return (
    <StyledSidebar className="items-center">
      <Logo />
      <ul className="flex flex-col gap-4">
        <LiItem to="dashboard">
          <MdDashboardCustomize /> Admin Paneli
        </LiItem>
        <LiItem to="bookings">
          <FaCalendarAlt /> Rezervasyonlar
        </LiItem>

        <LiItem to="cabins">
          <FaHotel /> Odalar
        </LiItem>

        <LiItem to="users">
          <FaUser /> Kullanıcılar
        </LiItem>

        <LiItem to="settings">
          <AiFillSetting /> Ayarlar
        </LiItem>
      </ul>
    </StyledSidebar>
  );
};

export default Siderbar;
