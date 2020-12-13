
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

fetch('http://localhost:3000')
    .then(data => data.json())
    .then(res => {
        for (pessoa of res) {
            L.marker([pessoa.position.latitude, pessoa.position.longitude]).addTo
                (mymap).bindPopup(pessoa.nome);
        }

    })


    
    
    
    buscarNome.addEventListener('click', function (event) {
        event.preventDefault()
        var nome1 = document.querySelector('#nome1').value;
        nome(nome1)
    })
    
    
    function nome(nome1) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pinnar)
            return true
        } else {
            x.innerHTML = "Falaha ao localizar por esse navegador"
            return false
        }
    }
    
    
    function pinnar(posicao) {
        latit = posicao.coords.latitude
        longit = posicao.coords.longitude
        L.marker([latit, longit]).addTo(mymap).bindPopup(nome1.value)
        mymap.setView([latit, longit], 5);
    }