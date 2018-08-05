const frase = $(".frase").text();
const numPalavras = frase.split(" ").length;
const tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

const campo = $(".campo-digitacao");
campo.on("input", function(){
    const conteudoDigitado = campo.val();

    const qtdPalavras = conteudoDigitado.split(/\S+/).length - 1;
    $(".contador-palavras").text(qtdPalavras);

    const conteudoSemEspaco = conteudoDigitado.replace(/\s+/g,'');

    console.log(conteudoSemEspaco);

    const qtdCaracteres = conteudoSemEspaco.length;
    $(".contador-caracteres").text(qtdCaracteres);
});