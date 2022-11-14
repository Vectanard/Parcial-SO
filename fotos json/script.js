//usar const y/o let depende el caso, no usar var
//no es necesario usar ";" al final

const API_URL = "http://jsonplaceholder.typicode.com"
const xhr = new XMLHttpRequest()



function onRequestHandler(){
    if (this.readyState === 4 && this.status == 200) {

        const fotos = JSON.parse(this.response)
        console.log(fotos);

        let div = document.getElementById('container')
        div.innerHTML=" "

        //Coloca todo en el DIV
        const HTMLResponse = document.querySelector("#container")
               
        for (let i = 0; i <= 9; i++){
            let divInside = document.createElement('div')
            divInside.innerHTML = "URL: <b>" + fotos[i].url + "<br><a href=" + fotos[i].url + "><img src=" + fotos[i].thumbnailUrl + "></a><br><br>";
            div.appendChild(divInside)
        }  
    }
}

xhr.addEventListener("load", onRequestHandler)
xhr.open ("GET",`${API_URL}/photos`)
xhr.send()