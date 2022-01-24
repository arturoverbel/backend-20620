let products = []
const socket = io.connect()
loadData()

function loadData() {
    fetch('/api/productos')
        .then( response => response.json())
        .then(data =>{
            products = data;
            render()
        })
}

function render(){
    $('.productContainer').html("")
    for(let item of products){
        $('.productContainer').prepend(
            `   
            <tr>
                  <td>${item.nombre}</td>
                  <td>${item.precio}</td>
                  <td>${item.thumbnail}</td>
                </tr>`
        )
    }
}


socket.on("products", (data) => {
    //products.push(data);
    //render();

    loadData();
})

socket.on("mensajes", (data) => {
    console.log("mensaje: " + data)
})