import db from "./server/db";
export const Products = {
  getAll: async () => {
    return db.product.findMany();
  },
  add: async (name: string, description: string, isFresh: boolean, isCanned: boolean, isCooled: boolean, isFrozen: boolean) => {
    return await db.product.create({
      data: {
        name: name,
        isFresh: isFresh,
        isCanned: isCanned,
        isCooled: isCooled,
        isFrozen: isFrozen,
        description: description
      }
    }).catch();
  },
  delete: async (id: string) => {
    return db.product.delete({
      where: {
        id: id
      }
    }).catch();
  }
};