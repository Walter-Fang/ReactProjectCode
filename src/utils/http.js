import axios from "axios"

axios.defaults.timeout = 10*1000

axios.defaults.withCredentials = false

// http request interceptor
axios.interceptors.request.use(
    (config) => {
        config.data = JSON.stringify(config.data)
        config.headers = {
            "Content-Type": "application/json",
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// http response interceptor
axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.log("Request error：", error)
    }
)


export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
        }).then((response) => {
            resolve(response)
        })
            .catch((error) => {
                reject(error)
            })
    })
}


export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            (response) => {
                resolve(response)
            },
            (err) => {
                reject(err)
            }
        )
    })
}

//统一接口处理，返回数据
export default function http(type, url, param) {
    return new Promise((resolve, reject) => {
        switch (type) {
            case "get":
                // console.log("开始get请求的url:", url)
                get(url, param)
                    .then(function (response) {
                        resolve(response)
                    })
                    .catch(function (error) {
                        console.log("获取get请求失败.", error)
                        reject(error)
                    })
                break
            case "post":
                console.log("开始post请求的url:", url)
                post(url, param)
                    .then(function (response) {
                        resolve(response)
                    })
                    .catch(function (error) {
                        console.log("获取post请求失败.", error)
                        reject(error)
                    })
                break
            default:
                console.log('默认只处理了get和post')
                break
        }
    })
}