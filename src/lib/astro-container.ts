import { experimental_AstroContainer } from 'astro/container';



export async function renderAstroComponent<T extends Record<string, unknown>>(
    Component: any,
    props?: T
): Promise<string> {
    const container = await experimental_AstroContainer.create();
    const result = await container.renderToString(Component, props);
    return result;
}