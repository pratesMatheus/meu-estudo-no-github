/*Sem usar react-hooks
*/
function Counter (){
    let quantity = 0;

    function upQuantity(){
        quantity = quantity + 1;
        document.getElementById('counter-box').innerHTML = quantity
        console.log(quantity);
    }
    return (
        /*Usamos um fragment: <></> 
        que é uma div que encapsula os elementos
        sem renderizar uma div, pois só podemos ter um elemento em react, 
        logo usamos o fragment
        */
        <>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar sem hook</button>
        </>
        
    );
}

export default Counter;