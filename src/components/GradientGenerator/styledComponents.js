// Style your elements here
import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  @media screen and(min-width:768px) {
    width: 85%;
    min-width: 1110px;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
  font-family: 'Roboto';
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const DirectionDescription = styled.p`
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  font-family: 'Roboto';
  line-height: 1.5;
`

export const GradientDirectionList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`

export const ColorsPickersDirection = styled.p`
  color: #ededed;
  font-size: 22px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.5;
`

export const ColorPickersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  color: #1e293b;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Roboto';
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;
`
