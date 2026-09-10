import { NavLink } from "react-router";

export interface NavItemProps {
  label: string;
  route: string;
  onClick?: () => void;
}

const NavItem = ({ label, route, onClick }: NavItemProps) => {
  return (
    <NavLink
      to={route}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "flex items-center justify-center py-2 px-2 sm:px-3 rounded-xl text-xs font-medium transition-all duration-150 select-none text-center",
          isActive
            ? "bg-white/10 text-white shadow-sm border border-white/10"
            : "text-neutral-400 hover:text-white hover:bg-white/[0.04] border border-transparent",
        ]
          .filter(Boolean)
          .join(" ")
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
