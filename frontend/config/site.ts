export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "E-Commerce",
    description: "Trang thương mại điện tử.",
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Dashboard",
            href: "/dashboard"
        },
    ],
    navMenuItems: [
        {
            label: "Profile",
            href: "/profile",
        },
        {
            label: "Dashboard",
            href: "/dashboard",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "Team",
            href: "/team",
        },
        {
            label: "Calendar",
            href: "/calendar",
        },
        {
            label: "Settings",
            href: "/settings",
        },
        {
            label: "Help & Feedback",
            href: "/help-feedback",
        },
        {
            label: "Logout",
            href: "/logout",
        },
    ],
    links: {
        github: "https://github.com/chvn9120/E-Commerce",
    },
};
