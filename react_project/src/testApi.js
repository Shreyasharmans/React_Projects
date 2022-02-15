export const testAPI = (a,b) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b);
        },15000);
    
    });
};