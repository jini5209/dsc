new Promise((resolve, reject)=>{
 console.log(1)
 resolve()
}).then(()=>{
    console.log(2)
})

async function log(){
    await console.log(1)
    await console.log(2)
}

function log(){
    await setTimeout(()=>{
        console.log(1)
    }, 1000)
    await console.log(2)
}
log()