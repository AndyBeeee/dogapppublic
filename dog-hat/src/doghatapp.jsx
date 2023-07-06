import React from 'react'
import ReactDOM from 'react-dom/client'
import dogHatImgs from "./dog-hat-images" 
import { useState } from 'react'

const Header = () => {
    return (
        <header>
        <h1>Dog Hat App</h1>
        </header>
    )
}

const Image = (props) => {
    return (        
        <section className="imageSection">
            <img src={props.imageToDisplay}/>
   
        </section>
    )
}

const Button = (props) => {
    return (        
        <section className="buttonSection">
            <button onClick={props.callback}>Toggle Hat</button> 
        </section>
    )
}

const App = () => {
    const [imgUrl, setImgUrl] = useState(dogHatImgs[1]);

    const toggleHat = () => {
        if (imgUrl === dogHatImgs[1]) setImgUrl(dogHatImgs[0]);
        else setImgUrl(dogHatImgs[1]);
    };

    return (
        <div className="fullScreen">
            <Header/>    
            <Image imageToDisplay={imgUrl} />
            <Button callback={toggleHat} />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
) 


