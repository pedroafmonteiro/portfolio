import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type HTMLAttributes,
    type ReactNode,
} from "react";
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
    const mainRef = useRef<HTMLElement>(null);
    const [scrollProgress, setScrollProgress] = useState({ top: 0, bottom: 0 });

    const updateScrollState = useCallback(() => {
        const el = mainRef.current;
        if (!el) return;

        const { scrollTop, scrollHeight, clientHeight } = el;
        const maxScroll = scrollHeight - clientHeight;

        if (maxScroll <= 1) {
            setScrollProgress({ top: 0, bottom: 0 });
            return;
        }

        const threshold = 40;
        const top = Math.min(Math.max(scrollTop / threshold, 0), 1);
        const remaining = maxScroll - scrollTop;
        const bottom = Math.min(Math.max(remaining / threshold, 0), 1);

        setScrollProgress({ top, bottom });
    }, []);

    useEffect(() => {
        updateScrollState();

        const el = mainRef.current;
        if (!el) return;

        const observer = new ResizeObserver(() => {
            updateScrollState();
        });
        observer.observe(el);

        window.addEventListener("resize", updateScrollState);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateScrollState);
        };
    }, [updateScrollState, children]);

    return (
        <div className="flex justify-center w-full">
            <div
                className={[
                    "flex flex-col w-full max-w-xl h-[calc(100dvh-1rem)] m-2 gap-2 overflow-hidden",
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                <div className="relative flex-1 min-h-0 flex flex-col">
                    <main
                        ref={mainRef}
                        onScroll={updateScrollState}
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

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-[1px] inset-x-[1px] h-12 rounded-t-[15px] backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_20%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_20%,transparent)] transition-opacity duration-300 ease-out z-10"
                        style={{ opacity: scrollProgress.top }}
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-[1px] inset-x-[1px] h-12 rounded-b-[15px] backdrop-blur-md [mask-image:linear-gradient(to_top,black_20%,transparent)] [-webkit-mask-image:linear-gradient(to_top,black_20%,transparent)] transition-opacity duration-300 ease-out z-10"
                        style={{ opacity: scrollProgress.bottom }}
                    />
                </div>

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