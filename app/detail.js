window.onload = () => {
    let lista = document.querySelector("#usuarios");
    let obtenerParam = (url) => {
        let urlParam = String(url.match(/\?+.+/));
        urlParam = urlParam.replace("?id=", "");
        return urlParam;
    }

    let param = obtenerParam(document.URL);

    fetch('assets/data/anuario.json')
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error en la solicitud: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            let filter = data.filter((proj) => {
                return proj.Id == param;
            });

            let project = filter[0];

            let images = project.imagenes.split(',');

            let estructura = `
            <nav>
            <img class="logo" src="assets/imagenes/esd logo.png" alt="">
            <a href="index.html"><h1>#Poster 03</h1></a>
        </nav>
        <main class="space">
            <div class="work">
            <h1>${project.titulo}</h1>
            <h2>${project.subtitulo}</h2>
            <section class="info">
                <h4>${project.linea_investigacion}</h4>
                <p>${project.palabras_clave}</p>
                <h4>${project.curso} ${project.especialidad}</h4>
                <h4>${project.asignatura}</h4>
            </section>
            <section class="detail">
                <p class="descripcion">${project.descripcion}</p>
                <div class="autor">
                <h4>${project.nombre_estudiante}</h4>
                <p>${project.redes_estudiante}</p>
                </div>
            </section>
            </div>
            <div class="contenedor">
            <img src='${images[0]}'>
            <img src='${images[2]}'>
            <img src='${images[3]}'>
            </div>
            </main>
            `;
            document.body.innerHTML = estructura;
        })
        .catch(error => {
            console.error('Error de fetch:', error);
        });



}
