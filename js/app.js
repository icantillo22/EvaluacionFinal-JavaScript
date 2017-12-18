var display = document.getElementById('display')
var operandos = {
  n1: '',
  n2: '',
  con: 0,
  resultado: ''
}
var Calculadora = {
  init: function() {
    var self = this
    var uno = document.getElementById('1')
    var dos = document.getElementById('2')
    var tres = document.getElementById('3')
    var cuatro = document.getElementById('4')
    var cinco = document.getElementById('5')
    var seis = document.getElementById('6')
    var siete = document.getElementById('7')
    var ocho = document.getElementById('8')
    var nueve = document.getElementById('9')
    var cero = document.getElementById('0')
    var on = document.getElementById('on')
    var sign = document.getElementById('sign')
    var mas = document.getElementById('mas')
    var menos = document.getElementById('menos')
    var por = document.getElementById('por')
    var dividido = document.getElementById('dividido')
    var igual = document.getElementById('igual')
    var punto = document.getElementById('punto')

    cero.addEventListener('mousedown', function() {
      cero.setAttribute("style","transform:scale(0.9,0.9)")
    })
    cero.addEventListener('mouseup', function() {
      cero.setAttribute("style","transform:scale(1,1)")
    })
    uno.addEventListener('mousedown', function() {
      uno.setAttribute("style","transform:scale(0.9,0.9)")
    })
    uno.addEventListener('mouseup', function() {
      uno.setAttribute("style","transform:scale(1,1)")
    })
    dos.addEventListener('mousedown', function() {
      dos.setAttribute("style","transform:scale(0.9,0.9)")
    })
    dos.addEventListener('mouseup', function() {
      dos.setAttribute("style","transform:scale(1,1)")
    })
    tres.addEventListener('mousedown', function() {
      tres.setAttribute("style","transform:scale(0.9,0.9)")
    })
    tres.addEventListener('mouseup', function() {
      tres.setAttribute("style","transform:scale(1,1)")
    })
    cuatro.addEventListener('mousedown', function() {
      cuatro.setAttribute("style","transform:scale(0.9,0.9)")
    })
    cuatro.addEventListener('mouseup', function() {
      cuatro.setAttribute("style","transform:scale(1,1)")
    })
    cinco.addEventListener('mousedown', function() {
      cinco.setAttribute("style","transform:scale(0.9,0.9)")
    })
    cinco.addEventListener('mouseup', function() {
      cinco.setAttribute("style","transform:scale(1,1)")
    })
    seis.addEventListener('mousedown', function() {
      seis.setAttribute("style","transform:scale(0.9,0.9)")
    })
    seis.addEventListener('mouseup', function() {
      seis.setAttribute("style","transform:scale(1,1)")
    })
    siete.addEventListener('mousedown', function() {
      siete.setAttribute("style","transform:scale(0.9,0.9)")
    })
    siete.addEventListener('mouseup', function() {
      siete.setAttribute("style","transform:scale(1,1)")
    })
    ocho.addEventListener('mousedown', function() {
      ocho.setAttribute("style","transform:scale(0.9,0.9)")
    })
    ocho.addEventListener('mouseup', function() {
      ocho.setAttribute("style","transform:scale(1,1)")
    })
    nueve.addEventListener('mousedown', function() {
      nueve.setAttribute("style","transform:scale(0.9,0.9)")
    })
    nueve.addEventListener('mouseup', function() {
      nueve.setAttribute("style","transform:scale(1,1)")
    })
    punto.addEventListener('mousedown', function() {
      punto.setAttribute("style","transform:scale(0.9,0.9)")
    })
    punto.addEventListener('mouseup', function() {
      punto.setAttribute("style","transform:scale(1,1)")
    })
    mas.addEventListener('mousedown', function() {
      mas.setAttribute("style","transform:scale(0.9,0.9)")
    })
    mas.addEventListener('mouseup', function() {
      mas.setAttribute("style","transform:scale(1,1)")
    })
    menos.addEventListener('mousedown', function() {
      menos.setAttribute("style","transform:scale(0.9,0.9)")
    })
    menos.addEventListener('mouseup', function() {
      menos.setAttribute("style","transform:scale(1,1)")
    })
    por.addEventListener('mousedown', function() {
      por.setAttribute("style","transform:scale(0.9,0.9)")
    })
    por.addEventListener('mouseup', function() {
      por.setAttribute("style","transform:scale(1,1)")
    })
    dividido.addEventListener('mousedown', function() {
      dividido.setAttribute("style","transform:scale(0.9,0.9)")
    })
    dividido.addEventListener('mouseup', function() {
      dividido.setAttribute("style","transform:scale(1,1)")
    })
    igual.addEventListener('mousedown', function() {
      igual.setAttribute("style","transform:scale(0.9,0.9)")
    })
    igual.addEventListener('mouseup', function() {
      igual.setAttribute("style","transform:scale(1,1)")
    })
    sign.addEventListener('mousedown', function() {
      sign.setAttribute("style","transform:scale(0.9,0.9)")
    })
    sign.addEventListener('mouseup', function() {
      sign.setAttribute("style","transform:scale(1,1)")
    })
    on.addEventListener('mousedown', function() {
      on.setAttribute("style","transform:scale(0.9,0.9)")
    })
    on.addEventListener('mouseup', function() {
      on.setAttribute("style","transform:scale(1,1)")
    })
    uno.addEventListener('click', function() {
      self.mostrar("1")
    })
    dos.addEventListener('click', function() {
      self.mostrar("2")
    })
    tres.addEventListener('click', function() {
      self.mostrar("3")
    })
    cuatro.addEventListener('click', function() {
      self.mostrar("4")
    })
    cinco.addEventListener('click', function() {
      self.mostrar("5")
    })
    seis.addEventListener('click', function() {
      self.mostrar("6")
    })
    siete.addEventListener('click', function() {
      self.mostrar("7")
    })
    ocho.addEventListener('click', function() {
      self.mostrar("8")
    })
    nueve.addEventListener('click', function() {
      self.mostrar("9")
    })
    cero.addEventListener('click', function() {
      self.mostrar("0")
    })
    punto.addEventListener('click', function() {
      self.addpunto()
    })
    on.addEventListener('click', function() {
      self.borrar()
      n1 = 0
      n2 = 0
      resultado = 0
      con = 0
    })
    sign.addEventListener('click', function() {
      maso = display.innerHTML
      maso = parseInt(maso)
      display.innerHTML *= -1
    })
    mas.addEventListener('click', function() {
      self.sumar()
    })
    menos.addEventListener('click', function() {
      self.restar()
    })
    por.addEventListener('click', function() {
      self.multiplicar()
    })
    dividido.addEventListener('click', function() {
      self.dividir()
    })
    igual.addEventListener('click', function() {
      self.operacion()
      con += 1
    })
  },
  mostrar: function(num) {
    if (display.innerHTML.substring(0) == "0") {
      display.innerHTML = display.innerHTML.substring(1)
    }
    display.innerHTML += num
    display.innerHTML = display.innerHTML.substring(0, 8)
  },
  borrar: function() {
    display.innerHTML = 0
  },
  addpunto: function() {
    if (display.length == 0){
      display.innerHTML = "0.";
    } else if (display.innerHTML.indexOf(".") == -1){
      display.innerHTML += ".";
    }
  },

}

Calculadora.init()
