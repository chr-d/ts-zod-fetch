import z from "zod";

const apiSchema = z.object({
  current_page: z.number(),
  data: z.array(
    z.object({
      fact: z.string(),
      length: z.number(),
    }),
  ),
  first_page_url: z.string(),
  from: z.number(),
  last_page: z.number(),
  last_page_url: z.string(),
  links: z.array(
    z.object({
      url: z.string().nullable(),
      label: z.string(),
      page: z.number().nullable().optional(),
      active: z.boolean(),
    }),
  ),
  next_page_url: z.string().nullable(),
  path: z.string(),
  per_page: z.number(),
  prev_page_url: z.string().nullable(),
  to: z.number(),
  total: z.number(),
});

type apiResponse = z.infer<typeof apiSchema>;
export { apiSchema, type apiResponse };
