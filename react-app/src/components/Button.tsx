interface Props{
    children: string;
    color?: string // we can use | union operator for checking purpose;
    onClick:()=> void;
}

const Button = ({children,onClick,color="secondary"}:Props)=>{
    return(
    <button className={'btn btn-'+color} onClick={onClick}>{children}</button>
)}

export default Button;