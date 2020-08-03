import styled from 'styled-components';

export const VideoCardTitle = styled.p`
  background-color:var(--primary);
  color:var(--black);
  font-weight:600;
  font-size:18px;
  width:100%;
  padding:10px 5px 10px 30px;
  position: absolute;
  bottom:-500px;
  transition: 500ms;
`;

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 320px;
  height: 178px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: 100%;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding-top: 16px;
  padding-bottom: 16px;
  transition: opacity .3s;
  transition: 500ms;

  &:hover ${VideoCardTitle}{
    bottom:0px;
    transition:300ms;
  }
  &:hover{
    transition:300ms;
    background-size:120%;
  }

  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
