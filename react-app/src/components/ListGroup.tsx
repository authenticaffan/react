import { Fragment } from "react";

function ListGroup() {
    let items = [
        'india',
        'america',
        'uk',
        'canada',
    ];
    // items=[];

    return (
    <>
        <h1>List</h1>
        {/* {items.length===0?<p>no item found</p>:null} */}
        {items.length===0 && <p>no item found</p>} 
        <ul className="list-group">
            {items.map(item => (
            <li key={item}>{item}</li>
            ))}
        </ul>
    </>
  );
}

export default ListGroup;
