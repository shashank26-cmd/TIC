import Icon from '../Icon/Icon';
import './Card.css'

function Card({ gameEnd,player,onPlay,index }){
    let icon =<Icon /> // byDefault pen
    if(player == "X"){
        icon = <Icon name="cross"/> // set in icon
    }else if(player=="0"){
        icon = <Icon name="circle"/>

    }
    return(
        <div className='card' onClick={() => !gameEnd && player=="" && onPlay(index)}>{icon}
        </div>
    )
}
export default Card;

