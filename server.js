const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const TARGET = "https://aaaahappysila-031cabdf721e.herokuapp.com";

app.use(
  "/",
  createProxyMiddleware({
    target: TARGET,
    changeOrigin: true,
    secure: true,

    on: {
      proxyReq: (proxyReq) => {
        proxyReq.setHeader(
          "Host",
          "aaaahappysila-031cabdf721e.herokuapp.com"
        );
      }
    }
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
