import { useState } from "react";

const Counter = () =>{

    const [counterState,setCounterState] = useState(() =>{
        console.log("hello");
        return {counter: 10};
    });

    const [titleState, setTitileState] = useState(() =>{
        return {title: "Fun"}
    });

    function incrementCounter() {
        setCounterState((prevState)=>{
            return {...prevState, counter: prevState.counter +1};
        });
    }

    function decrementCounter() {
        setCounterState((prevState) =>{
            return {...prevState, counter: prevState.counter -1};
        });
    }

    return(
        <div className="col-12 col-md-4 offset-md-4 border text-white">
        <span className="h2 pt-4 m-2 text-white-50">{titleState.title} Counter</span>
        <br></br>
        <button className="btn btn-success m-1" onClick={incrementCounter}>+1</button>
        <button className="btn btn-danger m-1" onClick={decrementCounter}>-1</button>
        <br></br>
        <span className="h4">
            Counter: &nbsp;
            <span className="text-success">{counterState.counter}</span>
        </span>
    </div>
    )
};

export default Counter;