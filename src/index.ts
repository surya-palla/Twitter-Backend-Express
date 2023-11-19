import { initServer } from "./app";

async function init() {
  const app = await initServer();
  app.listen(8001, () => console.log("server started at 8001"));
}

init();
