import httpInstance from "@/utils/http"


export function getCategory(){
    return httpInstance({         //返回promise
        url: 'home/category/head'
    })
}