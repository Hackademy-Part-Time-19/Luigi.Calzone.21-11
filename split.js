let url =  "https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999"
let urlDiviso = url.split("?")
console.log(urlDiviso)

let parametri = urlDiviso[1].split("&")
console.log(parametri)


