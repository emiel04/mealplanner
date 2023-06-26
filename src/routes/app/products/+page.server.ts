import type { Actions } from "@sveltejs/kit";
import { fail, redirect } from "@sveltejs/kit";
import { Products } from "$lib/products"
import type {PageServerLoad} from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const formData = {
      name: String(data.get("name")),
      description: String(data.get("description")),
      isFresh: Boolean(data.has("isFresh")),
      isCanned: Boolean(data.has("isCanned")),
      isCooled: Boolean(data.has("isCooled")),
      isFrozen: Boolean(data.has("isFrozen")),
    };


    // Handle the form data, for example, call your 'add' function
    try {
      await Products.add(formData.name, formData.description, formData.isFresh, formData.isCanned, formData.isCooled, formData.isFrozen);
      return {formData};
    } catch (error: any) {
      return fail(422, {
        data: formData,
        error: error.message
      });
    }

  }
};

export const load: PageServerLoad = async () => {

  const products = await Products.getAll();
  return {
    products: products
  };
}
