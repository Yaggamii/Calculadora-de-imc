function calculate(){
    const height = document.getElementById("number_height").value;
    const weight = document.getElementById("number_weight").value;
    const imc = (weight / (height * height)).toFixed(2);
    const result = imc;

    if (result){
        document.querySelector(".screen").innerHTML = `${result}`;
    }else{
        document.querySelector(".screen").innerHTML = " "
    }

    if (imc < 18.5){
        document.querySelector(".screen").innerHTML = `${result} -> Abaixo do peso`
    }else if (imc >= 18.5 && imc < 25){
        document.querySelector(".screen").innerHTML += `${result} -> Peso normal`
    }else if (imc >= 25.0 && imc < 30.0){
        document.querySelector(".screen").innerHTML += `${result} -> Acima do peso`
    }else if(imc >= 30.0 && imc < 35.9){
        document.querySelector(".screen").innerHTML += `${result} -> Obesidade grau I`
    }else if(imc >= 35.0 && imc < 41){
        document.querySelector(".screen").innerHTML += `${result} -> Obesidade grau II`
    }else {
        document.querySelector(".screen").innerHTML += `${result} -> Obesidade grau III`
    }
}

function clean(){
    document.querySelector(".screen").innerHTML = " "
    document.getElementById("number_height").value = " "
    document.getElementById("number_weight").value = " "
}