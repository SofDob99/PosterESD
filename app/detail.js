window.onload = () => {
    let lista = document.querySelector("#usuarios");
    let obtenerParam = (url) => {
        let urlParam = String(url.match(/\?+.+/));
        urlParam = urlParam.replace("?id=", "");
        return urlParam;
    }

    let param = obtenerParam(document.URL);

    fetch('assets/data/anuario.json')
        .then(res => res.json())
        .then(data => {

            let project = data.filter((proj) => {
                return proj.Id == param;
            });
            let images =  [ project[0].imagenes.slice(0,76), project[0].imagenes.slice(78,154)]

            let estructura=`<h1>${project[0].titulo}</h1>
                <h2>${project[0].subtitulo}</h2>
                <section class="detail">
                    <img src='${images[0]}'>
                    <img src='${images[1]}'>

                </section>
                `;
            document.body.innerHTML = estructura;
    })
}
