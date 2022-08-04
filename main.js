    // Timeout
    // way 1
        function next(data) {
            console.log("data of next", data)
        }
        // Timeout
        const observerTimeout = {
            next: (data) => {
                console.log("next of timeout run", data)
            },
            complete: () => {
                console.log("timeout complete")
            },
            error: () => {

            }
        }
        const obsTimeout$ = Observable.timeout(1000) // chưa kích hoạt timer
        console.log("observable", obsTimeout$)

        const subcriptionTimeout =  obsTimeout$._subscribe(observerTimeout) 
    // way 2
        // Observable.timeout(2000).subsricble( (data)=> {
        //     console.log("next of timeout run", data)
        // })

    // Interval
        const observerInterval = {
            next: (data) => {
                console.log("next wwith observer", data)
            },
            complete: () => {

            },
            error: () => {

            }
        }
        const obsInterval$ = Observable.interval(1000)

        const subsriptionInterval = obsInterval$.subscribe(observerInterval)

        const subsriptionInterval2 = obsInterval$.subscribe(()=>{
            console.log("next with function")
        })
