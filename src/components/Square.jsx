import {useState, useEffect} from 'react';

const Square = (props) =>{

    const [status, setStatus] = useState();


    let {sqKey, num, emoji} = props;

    useEffect(()=>{
        //check id

        if (props.selectedPair.length === props.level **2){
            setStatus(true)
        }else if (props.selectedPair.length === 0){
            setStatus(false)
        }else if(Object.keys(props.currSelected)[0] === sqKey) {
            setStatus(props.checkFlipped(emoji.title))
        }

    },[props.checkFlipped, props.selectedPair, props.currSelected]);
    
    function handleClick(){
        if (Object.keys(props.currSelected)[0] === sqKey){ // handle double clicks
            alert('double clicked!');
            props.setSelectedPair([]);
            props.setCurrSelected({});
        }else{
            console.log(sqKey, emoji.title)
            props.setCurrSelected({[sqKey]: emoji.title})
            props.setSelectedPair([...props.selectedPair, emoji.title])
        }
    }

    return(
        <div className="Square" onClick={handleClick}>
            {emoji ? <p className="displayEmoji" style={{backgroundColor: status ? '':'black'}}>{status ? emoji.symbol : 'black'}</p> : ""}
        </div>
    )
}

export default Square;