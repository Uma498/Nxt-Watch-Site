import styled from 'styled-components'

export const HomeContainer = styled.div`
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

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 220px;
  width: 100%;
  display: ${props => props.display};
  justify-content: space-between;
  padding: 20px;
`

export const BannerLeftPart = styled.div`
  width: 50%;
`

export const BannerImg = styled.img`
  height: 30px;
  width: 80px;
`

export const BannerText = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: 'Roboto';

  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`

export const BannerButton = styled.button`
  color: #000000;
  background-color: none;
  border: 1px solid #000000;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
`

export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BannerCloseButton = styled.button`
  height: 25px;
  border: none;
  background-color: none;
`

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  height: 40px;
  width: 60%;
  border-radius: 4px;
  margin: 20px;

  @media screen and (min-width: 576px;) {
    width: 40%;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  background-color: none;
  color: ${props => props.color};
  border: none;
  outline: none;
  padding: 6px;
  font-family: 'Roboto';
`

export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  height: 100%;
  border: none;
  padding: 20px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
