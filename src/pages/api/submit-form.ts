export const prerenderer = false;
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const country = data.get('country');
        const message = data.get('message');

        // Validate required fields
        if (!name || !email || !country || !message) {
            return new Response(
                JSON.stringify({
                    message: 'All fields are required',
                }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        }

        // Here you would typically:
        // 1. Validate the email format
        // 2. Process the data (e.g., save to database)
        // 3. Send email notifications
        // For this test endpoint, we'll just return success

        return new Response(
            JSON.stringify({
                message: 'Form submitted successfully',
                data: {
                    name,
                    email,
                    country,
                    message,
                },
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                message: 'Internal server error',
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
};