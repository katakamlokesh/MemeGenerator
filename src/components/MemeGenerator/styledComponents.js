// Style your components here
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding-top: 32px;
  padding-right: 24px;
  padding-bottom: 32px;
  padding-left: 24px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1101px;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    text-align: left;
  }
`
export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-direction: row-reverse;
  }
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  height: 300px;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`
export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.selectedFontSize}px;
  font-weight: 600;
  font-family: 'Open Sans';
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const LabelElement = styled.label`
  font-family: 'Open Sans';
  color: #7e858e;
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 0px;
`
export const InputElement = styled.input`
  color: #5a7184;
  font-family: 'Open Sans';
  background-color: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  outline: none;
  height: 40px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
`

export const SelectElement = styled.select`
  background-color: #ffffff;
  border: 1px solid #5a7184;
  border-radius: 4px;
  padding: 12px;
  color: #1e293b;
  font-family: 'Open Sans';
  font-size: 18px;
  outline: none;
  cursor: pointer;
  margin-top: 5px;
  margin-bottom: 20px;
`
export const OptionElement = styled.option`
    font-family': 'Open Sans';
    padding: 12px 14px 12px 14px;
    margin-bottom: 24px;
`

export const GenerateButton = styled.button`
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  background-color: #0b69ff;
  min-width: 25px;
  max-width: 150px;
  outline: none;
  cursor: pointer;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
`
