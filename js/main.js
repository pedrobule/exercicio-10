$(document).ready(function () {
    // Inicialização do slick-carousel
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    // Aplicação de máscaras nos campos
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 01234-5678'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    });

    // Configuração da validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        submitHandler: function(form) {
            alert('Sua requisição foi enviada para análise, parabéns pela aquisição!');
            form.reset();
        },
        invalidHandler: function (form, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert('Por favor, preencha os campos corretamente para prosseguir com a compra!');
            }
        }
    });
});
