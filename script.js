const tokat = document.getElementById('tokat')
const tokatSayisi = document.getElementById('tokatSayi')
n=0
function tokatla(){
    let sayi = parseInt(tokatSayisi.textContent)
    let yeniSayi = sayi + 1
    tokat.play() 
    tokatSayisi.textContent = yeniSayi
}