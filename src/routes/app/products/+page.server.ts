import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { Products } from "$lib/products"
import type { PageServerLoad } from './$types';
import { z } from "zod";
import { superValidate } from 'sveltekit-superforms/server'

const schema = z.object({
  name: z.string().min(1).max(20),
  description: z.string().min(1).max(100),
  isFresh: z.boolean(),
  isCanned: z.boolean(),
  isCooled: z.boolean(),
  isFrozen: z.boolean()
});
export const actions: Actions = {
  createProduct: async ({ request }) => {
    const form = await superValidate(request, schema);

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
  const form = await superValidate(event, schema);
  console.log("load is triggered");
  console.log(products);

  return {
    form,
    products
  };
}


