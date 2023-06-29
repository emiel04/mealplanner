import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { Products } from "$lib/server/products"
import { productSchema } from "$lib/schemas.js";

import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server'


export const actions: Actions = {
  createProduct: async ({ request }) => {
    const form = await superValidate(request, productSchema);

    const formData = form.data;

    if (!form.valid) {
      return fail(422, { form });
    }

    const product = await Products.add(formData.name, formData.description, formData.isFresh, formData.isCanned, formData.isCooled, formData.isFrozen);

    return { form, product };
  },

};

export const load: PageServerLoad = async (event) => {
  const products = await Products.getAll();
  const form = await superValidate(event, productSchema);

  return {
    form,
    products
  };
}


