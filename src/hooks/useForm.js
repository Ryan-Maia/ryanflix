import { useState } from 'react';

function useForm(valoresIniciais){
    const [valores,setValores] = useState(valoresIniciais);

    function setValor(chave, valor) {
        // chave: nome, descricao, bla, bli
        setValores({
          ...valores,
          [chave]: valor, // nome: 'valor'
        })
    }
    function atualizarValores(infosDoEvento) {
        if(infosDoEvento.target.value){
            infosDoEvento.target.classList.add('not-empty');
            infosDoEvento.target.classList.remove('empty');
        }else{
            infosDoEvento.target.classList.add('empty');
            infosDoEvento.target.classList.remove('not-empty');
        }
        setValor(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }
    return {setValor, setValores, valores, atualizarValores}
}

export default useForm;