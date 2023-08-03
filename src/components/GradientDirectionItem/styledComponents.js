// Style your elements here
import styled from 'styled-components/macro'

export const ListItem = styled.li`
  width: 49%;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`
export const DirectionButton = styled.button`
 color: ${props => (props.isActive ? '#000000' : '#1e293b')};
  font-size: 12px;
  font-weight: 600;
  font-family: 'Roboto';
  background-color: ${props => (props.isActive ? '#1e293b' : '#ffffff')};;
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
  opacity :${props => (props.isActive ? 1 : 0.5)}
  outline: none;
  cursor: pointer;
`
