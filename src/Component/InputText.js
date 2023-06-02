import Items from "./Items";
import './Item.css';
import {v4 as uuidv4} from 'uuid';

const InputData = () =>{


    const DataArry =[
        { title:"Bmw",amount:200000},
        { title:"Honda",amount:5000000}
     ]


    return (
      <ul className="item-list li">
        {DataArry.map((e)=>{
        return <Items {...e} key = {uuidv4()} />
        })}
    
      </ul>
    );
  }
  export default InputData ; 