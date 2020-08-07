import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import Default from '../../../templates/Default/index';
import FormField from '../../../components/FormField/index';
import SubmitButton from '../../../components/SubmitButton/index';
import videosRepository from '../../../repositories/videos';
import './style.css';
function CadastroVideo() {
	const history = useHistory();
	const valoresIniciais = {
		titulo: '',
		url: '',
	}
	const {setValores, valores, atualizarValores} = useForm(valoresIniciais);
	
	function videoTemplatePreview(value){
		if(value.length>32){
			const videoURL = value.substring(32,value.length);
			if(videoURL.length===11){
				const imagem = `https://img.youtube.com/vi/${videoURL}/hqdefault.jpg`;
				return imagem;
			}else{
				return `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fefd7c8b-7455-42f1-88a5-507d09500f84/dajefub-760e3411-544c-4b5c-81eb-b5f4a0cedcc9.png/v1/fill/w_1024,h_768,q_80,strp/wallpaper_not_found____by_break_plays_dajefub-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NjgiLCJwYXRoIjoiXC9mXC9mZWZkN2M4Yi03NDU1LTQyZjEtODhhNS01MDdkMDk1MDBmODRcL2RhamVmdWItNzYwZTM0MTEtNTQ0Yy00YjVjLTgxZWItYjVmNGEwY2VkY2M5LnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.IpqZWpyKuPbFNsUjNjSnSlHnBsxjH-B-tmDRKkhCLIU`;
			}
		}else{
			return `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fefd7c8b-7455-42f1-88a5-507d09500f84/dajefub-760e3411-544c-4b5c-81eb-b5f4a0cedcc9.png/v1/fill/w_1024,h_768,q_80,strp/wallpaper_not_found____by_break_plays_dajefub-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NjgiLCJwYXRoIjoiXC9mXC9mZWZkN2M4Yi03NDU1LTQyZjEtODhhNS01MDdkMDk1MDBmODRcL2RhamVmdWItNzYwZTM0MTEtNTQ0Yy00YjVjLTgxZWItYjVmNGEwY2VkY2M5LnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.IpqZWpyKuPbFNsUjNjSnSlHnBsxjH-B-tmDRKkhCLIU`;
		}
	}

  	return (
		<Default white>
			<div>
				<h1>Cadástro de Vídeo: {valores.nome}</h1>
				<form onSubmit={(e)=>{
					e.preventDefault();
					alert("Vídeo Cadastrado Com Sucesso!");
					videosRepository.create({
						categoriaId: 1,
						titulo: valores.titulo,
						url: valores.url,
						
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
					<FormField 
						value={valores.url}
						onChange={atualizarValores}
						name="url"
						type="text"
						label="Url:"
						required
					/>
					<SubmitButton>Cadastrar</SubmitButton>
				</form>
				<Link to="/cadastro/categoria">Cadastro de categorias</Link>
			</div>
			<div id="centerDiv">
				<img id="imagePreview" src={videoTemplatePreview(valores.url)} alt="preview"></img>
			</div>
		</Default>
  	)
}

export default CadastroVideo