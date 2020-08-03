import React, { useState, useEffect} from 'react';
import Default from '../../../templates/Default/index';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/index';

function CadastroCategoria() {
	
	

	const valoresIniciais = {
		nome: '',
		descricao: '',
		cor: '#ffffff'
	}
	const [categorias, setCategorias] = useState([]);
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

	useEffect(()=>{
		console.log("oi");
		console.log(window.location);
		const isLocalHost = window.location.hostname.includes('localhost')
		const URL = isLocalHost ? 'https://localhost:8080/categorias' : 'https://ryanflix.herokuapp.com/categorias';
		fetch(URL)
		.then(async (response)=>{
			const resposta = await response.json();
			setCategorias([
				...resposta,
			]);
		});
	},[]);

  	return (
		<Default white>
			<div>
				<h1>Cadástro da categoria: {valores.nome}</h1>
				<form onSubmit={
					function handleSubmit(event){
						event.preventDefault();
						setCategorias([...categorias, valores]);
						setValores(valoresIniciais);

						
				}}>
					<FormField 
						value={valores.nome}
						onChange={atualizarValores}
						name="nome"
						type="text"
						label="Nome:"
					/>

					<br />

					<FormField 
						value={valores.descricao}
						onChange={atualizarValores}
						name="descricao"
						type="text"
						label="Descrição:"
					/>

					<br />

					<FormField 
						value={valores.cor}
						onChange={atualizarValores}
						name="cor"
						type="color"
						label="Cor:"
					/>
					<div className="button-div">
						<button className="submit-btn">Cadastrar</button>
					</div>
				</form>
			</div>

			<ul>
				{categorias.map((categoria,i)=>{
					return (
						<li key={i}>{categoria.nome} | {categoria.descricao} | <span style={{backgroundColor: categoria.cor}}>{categoria.cor}</span></li>
					)
				})}
			</ul>
			<Link to="/">
				Voltar para a home
			</Link>
		</Default>
  	)
}

export default CadastroCategoria

