import styled from "styled-components";


export const StylePerfil = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: left;
    background: linear-gradient(#a9a9a9, #535353 );
    padding-top: 100px;
    overflow-y: hidden;
    
    ;
        div{
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            color: #ffff;
            flex-direction: column;

            h1{
                font-size: 55px;
            }

        img{
            
            margin-left: 3%;
            width: 150px;
            border-radius: 100px;
        }
        .btns{
            display: flex;
            flex-direction: row;
        }
        }

@media screen and (max-width: 500px){
    margin-top: 0;
    flex-direction: column;

        div{
        align-items: center;
            h1{
            font-size: 25px; 
            }
            a{
                padding: 0;
                text-align: center;
                width: 200px;
            }
        }
        img{
            margin-top: 20px;
            margin-left: 0;
        }
}
`
