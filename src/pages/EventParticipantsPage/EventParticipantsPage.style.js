import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyle=styled(Link)`
display:flex;
align-items: center;
gap: 10px;
border: 1px solid #432818;
padding: 8px; 10px;
background-color: #f5f1ed;
border-radius: 8px;
max-width: 150px;
margin-bottom: 15px;


&:hover{
background-color: #735751;
color: #fff;}
`