import styled from 'styled-components'

export const VideosCardList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const NoVideosViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NoVideosImg = styled.img`
  width: 220px;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoVideosHeading = styled.h1`
  font-size: 24px;
  font-family: 'Roboto';
  color: ${props => props.headingColor};
`

export const NoVideosNote = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => props.noteColor};
`

export const RetryButton = styled.button`
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto';
  background-color: #4f46e5;
  border-radius: 4px;
  border: none;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
`
