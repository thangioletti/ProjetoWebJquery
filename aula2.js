$(() => {
    
    $("#btn-add").click(() => {
        const values = {
            imagem: "produto2.png",
            nome: $("#nome")[0].value,
            preco: $("#preco")[0].value,
            parcelas: 10
        }

        if (!values.nome) {
            alert("Nome não informado!");
            $("#nome").addClass("invalid");
            return;
        }
        $("#nome").removeClass("invalid");

        if (!values.preco) {
            alert("Preco não informado");
            $("#preco").addClass("invalid");
            return;
        }
        $("#preco").removeClass("invalid");
        
        values.valorParcela = values.preco/values.parcelas;

        console.log(values);
        createElementProduto(values);

    });
})