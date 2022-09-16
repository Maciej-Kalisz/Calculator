document.addEventListener("keypress", function (evt) {
    // Operator keys
    if (evt.key == "c") { $('#display').text("0"); }
    
    if (evt.key == "=") {
        if (($('#display').text() !== "0") && ($('#display').text() !== "Calculator!")) {
            var evalResult = eval($('#display').text()
                                               .replace("×", "*")
                                               .replace("÷", "/"));

            $('#display').text(+(parseFloat(evalResult).toFixed(9)).toString()); 
        }
    }

    if (evt.key == "+") {
        if (($('#display').text() !== "0") && ($('#display').text() !== "Calculator!")) {
            var oldText = $('#display').text().toString().trim();
            var newText = oldText + "+";
    
            $('#display').text(newText.split(" ").join(""));
        }
    }

    if (evt.key == "-") {
        if (($('#display').text() !== "0") && ($('#display').text() !== "Calculator!")) {
            var oldText = $('#display').text().toString().trim();
            var newText = oldText + "-";
    
            $('#display').text(newText.split(" ").join(""));
        }
    }

    if (evt.key == "(") {
        if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
            $('#display').text("(");
        } else {
            var oldText = $('#display').text().toString().trim();
            var newText = oldText + "(";
    
            $('#display').text(newText.split(" ").join(""));
        }
    }

    if (evt.key == ")") {
        if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
            $('#display').text(")");
        } else {
            var oldText = $('#display').text().toString().trim();
            var newText = oldText + ")";
    
            $('#display').text(newText.split(" ").join(""));
        }
    }

    if (evt.key == "/") {
        if (($('#display').text() !== "0") && ($('#display').text() !== "Calculator!")) {
            var oldText = $('#display').text().toString().trim();
            var newText = oldText + "÷";
    
            $('#display').text(newText.split(" ").join(""));
        }
    }

    if (evt.key == "*") {
        if (($('#display').text() !== "0") && ($('#display').text() !== "Calculator!")) {
            var oldText = $('#display').text().toString().trim();
            var newText = oldText + "×";
    
            $('#display').text(newText.split(" ").join(""));
        }
    }

    if (evt.key == ".") {
        if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
            $('#display').text("0.");
        } else {
            var oldText = $('#display').text().toString().trim();
            var newText = oldText + ".";
    
            $('#display').text(newText.split(" ").join(""));
        }
    }

    // Number keys
    for (i = 0; i <= 9; i++) {
        if (evt.key == i) { 
            if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
                $('#display').text(i.toString());

                $('#clear').text("C");
            } else {
                var oldText = $('#display').text().toString().trim();
                var newText = oldText + i.toString();
        
                $('#display').text(newText.split(" ").join(""));
            }
        }
    }
});

// Operator keys
$('#clear').click(function (e) { 
    e.preventDefault();
    
    $('#display').text("0");
});

$('#openBracket').click(function (e) { 
    e.preventDefault();
    
    if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
        $('#display').text("(");
        $('#clear').text("C");
    } else {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + "(";

        $('#display').text(newText.split(" ").join(""));
    }
});

$('#closeBracket').click(function (e) { 
    e.preventDefault();
    
    if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
        $('#display').text(")");
        $('#clear').text("C");
    } else {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + ")";

        $('#display').text(newText.split(" ").join(""));
    }
});

$('#divide').click(function (e) { 
    e.preventDefault();
    
    if (($('#display').text() !== "0") && ($('#display').text() !== "Calculator!")) {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + "÷";

        $('#display').text(newText.split(" ").join(""));
    }
});

$('#mult').click(function (e) { 
    e.preventDefault();

    if (($('#display').text() !== "0") && ($('#display').text() !== "Calculator!")) {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + "×";

        $('#display').text(newText.split(" ").join(""));
    }
});

$('#sub').click(function (e) { 
    e.preventDefault();
    
    if (($('#display').text() !== "0") && ($('#display').text() !== "Calculator!")) {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + "-";

        $('#display').text(newText.split(" ").join(""));
    }
});

$('#add').click(function (e) { 
    e.preventDefault();
    
    if (($('#display').text() !== "0") && ($('#display').text() !== "Calculator!")) {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + "+";

        $('#display').text(newText.split(" ").join(""));
    }
});

$('#decimal').click(function (e) { 
    e.preventDefault();
    
    if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
        $('#display').text("0.");
    } else {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + ".";

        $('#display').text(newText.split(" ").join(""));
    }
});

$("#equals").click(function (e) { 
    e.preventDefault();
    
    if (($('#display').text() !== "0") && ($('#display').text() !== "Calculator!")) {
        var evalResult = eval($('#display').text()
                                       .replace("×", "*")
                                       .replace("÷", "/"));

        $('#display').text(+(parseFloat(evalResult).toFixed(9)).toString()); 
    }
});

// Number keys
$("#0").click(function (e) { 
    if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
        $('#display').text("0");

        $('#clear').text("C");
    } else {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + "0";

        $('#display').text(newText.split(" ").join(""));
    }
});

$("#1").click(function (e) { 
    if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
        $('#display').text("1");

        $('#clear').text("C");
    } else {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + "1";

        $('#display').text(newText.split(" ").join(""));
    }
});

$("#2").click(function (e) { 
    if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
        $('#display').text("2");

        $('#clear').text("C");
    } else {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + "2";

        $('#display').text(newText.split(" ").join(""));
    }
});

$("#3").click(function (e) { 
    if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
        $('#display').text("3");

        $('#clear').text("C");
    } else {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + "3";

        $('#display').text(newText.split(" ").join(""));
    }
});

$("#4").click(function (e) { 
    if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
        $('#display').text("4");

        $('#clear').text("C");
    } else {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + "4";

        $('#display').text(newText.split(" ").join(""));
    }
});

$("#5").click(function (e) { 
    if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
        $('#display').text("5");

        $('#clear').text("C");
    } else {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + "5";

        $('#display').text(newText.split(" ").join(""));
    }
});

$("#6").click(function (e) { 
    if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
        $('#display').text("6");

        $('#clear').text("C");
    } else {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + "6";

        $('#display').text(newText.split(" ").join(""));
    }
});

$("#7").click(function (e) { 
    if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
        $('#display').text("7");

        $('#clear').text("C");
    } else {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + "7";

        $('#display').text(newText.split(" ").join(""));
    }
});

$("#8").click(function (e) { 
    if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
        $('#display').text("8");

        $('#clear').text("C");
    } else {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + "8";

        $('#display').text(newText.split(" ").join(""));
    }
});

$("#9").click(function (e) { 
    if ($('#display').text() == "0" || $('#display').text() == "Calculator!") {
        $('#display').text("9");

        $('#clear').text("C");
    } else {
        var oldText = $('#display').text().toString().trim();
        var newText = oldText + "9";

        $('#display').text(newText.split(" ").join(""));
    }
});