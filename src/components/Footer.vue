<template>
    <div id="footer">
        <div id="centralizar">
            <div id="maior">
            <iframe id=mapa src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.358874000027!2d-34.87607208522014!3d-8.064828694193231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18bad15c4073%3A0x8ee2abb747a89b27!2sR.%20Alf%C3%A2ndega%2C%2035%20-%20Recife%2C%20PE%2C%2050030-030!5e0!3m2!1sen!2sbr!4v1622148745413!5m2!1sen!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            <div id="contato">
                <h2>Fale conosco:</h2>
                <h3>E-mail</h3>
                atendimento@prepi.com.br
                <h3>Telefone</h3>
                (81) 99999-9999
                <h3>Atendimento</h3>
                Segunda a Sexta, das 08h às 20h
            </div>
            <ul id="ftnavbar">
                <a href="#/hub"><li><b>HUB</b></li></a>
                <a href="#/cadastro"><li><b>CADASTRE-SE</b></li></a>
            </ul>
            
        </div>
         <div id="logoeredes">
                
                <div id="redes">
                    <a href="https://www.instagram.com/prepiapp/"><img src="../assets/img/instagram.png" alt="instagram"></a>  <!---->
                    <a href="#"><img src="../assets/img/whatsapp.png" alt="whatsapp"></a>
                    <a href="https://www.facebook.com/prepiapp"><img src="../assets/img/facebook.png" alt="facebook"></a>
                </div>
            </div> 
        </div>
        <div id="menor">
            @2021, PrepiChallenge - Todos os direitos reservados |  Desenvolvido por @ Gabriel Lopes
        </div>
    </div>
</template>

<style scoped>
    #maior {
        display: flex;
        flex-direction: column;
        align-content: center;
    }
    #menor {
        background-color: #9ecdfa;
        box-sizing: border-box;
        margin: 0;
        height: 14vh;
        font-size: 0.75rem;
        align-items: center;
        display: flex;
        justify-content: center;
        padding-left: 20px;
        padding-right: 20px;
        font-weight: 600;
    }
    #redes {
        margin: 0;
        width: 115px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: center;
    }
    #redes a{
        width: max-content;
    }
    img{
        width: 37px;
        
        margin-right: 10px;
    }
    #logo {
        align-self: center;
        box-sizing: border-box;
        padding-top: 40px;
        
        width: 210px;
        height: auto;
    }
    #logoeredes{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;
    }
    #footer {
        font-weight: 100;
        margin: 0;
        background-color:  #8aabca;
        width: 100%;
        height: max-content;
        color: black;
        font-family: 'Nunito', sans-serif;
        
    }
    h2{
        margin: 0;
        margin-bottom: 1.5%;
        font-size: 1.3rem;
        font-weight: 600;
    }
    h3{
        font-weight: 600;
        margin: 0;
        font-size: 1.2rem;
    }
    p {
        margin: 0;
        display: block;
        width: max-content;
    }
    #contato{
        padding-top: 30px;
        padding-bottom: 30px;
        font-weight: 500;
    }
    #mapa{
        align-self: center;
        padding-top:20px;
    }
    #ftnavbar{
        margin: 0;
        list-style: none;
        width: max-content;
        padding-left: 0;
        padding-bottom: 25px;
        align-self: center;
        color: black;
        font-weight: 600;
        font-family: 'Nunito', sans-serif;
    }
   
    #ftnavbar a{
        color:black;
        text-decoration: none;
    }
    #ftnavbar li{
        padding-top: 5px;
    }
    @media (orientation: portrait) and (max-width: 769px) and (max-height: 1025px) and (min-width: 767px) and (min-height: 1023px) {
        #footer{
            font-size: 1.1rem;
        }
        #menor{
            font-size: 1.2rem;
        }
    }
    @media (min-width: 960px) {
        #centralizar{
            width: 100%;
            height: 45vh;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
        }
        #footer{
            font-size: 1.1rem;
            height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        #maior{
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            padding-top: 10px;
            width: 100%;
        }
        #mapa{
            padding-bottom: 0;
            width: 300px;
            height: 180px;
             padding-top:0px;
            
        }
        #menor{
            font-size: 0.9rem;
            height: 8vh;
        }
        #logo{
            width: 150px;
            padding-top: 20px;
        }
        #contato{
            text-align: left;
        }
        #ftnavbar{
            text-align: left;
            font-size: 1.3rem;
            padding-bottom: 0px;
        }
       
        @media (orientation: portrait) and (max-width: 1025px) and (max-height: 1367px) {
            #menor{
                font-size: 1.2rem;
            }
        }
    }
</style>