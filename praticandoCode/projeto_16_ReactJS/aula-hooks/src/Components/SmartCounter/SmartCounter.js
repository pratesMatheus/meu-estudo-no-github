/*Usando react-hooks*/
import {useState} from 'react';
/*useState: usa estado (é stateful), ou seja, o compenente vai ter memória
guarda estado na memória e traz uma função

1. uma variável stateful; 
2. com uma função amarrada a essa função que atualiza esse valor; 
3. um componente reactivo;
*/
function SmartCounter(){
    
    const [quantity, upQuantity] = useState(1);

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={()=> upQuantity(quantity + 1)}>
                Aumentar com useState  hook</button>
        </>
        /*estamos falando de uma variável que tem um gancho com uma função;
        é um ganho*/ 
    )
}

export default SmartCounter;