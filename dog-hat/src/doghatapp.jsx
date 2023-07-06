import React from 'react'
import ReactDOM from 'react-dom/client'
import dogHatImgs from "../../assets/dog-hat" 
import { useState } from 'react'

const [isHatOn, setIsHatOn] = useState(false)

const Header = () => {
    return(
        <header>
        <h1>Dog Hat App</h1>
        </header>
    )}


const Image = (props) => {
    return(        
    <section>
        <img src={props.imageToDisplay}/>
    </section>)
}

const ToggleHat = () => {
    console.log("button!")
}

const Button = () => {
    return(        
    <section>
        <button onClick={ToggleHat} >Toggle Hat</button> 
    </section>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <Header/>    
        <Image imageToDisplay={dogHatImgs[1]} />
        <Button/>
    </div>
) 


