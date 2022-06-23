function triangulos(){
           
            let l1=Number(document.getElementById("lado1").value);
            let l2=Number(document.getElementById("lado2").value);
            let l3=Number(document.getElementById("lado3").value);
            let tipoTriangulo;

            if (l1==l2 && l2==l3){
                tipoTriangulo="equilátero";
            } else if (l1==l2 || l2==l3 || l1==l3 ){
                tipoTriangulo="isosceles";
            } else {
                tipoTriangulo="escaleno";
            }

            document.getElementById("solucion").innerHTML="El triangulo es : "+tipoTriangulo; 
        }
