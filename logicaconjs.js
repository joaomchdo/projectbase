let bruna = 6.5;
let carla = 8;
let soma = bruna+carla
console.log(" A soma é: " + soma)
console.log("-------Proxima questão-----------")
let thiago = 7;
let lara = 5;
let resultado = thiago*lara
console.log(" A mutiplicação de thiago e a de lara é igual á:" + resultado )
console.log("-------Próxima questão------------")
let otavio = 4;
let leticia = 5;
let valor = otavio/leticia
console.log(" A divisão de otavio e de leticia é: " + valor )
console.log("-------Proxima questão--------")
let harry = 8 
let hermione = 7
let final = harry-hermione
console.log("A subtração de harry e de hermione é: " + final)
console.log("-------------Questão N°2-------------------------")
let nome_do_usuario="Joao"
let salario = 4300
let meses_trab = 9 
let decimo = salario/12*meses_trab
 console.log(" nome_do_usuario: " + " Seu salario é: " + decimo +  "PARABÉNS!!")
let salario = Number(prompt("Digite seu salrio aqui"))
 let_mesestrab = Number(prompt("11"))
 let_mensal = salario/12*mesestrab
 console.log("Seu décimo 13° é:"+ variavel)
 
 let salario =  Number(prompt("Digite seu salario AQUI"))
if (salario < 500){
    salario = (15/100*salario)+salario
 alert ("Seu novo salario é: "+salario)  
} else if (salario >=500 && salario<=1000){
    salario = (10/100*salario)+salario
    alert ("Seu novo salario é: "+salario)
} else{
    salario = (5/10*salario)+salario
    alert ("Seu novo salario é: "+salario)
}

let idade = Number(prompt("Digite sua idade"))
if (idade <12 ){
    alert ("Sua categoria é: INFATIL, VÁ ASSISTIR PEPPA PIG")
} else if(idade >=12 && idade <=17){
    alert ("Sua categoria é:TEEN")
}else if (idade >=18 && idade <=60)
alert("Sua categoria é: ADULTO")
else( idade >=60)
alert("Sua categoria é:SÊNIOR")
  
let pontuacao = Number(prompt("Digite aqui sua pontuacao"))
if (pontuacao <=1000) {
    alert("Seu nivel é novato")
}else if(pontuacao >=1001 && 5000){
    alert("seu nivel é: aprendiz")
}else if(pontuacao >=5001 && 1000)
    alert("Seu nivel é: expert")s
  
let valordobasico = 25;
let valordopremiun = 40;
let valordoultra = 60;
let telastresaquatro = 5;
let maisque4 = 7.50;

let tipodeassinatura = prompt("Digite o nome da assinatura que você deseja: ")
let quantitelas = prompt("Digite quantas telas você terá: ")
    if (tipodeassinatura == "básico")
    if (quantitelas>=3 && quantitelas<=4){
        alert("Seu plano é R$" +(valordobasico+telastresaquatro))
    } else if (quantitelas>=4){
        alert("O seu plano será de R$"+ (valordobasico+maisque4))
    } 
    
    else if (tipodeassinatura == "Premium")
    if (quantitelas>=3 && quantitelas<=4){
        alert("Seu plano é R$" +(valordopremuim+telastresaquatro))
    } else if (quantitelas>=4){
        alert("O seu plano será de R$"+ (valordopremuim+maisque4))
    } 
let daysOFWeek = ["Taylor" ,"Robert", 80, 40, 10 ]; 
console.log(daysOFWeek[1]) 
console.log(daysOFWeek.length)
let listdiver = ["Taylor",1,2.5,"Escola", false]
console.log(listdiver[3])
let nomedoaluno = prompt("Digite o nome do novo aluno ou aluna:") 
daysOFWeek.unshift(nomedoaluno)
daysOFWeek.unshift("Miguel" , "Alycia" ,"Petter", "Nayline ")
daysOFWeek.push("João")
daysOFWeek.pop()
daysOFWeek.shift() 
daysOFWeek.sort() 
daysOFWeek.reverse
alert ("Atualmente os alunos desta instituicao são : " + daysOFWeek)
alert(daysOFWeek.indexOf("Arthur"))
 function saudar(){
    alert ("Desejo uma boa navegação em nosso site!!")
 }
 saudar()

function dobrarNumero(numero){
    return numero * 2
}
let resultado = dobrarNumero(888)
alert("O calculo do dobro do numero"+resultado)

function Cumprimentar(nome){
    alert("Ola,"+nome+" como esta seu dia?")
}
Cumprimentar("Raquel")
let nomedoaluno = prompt("Digite o seu nome jovem:")
Cumprimentar(nomedoaluno)

function contagemRegressiva(numero){
    console.log(numero)
    if(numero ===0){
        console.log("chegou");
        return ;
    }
    contagemRegressiva(numero-1)
}
contagemRegressiva(10)

