import service from '../../src/utils/request';

//登录接口
export function Login(data){
    return service.request({
        url:'/login/',
        method:'post',
        data:data,//post请求
        // params:data,
    })
}