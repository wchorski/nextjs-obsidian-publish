import styled from 'styled-components'


export const StyledNavSidebar = styled.div`


  border-right: solid rgb(59, 59, 59) 1px;
  background-color: var(--c-nav);
  box-shadow: #00000054 -10px 3px 10px inset;
  min-width: 5em;
  transition: .3s;
  /* height: 100%; */
  position: static;
  top: 0;
  left: 0;
  
  nav{
    /* position: fixed; */
    top: 0;
    left: 0;
    transition: .3s;

    height: 100%;
    overflow: hidden;
    &:hover{
      overflow: overlay;
    }

    /* display: flex;
    flex-direction: column; */
    /* position: sticky; */
  }

  ul{
    list-style: none;
    padding: 0;

    display: flex;
    flex-direction: column;
    font-size: 25px;

    li{
      padding: 1em 0;
      text-align: center;
    }
  }


  
`