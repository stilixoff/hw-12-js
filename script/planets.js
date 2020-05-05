window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const planets = urlParams.get('planets');
    axios.get(`https://swapi.dev/api/films/${planets}`)
        .then((res) => {
            let planetsAll = document.getElementById('planetsAll');
            let promiseArr = [];
                for (let index = 0; index < res.data.planets.length; index++) {
                    let promise = axios.get(res.data.planets[index])
                    .then((res) => {
                        console.log(res.data.name);
                        planetsAll.innerHTML += `
                                <div class="planet">
                                <div class="planet__img">
                                    <img src="./img/planets/57150560.png" alt="planet">
                                </div>
                                <ul>
                                    <li>name: <span>${res.data.name}</span></li>
                                    <li>rotation_period: <span>${res.data.rotation_period}</span></li>
                                    <li>orbital_period: <span>${res.data.orbital_period}</span></li>
                                    <li>diameter: <span>${res.data.diameter}</span></li>
                                    <li>climate: <span>${res.data.climate}</span></li>
                                    <li>gravity: <span>${res.data.gravity}</span></li>
                                    <li>terrain: <span>${res.data.terrain}</span></li>
                                    <li>surface_water: <span>${res.data.surface_water}</span></li>
                                    <li>population: <span>${res.data.population}</span></li>
                                </ul>
                            </div>
                        `
                        return res.data.planets;
                    })
                    promiseArr.push(promise);
                }
                console.log(res);
                return Promise.all(promiseArr);
        }).catch((err) => {
            console.log(err);
        });
}
