console.log("Learning Observable " )

// Promise example
function timeoutPromise(miliseconds){
    return new Promise((resolveFn, rejectFn)=>{ 
                setTimeout(()=> {
                    resolveFn('time-out-data-block')
                }, miliseconds)
    })
}
// call promise
async function testFn () {  
    const testvalue = await timeoutPromise(2000).then(
        (data) => {
            console.log('time out resolveFn active:', data)
            return data;
        }
    )
    console.log("testvalue", testvalue)
}
testFn()


function intervalPromise(miliseconds){
    return new Promise((resolveFn, rejectFn)=> {
            setInterval(()=> {
                resolveFn('interval-data-block')
            }, miliseconds) // => it will not active because Promise only resolve one time
    })
}

intervalPromise(2000).then((data)=> {
    console.log("interval resolveFn active:", data) // => it run only one time
})
/* because the proplem above, observable is created to resolve */
// OBVERVABLE

// producer and comsumer
    // setTimeout example
        function next (){
            // todo
        }
        setTimeout(next, 1000);
    // DOM event example 
        function nextInEvent(){
            // todo
            console.log("user clicked")
        }
        document.addEventListener('click', nextInEvent)
    //=> can remove 
// OBVERVABLE with PROMISE
    console.log("---------------------Observable---------------------")
    // promise 
    Promise.timeout = (miliseconds) =>{
        return new Promise((resolveFn)=> {
            setTimeout(()=> {
                resolveFn('resolveFn-data-block')
            }, miliseconds)
        })
    }
    const promiseObject = Promise.timeout(3000) // kích hoạt timer
            // get data 
            promiseObject.then((data)=> {
                console.log("data of promiseObject", data)
            })











