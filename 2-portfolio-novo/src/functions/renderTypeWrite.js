export default function renderTypeWrite(id, text) {
    const element = document.getElementById(id);
    const textoArray = text.split('');
    textoArray.forEach(function (letra, i) {
        setTimeout(function () {
            element.innerHTML += letra;
        }, 75 * i);
    });
}
