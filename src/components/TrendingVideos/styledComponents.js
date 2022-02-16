import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  overflow-y: auto;
  margin-top: 60px;
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`

export const TitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`

export const TrendingText = styled.h1`
  color: ${props => props.color};
  font-size: 24px;
  font-family: 'Roboto';

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`

export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
