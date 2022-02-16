import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0.2);
`

export const LoginLogo = styled.img`
  align-self: center;
  width: 140px;
  margin-bottom: 16px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`

export const LoginButton = styled.button`
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto';
  background-color: #4f46e5;
  height: 30px;
  border-radius: 6px;
  margin-top: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const InputLabel = styled.label`
  color: #475569;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const UserInput = styled.input`
  color: #475569;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #94a3b8;
  margin-top: 6px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 12px;
`

export const ShowPassword = styled.label`
  color: #1e293b;
  font-size: 14px;
  font-family: 'Roboto';
`

export const ShowError = styled.p`
  color: '#1e293b';
  font-size: 16px;
  font-family: 'Roboto';
`
