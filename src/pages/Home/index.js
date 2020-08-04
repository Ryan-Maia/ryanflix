import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Menu from '../../components/Menu/index';
import Footer from '../../components/Footer/index';
import categoriasRepository from '../../repositories/categorias';

function Home(){
	const [dadosIniciais, setDadosIniciais] = useState({
		categorias: [],
	})
	useEffect(()=>{
		categoriasRepository.getAllWithVideos()
		.then((response)=>{
			
			setDadosIniciais(response);
		})
	},[]);

	return (
		<div>
			<div style={{ background: '#141414' }}>
				<Menu homePage />
				{dadosIniciais.length === 0 && (<div>Loading...</div>)}
				{dadosIniciais.length > 1 && (
					<>
					{dadosIniciais.map((categoria,indice)=>{
						if(indice === 0){
							{console.log(categoria)}
							return (
							<>
								<BannerMain
									videoTitle={dadosIniciais[0].videos[0].titulo}
									url={dadosIniciais[0].videos[0].url}
									videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
								/>
								<Carousel
									ignoreFirstVideo
									category={categoria}
								/>
							</>
						)
						}else{
							return(
								<Carousel
									key={categoria.id}
									category={categoria}
								/>
							)
						}
					})}
					</>
				)}
				{/* { dadosIniciais.map((categoria, indice)=>{ */}
					{/*  */}
					
						{/*  */}
						
					{/* } */}
					
				{/* })} */}
				

				
				{/* <Carousel category={dadosIniciais.categorias[1]} /> */}
				<Footer />
			</div>
		</div>
	);
}

export default Home;
