var display = document.getElementById('display')

var calculadora = {
  init: function(){
    var self = this
    var cero = document.getElementById('0')
    var uno = document.getElementById('1')
    var dos = document.getElementById('2')
    var tres = document.getElementById('3')
    var cuatro = document.getElementById('4')
    var cinco = document.getElementById('5')
    var seis = document.getElementById('6')
    var siete = document.getElementById('7')
    var ocho = document.getElementById('8')
    var nueve = document.getElementById('9')
    var punto = document.getElementById('punto')
    var mas = document.getElementById('mas')
    var menos = document.getElementById('menos')
    var por = document.getElementById('por')
    var entre = document.getElementById('dividido')
    var raiz = document.getElementById('raiz')
    var igual = document.getElementById('igual')
    var masmenos = document.getElementById('sign')
    var on = document.getElementById('on')


    cero.addEventListener("mousedown", function(){
      cero.setAttribute("style","transform:scale(0.95,0.95)")
    });
    cero.addEventListener("mouseout", function(){
      cero.setAttribute("style","transform:scale(1,1)")
    })

    uno.addEventListener('mousedown', function() {
      uno.setAttribute("style","transform:scale(0.9,0.9)")
    });
    uno.addEventListener('mouseup', function() {
      uno.setAttribute("style","transform:scale(1,1)")
    });

    dos.addEventListener('mousedown', function() {
      dos.setAttribute("style","transform:scale(0.9,0.9)")
    });
    dos.addEventListener('mouseup', function() {
      dos.setAttribute("style","transform:scale(1,1)")
    });

    tres.addEventListener('mousedown', function() {
      tres.setAttribute("style","transform:scale(0.9,0.9)")
    });
    tres.addEventListener('mouseup', function() {
      tres.setAttribute("style","transform:scale(1,1)")
    });

    cuatro.addEventListener('mousedown', function() {
      cuatro.setAttribute("style","transform:scale(0.9,0.9)")
    });
    cuatro.addEventListener('mouseup', function() {
      cuatro.setAttribute("style","transform:scale(1,1)")
    });

    cinco.addEventListener('mousedown', function() {
      cinco.setAttribute("style","transform:scale(0.9,0.9)")
    });
    cinco.addEventListener('mouseup', function() {
      cinco.setAttribute("style","transform:scale(1,1)")
    });

    seis.addEventListener('mousedown', function() {
      seis.setAttribute("style","transform:scale(0.9,0.9)")
    });
    seis.addEventListener('mouseup', function() {
      seis.setAttribute("style","transform:scale(1,1)")
    });

    siete.addEventListener('mousedown', function() {
      siete.setAttribute("style","transform:scale(0.9,0.9)")
    });
    siete.addEventListener('mouseup', function() {
      siete.setAttribute("style","transform:scale(1,1)")
    });

    ocho.addEventListener('mousedown', function() {
      ocho.setAttribute("style","transform:scale(0.9,0.9)")
    });
    ocho.addEventListener('mouseup', function() {
      ocho.setAttribute("style","transform:scale(1,1)")
    });

    nueve.addEventListener('mousedown', function() {
      nueve.setAttribute("style","transform:scale(0.9,0.9)")
    });
    nueve.addEventListener('mouseup', function() {
      nueve.setAttribute("style","transform:scale(1,1)")
    })

    punto.addEventListener('mousedown', function() {
      punto.setAttribute("style","transform:scale(0.9,0.9)")
    });
    punto.addEventListener('mouseup', function() {
      punto.setAttribute("style","transform:scale(1,1)")
    });

    mas.addEventListener('mousedown', function() {
      mas.setAttribute("style","transform:scale(0.9,0.9)")
    });
    mas.addEventListener('mouseup', function() {
      mas.setAttribute("style","transform:scale(1,1)")
    });

    menos.addEventListener('mousedown', function() {
      menos.setAttribute("style","transform:scale(0.9,0.9)")
    });
    menos.addEventListener('mouseup', function() {
      menos.setAttribute("style","transform:scale(1,1)")
    })

    por.addEventListener('mousedown', function() {
      por.setAttribute("style","transform:scale(0.9,0.9)")
    });
    por.addEventListener('mouseup', function() {
      por.setAttribute("style","transform:scale(1,1)")
    });

    entre.addEventListener('mousedown', function() {
      entre.setAttribute("style","transform:scale(0.9,0.9)")
    });
    entre.addEventListener('mouseup', function() {
      entre.setAttribute("style","transform:scale(1,1)")
    });

    raiz.addEventListener('mousedown', function() {
      raiz.setAttribute("style","transform:scale(0.9,0.9)")
    });
    raiz.addEventListener('mouseup', function() {
      raiz.setAttribute("style","transform:scale(1,1)")
    })

    igual.addEventListener('mousedown', function() {
      igual.setAttribute("style","transform:scale(0.9,0.9)")
    });
    igual.addEventListener('mouseup', function() {
      igual.setAttribute("style","transform:scale(1,1)")
    });

    masmenos.addEventListener('mousedown', function() {
      masmenos.setAttribute("style","transform:scale(0.9,0.9)")
    });
    masmenos.addEventListener('mouseup', function() {
      masmenos.setAttribute("style","transform:scale(1,1)")
    })

    on.addEventListener('mousedown', function() {
      on.setAttribute("style","transform:scale(0.9,0.9)")
    });
    on.addEventListener('mouseup', function() {
      on.setAttribute("style","transform:scale(1,1)")
    });
  }
}

calculadora.init();
