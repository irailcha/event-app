import styled from 'styled-components';


export const EventListStyle=styled.ul`
display: flex;
gap: 10px;

align-items: center;
flex-wrap: wrap;
justify-content: space-around;
list-style:none;

`
export const EventCardStyle=styled.li`
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 15px 10px;
border: 1px solid #735751;
box-shadow: 2px 3px 7px 4px #735751, 0 0 2px rgba(231, 215, 193, .5) inset;
border-radius: 4px;
background-color: rgba(231, 215, 193, .5);
height: 500px;
width: 350px;
margin-bottom: 10px;
`
