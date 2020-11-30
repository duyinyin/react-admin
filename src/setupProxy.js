const {createProxyMiddleware}=require("http-proxy-middleware");
module.exports= function(app){
    app.use(createProxyMiddleware([process.env.REACT_APP_API],{
        target:"http://www.web-jshtml.cn/api/react",//配置你要的请求的服务器地址
        changeOrigin:true,
        pathRewrite:{
            [`^${process.env.REACT_APP_API}`]:"",
            // "^/devApi":"",
        }
    }))
    // app.Use(proxy("/manage/api",{
    //     target:"http://admintest.happymmall.com:7000",
    //     changeOrigin:true,
    // }))
}