function cadastrar(){
    var contatos = [];
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    if (sessionStorage.getItem("vetor_contatos")){
        contatos = JSON.parse(sessionStorage.getItem("vetor_contatos"));
    }

    var pessoa = {};
    pessoa = {
        Nome: nome,
        Telefone: telefone
    };

    contatos.push(pessoa);
    sessionStorage.setItem("vetor_contatos", JSON.stringify(contatos));

    return true;
}

function listar(){
    var dados = document.getElementById("colunas");
    var registros = document.getElementsByTagName("tbody")[0];
    var contatos = JSON.parse(sessionStorage.getItem("vetor_contatos"));
    for (var i = 0; i < contatos.length; i++){
        var novaLinha = document.createElement("tr"); // Criar uma tag tr na tabela que vai ser apresentado a lista de contatos do Vetor
        registros.appendChild(novaLinha); // insere a tag tr criada
        novaLinha.innerHTML = dados.innerHTML; // insere as colunas do id="colunas"

        for (var indice in novaLinha.childNodes){   // Retorna os Nodes filhos da minha novaLinha
            var celula = novaLinha.childNodes[indice]; // verificar a tag
            if(celula.nodeName == "TD"){
            switch(celula.dataset.column){
                case "Nome":
                    celula.innerHTML = contatos[i]["Nome"];
                    break;
                case "Telefone":
                celula.innerHTML = contatos[i]["Telefone"];
                    break;
            }}
        }


    }

}