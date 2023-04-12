import styled  from "styled-components";

export const TabItemContainer =styled.li`
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;

`

export const TabButton = styled.button`
 color: #7b8794;
 font-size: 20px;
 font-weight: bold;
 border-left: none;
 border-right: none;
 border-top: none;
 border-bottom: 2px solid #7b8794;
 cursor: pointer;
 background-color: transparent;
 color: ${props=>props.isActive&&'#2563eb'};
 border-bottom: ${props=>props.isActive&&'2px solid #2563eb'};

`