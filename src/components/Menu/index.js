import React from 'react';
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import Button from '../Button/index';
import './menu.css';
function isHomePage(element){
    if(element){
        return(
        <Button className="ButtonLink" as={Link} to="cadastro/video">
            Novo vídeo
        </Button>
        )
    }
}
function Menu(props) {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="RyanFlix Logo"></img>
            </Link>
            {isHomePage(props.homePage)}
            
        </nav>
    );
  }
  
export default Menu;