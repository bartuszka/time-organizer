import debug from "debug";
import http, {Server} from "http";
import { application } from "./app";
import { AddressInfo } from "net";
import ErrnoException = NodeJS.ErrnoException;

const normalizePort: Function = (val: string): string | number | boolean => {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError: (error: ErrnoException) => never = (error: ErrnoException) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening: () => void = () => {
  const addr: AddressInfo | string | null = server.address();
  const bind: string = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port: string | number | boolean = normalizePort(process.env['PORT'] || "3000");
application.set("port", port);

const server: Server = http.createServer(application);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
