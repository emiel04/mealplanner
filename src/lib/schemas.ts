import { z } from "zod"

export const productSchema = z.object({
    name: z.string().min(1).max(20),
    description: z.string().min(1).max(100),
    isFresh: z.boolean(),
    isCanned: z.boolean(),
    isCooled: z.boolean(),
    isFrozen: z.boolean()
})