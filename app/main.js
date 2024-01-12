window.onload = () => {

    let gallery = document.querySelector("#gallery");

    let mostrarDetalle = (e) => {
        window.open(`../detalle.html?id=${e.currentTarget.id}`, '_blank');
    }

    var anuario = [];

    //Leer anuario
    fetch('assets/data/anuario.json')
        .then(res => res.json())
        .then(data => {
            anuario = data;
        });

    fetch('assets/data/anuario.lineas.json')
        .then(res => res.json())
        .then(data => {

            // Bucle
            data.forEach((linea, index) => {
                getItems(linea.id, linea.nombre);
            });

        })
        .then(() => {
            let users = document.querySelectorAll(".project");
            users.forEach((user) => {
                user.addEventListener("click", mostrarDetalle, true)
            });

            // Configuramos el scroll horizontal para cada sección después de cargar los datos
            initializeCarousels();
        });

    function getItems(id, nombre) {
        const filteredData = anuario.filter(f => f.linea_investigacion == nombre);

        let lista = '';

        filteredData.forEach((project, index) => {
            if (project.titulo != undefined && project.imagenes != "" && project.imagenes != undefined) {

                let portada = project.imagenes.split(',')[0]; //primera imagen

                let item = `<li class="project" id="${project.Id}" data-mouse-down-at="0">
                    <img src="${portada}" alt="${project.desc_img1}"/>
                    <span><strong>${project.titulo}</strong></span>
                </li>`;
                lista += item;
            }
        });

        gallery.innerHTML += `
            <section id="investigacion${id}">
                <h2>${nombre}</h2>
                <ul id="usuarios${id}" class="usuarios">
                    ${lista}
                </ul>
            </section>`;
    };

}