    // observable
    function  Observable(_subscribe){ // observable
        this._subscribe = _subscribe // subscribe
    }

    function Subcription(unsubscribe) { // subcription
        this.unsubscribe = unsubscribe  // unsubscribe
    }

    Observable.prototype.subscribe = function ( 
        observerOrNext, 
        error, 
        complete,
    ){
        let observer
        if(typeof observerOrNext === 'function'){
            observer = {
                next: observerOrNext,
                error: error || (()=> {}),
                complete: complete || (()=> {}),
            }
        } else{
            observer = observerOrNext
        }
        console.log("this",this._subscribe)
        return this._subscribe(observer)
    }


    Observable.timeout = (miliseconds) => {
        // when subsricbe this function will run
        function _subscribe(subscriber){ 
            const timeoutId = setTimeout(() => {
                subscriber.next('data-timeout-block');
                subscriber.complete()
            }, miliseconds)
            return new Subcription(()=> {
                clearTimeout(timeoutId)
            })
        } 
        return new Observable( _subscribe )
    }

    Observable.interval = (miliseconds) => {
        // when subsricbe this function will run
        function _subscribe (subscriber){
            const intervalId = setInterval( ()=> {
                subscriber.next('data-interval-block')
            }, miliseconds)
            return new Subcription(()=> {
                clearInterval(intervalId)
            })
        }
        return new Observable(_subscribe)
    }

    // Observer 
