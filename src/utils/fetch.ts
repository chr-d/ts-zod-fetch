import z from "zod";
import { apiSchema, type ApiResponse } from "../schemas";

const apiFetch = async (page: number): Promise<ApiResponse | null> => {
  try {
    const response = await fetch(`https://catfact.ninja/facts?page=${page}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();

    const result = apiSchema.safeParse(json);

    if (!result.success) {
      console.error("Validation failed:", z.flattenError(result.error));
      return null;
    }

    return result.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
};

export { apiFetch };
