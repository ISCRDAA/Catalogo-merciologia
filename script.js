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
      card.className = 'flip-card';

      const coloresCategoria = {
        "Reino vegetal": "#2f5d2c",
        "Metales": "#8a1e1e",
        "Industrias Químicas": "#1e3d59",
        "Productos farmaceuticos": "#f57c00",
        "Productos minerales": "#5c5c5c",
        "Construcción": "#a9742c",
        "Objetos de arte o colección": "#C9B037",
        "Pieles cueros y peletería": "#8B4513",
        "Piedras preciosas": "#0a9d72",
        "Manufacturas de cinc": "#5c7080"
      };
      
      card.style.background = coloresCategoria[producto.categoria] || "#2b4c7e";
  
      card.innerHTML = `
        <div class="flip-card-inner">
        <div class="flip-card-front">
        <h2>${producto.nombre}</h2>
            <img src="${producto.imagen}" alt="${producto.nombre}" />
            <span><strong>Descripción:</strong> ${producto.descripcion}</span>
            <br>
            <br>
            <span><strong>Seccion:</strong> ${producto.seccion}</span>
            <br>
            <span><strong>Capítulo:</strong> ${producto.capitulo}</span>
            <br>
            <span><strong>Partida:</strong> ${producto.partida}</span>
            <br>
            <span><strong>Sub-partida:</strong> ${producto.subpartida}</span>
            <br>
            <span><strong>Fraccion arancelaria:</strong> ${producto.fraccion_arancelaria}</span>
            <br>
            
          </div>
          <div class="flip-card-back">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p><strong>Categoría:</strong> ${producto.categoria}</p>
            <a href=${producto.link} target="_blank" class="enlace">
               Abrir enlace <span class="icono">🔗</span>
            </a>
          </div>
        </div>
      `;
  
      // Clic para voltear
      card.addEventListener("click", () => {
        card.classList.toggle("flip");
      });
  
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
    const sonido = document.getElementById('metalSound');
    sonido.muted = false;
   

    

  
    // Abre las puertas
    setTimeout(() => {
      puertaIzq.classList.add("abierta");
      puertaDer.classList.add("abierta");
      contenedor.classList.add("visible");
    }, 900); // espera medio segundo para dar dramatismo
  });

  
  
  
