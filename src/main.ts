import { ServerController } from "./controllers/ServerController";
const main = async () => {
    const server:ServerController = new ServerController();
    server.start();
};

main();