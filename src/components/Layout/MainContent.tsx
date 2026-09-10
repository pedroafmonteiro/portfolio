import type { HTMLAttributes, ReactNode } from "react";
import NavItem from "./NavItem";
import { Briefcase, FolderOpenDot, House, Mail } from "lucide-react";

export interface MainContentProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
    className?: string;
    nav?: ReactNode;
}

const navItems = [
    { label: "Home", icon: <House />, route: "/" },
    { label: "Experience", icon: <Briefcase />, route: "/experience" },
    { label: "Projects", icon: <FolderOpenDot />, route: "/projects" },
    { label: "Contact", icon: <Mail />, route: "/contact" },
];

const MainContent = ({
    children,
    className = "",
    nav,
    ...props
}: MainContentProps) => {
    return (
        <div className="flex justify-center w-full">
            <div
                className={[
                    "flex flex-col w-full max-w-xl h-[calc(100dvh-1rem)] m-2 gap-2 overflow-hidden",
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                <main
                    className={[
                        "flex-1 min-h-0 overflow-y-auto no-scrollbar",
                        "p-4 rounded-2xl",
                        "flex flex-col",
                        "bg-neutral-900/40 backdrop-blur-md md:backdrop-blur-xl",
                        "border border-white/5 shadow-2xl",
                        className,
                    ]
                        .filter(Boolean)
                        .join(" ")}
                    {...props}
                >
                    {children}
                </main>
                <nav className="shrink-0 flex items-center justify-center w-full max-w-md self-center mx-auto">
                    <ul className="flex flex-row w-full justify-between space-x-2">
                        {navItems.map((item) => (
                            <NavItem
                                key={item.label}
                                label={item.label}
                                icon={item.icon}
                                route={item.route}
                                onClick={() => { }}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};


export default MainContent;