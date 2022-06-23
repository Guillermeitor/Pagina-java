 function calculoNota(){
            /* entrada de datos*/
            let Wordpress=Number(document.getElementById("Wordpress").value)

            let js=Number(document.getElementById("js").value)

            /* Calculo de notas*/ 
            let notaFinal=(75*Wordpress+25*js)/100;


            /* Salida de resultado */


            document.getElementById("resultado").innerHTML="La nota final es:"+notaFinal;

            if (notaFinal>=5){}
            

        }
