const { app } = require("./app");
let config = require("config");
const port = process.env.PORT || config.get("Serveur.port");

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port);
