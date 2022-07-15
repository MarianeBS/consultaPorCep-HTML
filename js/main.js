//alert("funcionou");
// # -> seta (encontra) por ID
// . -> seta (encontra) pela classe
// JQuery, além de ser uma biblioteca que facilita e ajuda interações AJAX, também facilita uma série de interações e efeitos que em JavaScript seriam mais demoradas (mais escrita)
function consultaCep(){
    $("barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            //Linha abaixo feita por JQuery:
            //$("#logradouro").html(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //alert(response.logradouro);
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show();
            $("barra-progresso").hide();
        }
    })

}

$(function(){
    $(".cep").hide(); 
    $(".barra-progresso").hide();   
});