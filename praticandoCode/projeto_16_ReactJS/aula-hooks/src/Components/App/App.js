import './App.css';
//import Counter from '../Counter/Counter';
//import SmartCounter from '../SmartCounter/SmartCounter';
import IfoodCounter from '../ifoodCounter/ifoodCounter';

/*Isso é um Component: uma função em .js que retorna um HTML
Esse é o resumo + prático

NOTA: Essa arquivo (App.js) também pode usar a extensão 
.jsx que vai funcionar da mesma forma (App.jsx)
*/
function App() {
  return (
    /*Usamos o fragment com a lógica de que: 
    um elemento filho nunca deve andar sem pai
    */
    <>
      <h1>Hello World no ifood</h1>
      <IfoodCounter/>
    </>
  );
}

export default App;
