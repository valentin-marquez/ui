export interface SidebarItem {
    title: string;
    href: string;
    description?: string;
    icon?: string;
    badge?: string | number;
    isNew?: boolean;
}

export interface SidebarSection {
    title: string;
    icon?: string;
    items: SidebarItem[];
}

export const SECTIONS: SidebarSection[] = [
    {
        title: "Getting Started",
        items: [
            {
                title: "Introduction",
                href: "/docs",
                description: "Beautiful, copy-pasteable components for your Astro projects with minimal dependencies",
            }
        ]
    },
    {
        title: "Buttons",
        items: [
            {
                title: "Button",
                href: "/docs/components/button",
                description: "Multiple variants with full customization options",
                icon: "⚡",
            }
        ]
    },
    {
        title: "Backgrounds",
        items: [
            {
                title: "Background",
                href: "/docs/components/background",
                description: "Gorgeous gradients and patterns",
                icon: "🎨",
            },
            {
                title: "Ripple Background",
                href: "/docs/components/ripple-background",
                description: "Interactive animated backgrounds",
                icon: "💫",
            }
        ]
    }
];
