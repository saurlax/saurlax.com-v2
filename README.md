# saurlax.com v2

> This version has been deprecated, please check the latest version: https://github.com/saurlax/saurlax.com.

`saurlax.com` is my personal website project. It use `koa`, `art-template` and `mongodb`.

## .env
Edit value in `.env` file to modify the behavior of server.
| Key | Description | Value |
| --- | ----------- | ----- |
| PORT | Specify the internal port of the server. | `Number` |
| DEBUG | Specify whether to enable the debug mode. It will not be enabled by default. | `Boolean` |
| DATABASE_URI | Specify mongodb database connection address. | `String` |
| AUTH | Specify administrator account and password. | `String` like `username:password` |
| COUNT_PRE_PAGE | Specify how many articles are displayed on one page of the home page. The default is 10. | `Number` |
| PROXY_COUNT | Specify how many layers of agents the client passes through to the server. Filling in the correct number will help the server correctly record the IP address of the client. The default is 0. | `Number` |