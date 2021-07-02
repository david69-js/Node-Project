import styled from "styled-components";

export const NavStyle = styled.header ` 
background:white;
border-bottom:3px solid #d3d3d3;
  margin-bottom: 20px;
  top:0;
  height: 3.5rem;
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 100;
  align-items: center;
  justify-content: space-around;
  a {
    height: 100%;
    font-size: 1rem;
  }
  & ul {
    list-style: none;
    width:80%;
    margin: 0;
    display: flex;
    justify-content: space-between;
    font-size: 0.2rem;
  }
`
export const MenuItem = styled.li`
  margin: 0;
  color:gray;
  font-size: 1.3rem;
  font-weight: 100;
  padding: ${({ margin }) => (margin ? "0 13px 0 13px" : "0 0 0 13px")};
  a {
    color: gray;
    text-decoration: none;
    font-weight:700;
  }
  & a:hover{
      color:black;
  }
`

export const Container = styled.div`
  padding-top:5.5rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  display:flex;
  flex-direction:column;
  align-items: center;
  `;

export const ContainerForm = styled.form`
    background-color: white;
    box-shadow: 0 2px 3px rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 10%);
    max-width:350px;
    width:360px;
    color: #4a4a4a;
    max-width: 100%;
    position: relative;
`
export const FormGroup = styled.div`
  color: gray;
  display: block;
  max-width: 300px;
  font-size: 1.2rem;
  margin: 20px auto;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: black;
  font-weight:500;
  display: block;
`;

export const Input = styled.input`
    padding: 0.5em;
    border-radius: 3px;
    border-color: #dbdbdb;
    color: #363636;
    box-shadow: inset 0 1px 2px rgb(10 10 10 / 10%);
    width: 94%;
    margin-bottom: 0.5em;
    &:focus {
        outline: 4px auto #4fa4f5;
        box-shadow: inset 0 1px 2px #4fa4f5;
        background: #e8f0fe;
    }

`;
export const Button = styled.button`
    display: flex;
    width: 100%;
    background-color: #00d1b2;
    border-color: transparent;
    color: #fff;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.500em - 1px);
    padding-left: 0.75em;
    padding-right: 0.75em;
    padding-top: calc(0.500em - 1px);
    text-align: center;
    white-space: nowrap;
    border-radius: 0.4rem;
    :disabled{
      background: #b3b3b3;
    }
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: #ff3636;
  display: block;
  font-size:1rem;
`;