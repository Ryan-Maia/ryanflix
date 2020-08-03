import React from 'react';
import { Link } from 'react-router-dom';
import Default from '../../../templates/Default/index';

function Pagina404() {
  	return (
		<Default>
			<div>
				Página de cadastro de vídeos<br></br>
				<Link to="/cadastro/categoria">Cadastro de categorias</Link>
			</div>
		</Default>
  	)
}

export default Pagina404