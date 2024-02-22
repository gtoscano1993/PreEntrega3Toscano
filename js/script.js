// Render Productos
function renderProductos() {
    const productos = obtenerProductosLS();
    let contenido = "";
    for (const producto of productos){
        contenido += `<div class = "col-md-4 text-center">
        <a href="producto.html" onclick="verProducto(${producto.id});" class="text-decoration-none">
        <img src = "${producto.imagen}" alt="${producto.nombre}" height="260" />
        <p class = "colorFuente bangers-regular"> ${producto.nombre}</p>
        </a>
        </div>`
    } 
    document.getElementById("productos").innerHTML = contenido;
}
renderProductos();
// Render Productos hasta acá

