import {useState} from "react";


function Header (props){
    console.log(props.title)
    return (<h1>{props.title? props.title : "Default Title"}</h1>);
}

export default function HomePage (){
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = useState(0);
    function handleClick(){
        setLikes(likes + 1);
    }
    
    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {
                    names.map( (name)=>(
                        <li key={name}>{name}</li>
                    ))
                }
            </ul>
            <button onClick={handleClick}>Like({likes})</button>
        </div>
    );
}