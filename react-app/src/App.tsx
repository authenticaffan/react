import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';

function App(){
//   let items = [
//     'india',
//     'america',
//     'uk',
//     'canada',
// ];

// const handleSelectItem = (item:string)=>{

// }
  //<ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem} />
  return <div>
  {/* <Alert>
    hello world
    <h1>hello world</h1>
  </Alert> */}
  <Button onClick={()=>console.log("Clicked")}>My Button</Button>
  </div>;
}

export default App;