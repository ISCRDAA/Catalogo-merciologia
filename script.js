fetch('data.json')
  .then(response => response.json())
  .then(data => {
    mostrarProductos(data);
    cargarCategorias(data);

    const filtro = document.getElementById('filtroCategoria');
    filtro.addEventListener('change', () => {
      const categoriaSeleccionada = filtro.value;
      if (categoriaSeleccionada === "todos") {
        mostrarProductos(data);
      } else {
        const filtrados = data.filter(p => p.categoria === categoriaSeleccionada);
        mostrarProductos(filtrados);
      }
    });
  });

function mostrarProductos(productos) {
  const contenedor = document.getElementById('catalogo');
  contenedor.innerHTML = '';

  productos.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">
      <h2>${producto.nombre}</h2>
      <p>${producto.descripcion}</p>
      <span><strong>Fracción:</strong> ${producto.fraccion_arancelaria}</span>
      <span><strong>Categoría:</strong> ${producto.categoria}</span>
    `;

    contenedor.appendChild(card);
  });
}

function cargarCategorias(productos) {
  const filtro = document.getElementById('filtroCategoria');
  const categoriasUnicas = [...new Set(productos.map(p => p.categoria))].sort();

  categoriasUnicas.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    filtro.appendChild(option);
  });
}

window.addEventListener("load", () => {
    const puertaIzq = document.getElementById("puertaIzq");
    const puertaDer = document.getElementById("puertaDer");
    const contenedor = document.getElementById("contenedor");
  
    // Abre las puertas
    setTimeout(() => {
      puertaIzq.classList.add("abierta");
      puertaDer.classList.add("abierta");
      contenedor.classList.add("visible");
    }, 500); // espera medio segundo para dar dramatismo
  });
  
  
