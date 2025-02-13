export function Card({children, bgColor="blue", title="Card"}) {
return(
    <>
    <div style={{backgroundColor : bgColor}}>
    <h2>{title}</h2>
    {children}
    </div>
    </>
    
    
)
}