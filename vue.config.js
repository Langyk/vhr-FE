let proxyObj={};
//拦截HTTP请求
proxyObj['/']={
    ws:false,
    target:'http://localhost:8081',
    changeOrigin:true,
    pathRewrite:{
        '^/':''
    }
}

module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:proxyObj
    }
}