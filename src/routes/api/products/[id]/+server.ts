import { Products } from '$lib/server/products.js';

export const DELETE = ({ params }) => {
    const id = params.id;

    try {
        Products.delete(id);
    } catch (e) {
        return new Response(`Error deleting product: ${id}`, { status: 500 })
    }

    return new Response(JSON.stringify({
        data: { id },
        message: `Deleted product: ${id}`
    }), { status: 200 })
}