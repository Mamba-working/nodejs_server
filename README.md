#简单的nodejs静态服务器

实现了简单的nodejs静态服务器，具有路由功能，当访问的是/getweather时会返回简单的天气数据，其他目录是直接访问sample下的静态文件

首先建立了三个对象，分别是
```
let http = require('http')
let fs = require('fs')
let url = require('url')
```

使用http create了一个服务器，然后用url解析了输入的url，如果路由的pathname是getweather，那么返回天气信息，否则就是服务器的sample的静态文件