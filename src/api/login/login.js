import request from "../request";
import qs from "qs";

export const Login ={
	doLogin(data) {
	    return request({
	        url: 'index/login',
	        method:'POST',
	        data
	    });	
    }  
}
