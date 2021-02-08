import axios from 'axios'
import { Message } from 'element-ui';
import * as url from "url";

/**
 * axios主要是用于向后台发起请求的，还有在请求中做更多是可控功能。
 */

//拦截器，对后台做出的响应进行拦截
axios.interceptors.response.use(success=>{
    //Http中的status存在且等于200，但是后端返回的json是500，则证明该错误是个业务上的错误
    if(success.status&&success.status==200 && success.data.status==500){
        Message.error({message:success.data.msg})
        return;
    }
    if(success.data.msg){
        Message.success({message:success.data.msg})
    }
    //如果成功，则返回数据给调用
    return success.data;

},error => {
    if(error.response.status==504 || error.response.status==404){
        Message.error({message:"服务器被吃了o(╯□╰)o"})
    }else if(error.response.status==403){
        Message.error({message:"权限不足，请联系管理员"})
    }else if(error.response.status==401){
        Message.error({message:"尚未登录，请登录"})
    }else {
        //判断后端是否自定义了错误码，如果定义了则返回后端响应的，否则输出“未知错误”
        if(error.response.data.msg){
                Message.error({message:error.response.data.msg})
        }else {
            Message.error({message:'未知错误！'})
        }
    }
    return;
})
//定义一个全局变量
let base='';

//封装一个(Key,value)形式的请求
export const postKeyValueRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let i in data) {
                ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
            }
            console.log(ret);
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}

//封装为JSON形式的请求
export const postRequest=(url,params)=>{
    return axios({
        method:'post',
        url:`${base}${url}`,
        data:params
    })
}

export const putRequest=(url,params)=>{
    return axios({
        method:'put',
        url:`${base}${url}`,
        data:params
    })
}

export const getRequest=(url,params)=>{
    return axios({
        method:'get',
        url:`${base}${url}`,
        data:params
    })
}

export const deleteRequest=(url,params)=>{
    return axios({
        method:'delete',
        url:`${base}${url}`,
        data:params
    })
}