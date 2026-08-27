import z from "zod";
import { apiFetch } from "./utils/fetch";
import { apiSchema } from "./schemas";
const response = await apiFetch();
console.log(response);

const { data, error, success } = z.safeParse(apiSchema, response);
console.log(data, error, success);

const App = () => {
  return <h1>TS Zod Fetch</h1>;
};

export { App };
