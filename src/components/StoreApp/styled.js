import styled from 'styled-components'

export const AppContainer= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient( #fff1eb,#ace0f9);
`

export const AppHeading=styled.h1`
  color:#1e293b ;
  font-size: 30px;
  font-weight: bold;
`

export const AppSearchContainer=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  border: 2px solid #7b8794;
  border-radius:10px ;

`

export const AppInput=styled.input`
  background-color: transparent;
    border: none;
    outline: none;
    width: 280px;
`

export const AppIcon = styled.img`
  height: 32px;
  width: 32px;
`

export const TabListContainer= styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 0px;
`

export const AppListContainer=styled.ul`
 list-style-type: none;
 display: flex;
 flex-direction:row ;
 justify-content: center;
 flex-wrap: wrap;
 width: 50%;
 padding-left: 0px;

`