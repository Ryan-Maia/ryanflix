import React, { useState, useEffect} from 'react';
import Default from '../../../templates/Default/index';
import { Link, useHistory} from 'react-router-dom';
import FormField from '../../../components/FormField/index';
import SubmitButton from '../../../components/SubmitButton/index';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
	const history = useHistory();

	const valoresIniciais = {
		titulo: '',
		descricao: '',
		cor: '#ffffff'
	}
	const {setValores, valores, atualizarValores} = useForm(valoresIniciais);
	const [categorias, setCategorias] = useState([]);
	

	useEffect(()=>{
		const isLocalHost = window.location.hostname.includes('localhost')
		const URL = isLocalHost ? 'http://localhost:8080/categorias' : 'https://ryanflix.herokuapp.com/categorias';
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
				<h1>Cadástro da categoria: {valores.titulo}</h1>
				<form onSubmit={
					function handleSubmit(event){
						event.preventDefault();
						setCategorias([...categorias, valores]);
						setValores(valoresIniciais);
						
						alert("Categoria Cadastrada Com Sucesso!");
						categoriasRepository.create({
							titulo: valores.titulo,
							descricao: valores.descricao,
							cor: valores.cor,
							
						}).then(()=>{
							console.log('Cadastrado com success');
							history.push('/');
						})

					
				}}>
					<FormField 
						value={valores.titulo}
						onChange={atualizarValores}
						name="titulo"
						type="text"
						label="Título:"
						required
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
					<SubmitButton>Cadastrar</SubmitButton>
				</form>
			</div>

			<ul>
				{categorias.map((categoria,i)=>{
					return (
						<li key={i}>{categoria.titulo} | {categoria.descricao} | <span style={{backgroundColor: categoria.cor}}>{categoria.cor}</span></li>
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

