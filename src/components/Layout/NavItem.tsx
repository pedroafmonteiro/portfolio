import { NavLink } from "react-router";

const NavItem = ({
  label,
  icon,
  route,
  onClick,
}: {
  label: string;
  route: string;
  icon: any;
  onClick?: () => void;
}) => {
  return (
    <li className={[
      "w-full p-4 rounded-2xl",
      "bg-neutral-900/40 backdrop-blur-md md:backdrop-blur-xl",
      "border border-white/5 shadow-2xl",
    ]
      .filter(Boolean)
      .join(" ")}>
      <NavLink
        to={route}
        className={"flex justify-center text-neutral-50"}
        onClick={onClick}
        aria-label={label}
      >
        {icon}
      </NavLink>
    </li>
  );
};

export default NavItem;
