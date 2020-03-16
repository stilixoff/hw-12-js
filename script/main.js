

// axios.get(`https://swapi.co/api/people/?page=9`)
//                         .then((res) => {
//                             console.log(res.data);
//                         });



document.getElementById('filmPage').classList.toggle('active');
let getNameFilm = document.getElementById('getFilm');
    getNameFilm.onclick = function(){
        if(document.getElementById('films').value != 0) {
            document.getElementById('filmPage').classList.add('active');
            document.getElementById('loader').classList.toggle('active');
            let idFilm = document.getElementById('films').value;
            axios.get(`https://swapi.co/api/films/${idFilm}`)
            .then((res) => {
                document.getElementById('idFilm').innerHTML = `${res.data.episode_id}`;
                document.getElementById('nameFilm').innerHTML = `${res.data.title}`;
                document.getElementById('filmInfo').innerHTML = `${res.data.opening_crawl}`;
                document.getElementById('imgFilm').innerHTML = `<img src="./img/${res.data.title}.jpg" alt="${res.data.title}">`;
                console.log(res);
                return res;
            }).then((res) => {
                let heroes = document.getElementById('heroes');
                heroes.innerHTML = '';
                let promiseArr = [];
                for (let index = 0; index < res.data.characters.length; index++) {
                    let promise = axios.get(res.data.characters[index])
                    .then((res) => {
                        heroes.innerHTML += `
                        <div class="hero">
                        <div class="hero__avatar">
                            <img src="./img/${res.data.name}.png" alt="">
                        </div>
                        <ul class="hero__info">
                            <li>Name: ${res.data.name}</li>
                            <li>Height: ${res.data.height}</li>
                            <li>Gender: ${res.data.gender}</li>
                        </ul>
                    </div>
                        `
                        console.log(res.data.name);
                        return res.data.name;
                    })
                    promiseArr.push(promise);
                }
                console.log(res);
                return Promise.all(promiseArr);
            }).catch((err) => {
                document.getElementById('filmPage').innerHTML = `<h5>Что то пошло не так</h5> <br> ${err}`
            }).finally(() => {
                document.getElementById('filmPage').classList.remove('active');
                document.getElementById('loader').classList.toggle('active');
            });
}
    }
