export const SECTIONS: Array<{
    title: string;
    items: {
        title: string;
        href: string;
        description?: string;
        icon?: string;
    }[];
}> = [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Overview",
                    href: "/docs",
                    description: "Build your UI faster with our components"
                }
            ]
        },
        {
            title: "Components",
            items: [
                {
                    title: "Button",
                    href: "/docs/components/button",
                    icon: "⚡"
                },
                {
                    title: "Background",
                    href: "/docs/components/background",
                    icon: "🎨"
                },
                {
                    title: "Ripple Background",
                    href: "/docs/components/ripple-background",
                    icon: "💫"
                }
            ]
        }
    ];