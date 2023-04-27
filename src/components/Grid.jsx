
import Square from './Square';

const Grid = (props) => {

    const matrix = props.array.reduce(function (rows, key, index) { 
        return (index % props.level == 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);


    return(
        <div className="Grid">
            {matrix.map((row, rowInd)=>{
                return(
                <div key={rowInd} className='Row'>
                {row.map((emoji,ind)=>
                    <Square key={`${rowInd}${ind}`} sqKey={`${rowInd}${ind}`} emoji={emoji} checkFlipped={props.checkFlipped}
                        selectedPair={props.selectedPair} setSelectedPair={props.setSelectedPair}
                        level={props.level}
                        currSelected={props.currSelected} setCurrSelected={props.setCurrSelected}

                    />
                )}
                </div>
                )
            })}
       </div>
    )
}

export default Grid;
