import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    scroll-behavior: smooth;
    overflow-x:hidden;
  };

  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: #5e5e5e;
  box-shadow: inset 0 0 5px grey;
  
}
::-webkit-scrollbar-thumb:hover{
  background:#000000;
}
/* Handle */
::-webkit-scrollbar-thumb {
  
  background: #302f2f;
  border-radius: 7px;
}
`;
