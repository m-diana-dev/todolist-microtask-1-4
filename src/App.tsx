import React, {MouseEvent} from 'react';
import {Button} from "./components/Button";

function App() {
    const Button1foo = (subscriber: string, age: number) =>{
        console.log(subscriber, age)
    }
    const Button2foo = (subscriber: string) =>{
        console.log(subscriber)
    }
    const Button3foo = () =>{
        console.log('I\'m stupid button')
    }
    return (
       <div>
           <Button name={'MyYoutubeChanel-1'} callBack={()=>Button1foo('I\'m Vasya', 21)}/>
           <Button name={'MyYoutubeChanel-2'} callBack={()=>Button2foo('I\'m Ivan')}/>
           <Button name={'MyYoutubeChanel-3'} callBack={Button3foo}/>
       </div>
    );
}

export default App;