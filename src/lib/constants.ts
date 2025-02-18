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
        title: "Primitives",
        items: [
            {
                title: "Button",
                href: "/docs/components/button",
                description: "Basic interactive button component",
                icon: "⚡",
            },
            {
                title: "Input",
                href: "/docs/components/input",
                description: "Text input field component",
                icon: "✍️",
            },
            {
                title: "Label",
                href: "/docs/components/label",
                description: "Form label component",
                icon: "🏷️",
            },
            {
                title: "Checkbox",
                href: "/docs/components/checkbox",
                description: "Selectable checkbox component",
                icon: "☑️",
            },
            {
                title: "Textarea",
                href: "/docs/components/textarea",
                description: "Multiline text input component",
                icon: "📝",
            },
            {
                title: "Select",
                href: "/docs/components/select",
                description: "Dropdown selection component",
                icon: "📊",
            },
            {
                title: "Option",
                href: "/docs/components/option",
                description: "Select option component",
                icon: "🔽",
            }
        ]
    },
    {
        title: "UI Components",
        items: [
            {
                title: "Breadcrumb",
                href: "/docs/components/breadcrumb",
                description: "Navigation breadcrumb component",
                icon: "🔗",
            },
            {
                title: "Code Block",
                href: "/docs/components/code-block",
                description: "Syntax highlighted code display",
                icon: "💻",
            }
        ]
    },
    {
        title: "Utilities",
        items: [
            {
                title: "Background",
                href: "/docs/components/background",
                description: "Gorgeous gradients and patterns",
                icon: "🎨",
            },
            {
                title: "Ripple Effect",
                href: "/docs/components/ripple-background",
                description: "Interactive animated backgrounds",
                icon: "💫",
            }
        ]
    }
];
