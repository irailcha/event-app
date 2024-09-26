import styled from 'styled-components';



export const EventTitleStyle=styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #735751;
  margin-left: auto;
  margin-bottom: 8px;
`

export const EventDescrStyle=styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #a78a7f;
  margin-bottom: 8px;
`

export const EventDateStyle=styled.span`
font-size: 1rem;
  font-style: italic;
  color: #bf4342;
  margin-bottom: 8px;
  display: block;
`


export const EventOrgStyle=styled.p`
font-size: 1rem;
  color: #8c1c13;
  font-weight: 600;
  
`


export const EventBtnBlockStyle=styled.div`
display:flex;
gap: 15px;
justify-content: space-around;
color: #432818;

:hover{
color: #99582a
}

`

export const EventImgThumb=styled.div`
height: 180px;
width: 320px;
background-color: #99582a;
border-radius: 12px;
 overflow: hidden;
`

export const EventImg=styled.img`
width: 100%,
height: 100%,
object-fit: cover
`