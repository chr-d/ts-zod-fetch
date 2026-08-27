import { apiFetch } from "./utils/fetch";

const response = await apiFetch(1);
console.log(response);

const App = () => {
  return <h1>TS Zod Fetch</h1>;
};

export { App };
