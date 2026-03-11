import z from "zod";

export const DataSchema = z.object({
    email: z.email(),
    name: z.string().min(1, "Name is required").max(20, "Maximum of 20 chars"),
});
