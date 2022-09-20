nombre = prompt("ingrese su nombre :")
nombre1 = nombre.toUpperCase()
numero = Math.random() * 10;
numero1 = Math.round(numero)
if (numero1 <= 2) {
    document.write(nombre1, " NO TE AMA")
} else if (numero1 <= 5) {
    document.write(nombre1, " SIENTE ALGO POR TI")
} else if (numero1 <= 7) {
    document.write(nombre1, " TE AMA")
} else if (numero1 <= 10) {
    document.write(nombre1, " PIENSA DEMASIADO EN TI Y ES POSIBLE QUE ESTE ENAMORADO  ")
}