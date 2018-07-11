import axios from 'axios'


function fetch(url,data){
    return new Promise((reslove,reject)=>{
        axios.post(url,data).then(res=>{
            if(res.data.status===200){
                reslove(res)
            }

        }).catch(err=>{
            reject(err)
        })
    })
}

export default fetch



