// JavaScript
const webdav = require("webdav-server").v2;
const express = require("express");

const server = new webdav.WebDAVServer();
const app = express();

server.setFileSystem(
  "/data",
  new webdav.PhysicalFileSystem("/data"),
  (success) => {
    server.start(() => console.log("READY"));
  }
);

// Mount the WebDAVServer instance
app.use(webdav.extensions.express("/", server));
app.listen(1901); // Start the Express server
