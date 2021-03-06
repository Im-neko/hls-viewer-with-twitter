import errorHandler from "errorhandler";
import { getConnectionOptions, createConnection, BaseEntity } from "typeorm";

import app from "./app";


const server = async () => {
  const connectionOptions = await getConnectionOptions();
  const connection = await createConnection(connectionOptions);
  BaseEntity.useConnection(connection);

  /**
   * Error Handler. Provides full stack - remove for production
   */
  app.use(errorHandler());

  /**
   * Start Express server.
   */
  app.listen(app.get("port"), () => {
    console.log(
      "  App is running at http://localhost:%d in %s mode",
      app.get("port"),
      app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
  });
};

server();
