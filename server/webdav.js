// 引入依赖
const webdav = require("webdav-server").v2;
const fs = require("fs");
const path = require("path");

// Serializer
function WebFileSystemSerializer() {
  return {
    uid() {
      return "WebFileSystemSerializer_1.0.0";
    },
    serialize(fs, callback) {
      callback(null, {
        root: fs.root,
        props: fs.props,
      });
    },
    unserialize(serializedData, callback) {
      const fs = new WebFileSystem(serializedData.root);
      fs.props = serializedData.props;
      callback(null, fs);
    },
    constructor: WebFileSystemSerializer,
  };
}

// File system
function WebFileSystem(root) {
  const r = new webdav.FileSystem(new WebFileSystemSerializer());
  r.constructor = WebFileSystem;
  r.props = new webdav.LocalPropertyManager();
  r.locks = new webdav.LocalLockManager();
  r.root = root;

  r._fastExistCheck = function (ctx, path, callback) {
    const fullPath = path.join(r.root, path);
    fs.exists(fullPath, (exists) => {
      callback(exists);
    });
  };

  r._openReadStream = function (path, info, callback) {
    const fullPath = path.join(r.root, path);
    const stream = fs.createReadStream(fullPath);
    callback(null, stream);
  };

  r._propertyManager = function (path, info, callback) {
    callback(null, this.props);
  };

  r._lockManager = function (path, info, callback) {
    callback(null, this.locks);
  };

  r._type = function (path, info, callback) {
    const fullPath = path.join(r.root, path);
    fs.stat(fullPath, (err, stats) => {
      if (err) {
        callback(err);
      } else {
        callback(
          null,
          stats.isDirectory()
            ? webdav.ResourceType.Directory
            : webdav.ResourceType.File
        );
      }
    });
  };

  return r;
}

// Server instantiation
const server = new webdav.WebDAVServer();

// 设置本地文件系统
const localRoot = "./data";
if (!fs.existsSync(localRoot)) {
  fs.mkdirSync(localRoot, { recursive: true });
}

server.setFileSystemSync("/", new WebFileSystem(localRoot));
server.start((s) => {
  console.log("Ready on port", s.address().port);
});
