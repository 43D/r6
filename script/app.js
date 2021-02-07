var modo = "",
    modalC = "";

$(document).ready(async function() {
    $("#homeStart").click(function() {
        $("#sorte").removeClass("d-none");
        $(location).attr('href', "#sorte");
        $("#home").addClass("d-none");
    });

    $("#sorteH").click(function() {
        $("#home").removeClass("d-none");
        $(location).attr('href', "#home");
        $("#sorte").addClass("d-none");
    });

    $("#b1").change(function() {
        selectConfig();
    });

    $("#random").click(function() {
        setConfig();
        $("#inf").removeClass("d-none");
        $(location).attr('href', "#inf");
        $("#sorte").addClass("d-none");
    });

    $("#infSorte").click(function() {
        $("#sorte").removeClass("d-none");
        $(location).attr('href', "#sorte");
        $("#inf").addClass("d-none");
    });


    $("#sorteando").click(function() {
        setFinal();
        $("#inf").addClass("d-none");
    });

    $("#final-inf").click(function() {
        $("#inf").removeClass("d-none");
        $(location).attr('href', "#inf");
        $("#resultado").addClass("d-none");
    });
    $("#final-sorteando").click(function() {
        setFinal();
    });
    $("#final-sorte").click(function() {
        $("#sorte").removeClass("d-none");
        $(location).attr('href', "#sorte");
        $("#resultado").addClass("d-none");
    });
    $("#closeModal").click(function() {
        $(modalC).removeClass("d-none");
        $(location).attr('href', modalC);
    });
});

function selectConfig() {
    var j = $("#b1 option:selected").val();

    switch (j) {
        case "mvp":
            $("#b3").val(2);
            $("#b3").attr("disabled", true);
            $("#b3").removeClass("d-none");
            $("#b4").addClass("d-none");
            $("#b1_1").removeClass("d-none");
            $("#b1_2").addClass("d-none");
            $("#b1_3").addClass("d-none");

            break;
        case "casual":
            $("#b3").attr("disabled", false);
            $("#b3").removeClass("d-none");
            $("#b4").addClass("d-none");
            $("#b1_1").addClass("d-none");
            $("#b1_2").removeClass("d-none");
            $("#b1_3").addClass("d-none");
            break;
        case "mata":
            $("#b3").addClass("d-none");
            $("#b4").removeClass("d-none");
            $("#b1_1").addClass("d-none");
            $("#b1_2").addClass("d-none");
            $("#b1_3").removeClass("d-none");
            break;
        default:
            console.log("Algo deu de errado kkkkkkk");
            break;
    }
}

function setConfig() {
    let i = 0;
    let j = $("#b1 option:selected").val();

    if (j == "mata") {
        i = parseInt($("#b4 option:selected").val());
    } else {
        i = parseInt($("#b3").val());
    }

    modo = j;

    switch (j) {
        case "mvp":
            $("#inf-mvp").removeClass("d-none");
            $("#inf-casual").addClass("d-none");
            $("#inf-mata").addClass("d-none");
            clearMVP2();
            break;
        case "casual":
            $("#inf-mvp").addClass("d-none");
            $("#inf-casual").removeClass("d-none");
            $("#inf-mata").addClass("d-none");
            break;
        case "mata":
            $("#inf-mvp").addClass("d-none");
            $("#inf-casual").addClass("d-none");
            $("#inf-mata").removeClass("d-none");
            break;
        default:
            console.log("Algo deu de errado kkkkkkk");
            break;
    }
}

function setFinal() {
    switch (modo) {
        case "mvp":
            $("#resultado").removeClass("d-none");
            mvp();
            $(location).attr('href', "#resultado");
            break;

        case "casual":
            $("#resultado").removeClass("d-none");
            $(location).attr('href', "#resultado");
            break;

        case "mata":
            $("#resultado").removeClass("d-none");
            $(location).attr('href', "#resultado");
            break;
        default:
            avisa("Configure seu sorteio antes!", "#sorte");
            break;
    }

}

function mvp() {
    var status = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var final = [];

    while (true) {
        var numero = (Math.random() * (1250 - 1)) / 125 + 1;
        var numero = numero.toString().split(".")[0];

        if (status[parseInt(numero) - 1] == 0) {
            status[parseInt(numero) - 1] = 1;
            final.push("#mvp" + numero);
        }

        var sum = status.reduce((a, b) => a + b, 0);
        if (sum == 10)
            break;
    }

    clearMVP();
    pushMVP(final);
    showMVP();
}

function clearMVP() {
    $("#final-mvp1").html("");
    $("#final-mvp2").html("");
    $("#final-mvp3").html("");
    $("#final-mvp4").html("");
    $("#final-mvp5").html("");
    $("#final-mvp6").html("");
    $("#final-mvp7").html("");
    $("#final-mvp8").html("");
    $("#final-mvp9").html("");
    $("#final-mvp10").html("");
}

function clearMVP2() {
    $("#mvp1").val("");
    $("#mvp2").val("");
    $("#mvp3").val("");
    $("#mvp4").val("");
    $("#mvp5").val("");
    $("#mvp6").val("");
    $("#mvp7").val("");
    $("#mvp8").val("");
    $("#mvp9").val("");
    $("#mvp10").val("");
}

function pushMVP(final) {
    let j = 1;

    for (var i in final) {
        if ($(final[i]).val() != "") {
            $("#final-mvp" + (j).toString()).html($(final[i]).val());
            j++;
        }
    }
}

function showMVP() {
    $(".final-mvp").removeClass("d-none");

    $(".final-mata").addClass("d-none");
    $(".final-casual").addClass("d-none");

}

function avisa(texto, href) {
    $("#avisoFinal").html(texto);
    $("#aviso").modal('show');
    modalC = href;
}