/** Cargar un fichero JSON */

window.onload = () => {

    let lista = document.querySelector("#usuarios");


    let mostrarDetalle = (e) =>{
        window.open(`../detalle.html?id=${e.currentTarget.id}`,'_blank');
    }


    fetch('assets/data/anuario.json')
    .then(res => res.json())
    .then(data => {
        let projectNum = 0;
        data.forEach((project, index) => {
            if(project.titulo != undefined && project.imagenes != "" && project.imagenes != undefined ){
                let portada = project.imagenes.slice(0, 76);
                projectNum++;

                let item=`<li class="project" id="${project.Id}">
                        <span>${projectNum}</span>
                        <img src="${portada}" alt="${project.desc_img1} "/>
                        <span><strong>${project.titulo}</strong> // ${project.nombre_estudiante}</span>
                </li>`;
                lista.innerHTML += item;
            }
       });
     })
     .then(()=>{
        let users = document.querySelectorAll(".project");
        users.forEach((user) => {
            user.addEventListener("click", mostrarDetalle, true)
        })
     });

}

