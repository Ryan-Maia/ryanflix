import React from 'react';
import Menu from '../../components/Menu/index'
import Footer from '../../components/Footer/index'
import styled from 'styled-components';

const Main = styled.main`
background-color: ${props => props.white ? "white" : "black"};
color: ${props => props.white ? "black" : "white"};
flex: 1;
padding-top:50px;
padding-left:5%;
padding-right:5%;

`

function Default({children, white}){
    return (
        <>
            <Menu />
                <Main white={white}>
                    {children}
                </Main>
            <Footer />
        </>
    )
}

export default Default;