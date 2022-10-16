const salida = document.getElementById('generarContrasena')
document.getElementById('copiar').addEventListener('click', copiar)

function generarContrasena(event) {
    const contador = 10,
        caracteres =
            'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ,;:!¡_-¿?#$%&/=*[]@{}'

    var gdc = ''
    for (var i = 0, n = caracteres.length; i < contador; ++i) {
        gdc += caracteres.charAt(Math.floor(Math.random() * n))
    }

    salida.innerHTML = gdc
}

function copiar() {
    const copyText = salida.innerHTML
    navigator.clipboard.writeText(copyText).then(() => {
        alert('Clave copiada : ' + copyText)
    })
};