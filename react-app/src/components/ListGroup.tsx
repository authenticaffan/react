import { Fragment, useState } from "react";
// import { MouseEvent } from "react";

//{items:[], heading:string}
interface Props{
    items: string[];
    heading:string;
    onSelectItem: (item:string)=>void;
}

function ListGroup({items,heading,onSelectItem}: Props) {
    // let items = [
    //     'india',
    //     'america',
    //     'uk',
    //     'canada',
    // ];
    // items=[];

    //event handler
    // const handleClick = (event: MouseEvent)=>console.log(event);
    
    // hook
    const [selectedIndex, setselectedIndex] = useState(-1);
    

    return (
    <>
        <h1>{heading}</h1>
        {/* {items.length===0?<p>no item found</p>:null} */}
        {items.length===0 && <p>no item found</p>} 
        <ul className="list-group">
            {items.map((item,index) => (
            <li 
            className={selectedIndex===index ? 'list-group-item active' : 'list-group-item'} 
            key={item} 
            onClick={()=>{
                setselectedIndex(index);
                onSelectItem(item);
            }}>{item}</li>
            ))}
        </ul>
    </>
  );
}

export default ListGroup;
