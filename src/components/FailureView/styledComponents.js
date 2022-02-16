import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const FailureViewImg = styled.img`
  width: 220px;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const FailureHeading = styled.h1`
  font-size: 24px;
  font-family: 'Roboto';
  text-align: center;
  color: ${props => props.headingColor};
`

export const FailureNote = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  text-align: center;
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
