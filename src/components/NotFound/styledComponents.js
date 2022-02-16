import styled from 'styled-components'

export const NotFoundContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
min-height:90vh;
background-color:${props => props.bgColor}
margin-top:50px;
margin-bottom:50px;
overflow-y;auto;

@media screen and (min-width:768px){
    margin-left:150px;
    margin-bottom:0px;
}
`

export const NotFoundVideosView = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: none;
  margin-top: 40px;
`

export const NotFoundImg = styled.img`
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 420px;
  }
`

export const NotFoundHeading = styled.h1`
  font-size: 24px;
  font-family: 'Roboto';
  color: ${props => props.headingColor};
  text-align: center;
  margin-top: 20px;
`

export const NotFoundDescription = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color:${props => props.textColor}
  text-align: center;
`
