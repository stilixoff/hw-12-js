

// axios.get(`https://swapi.co/api/people/?page=9`)
//                         .then((res) => {
//                             console.log(res.data);
//                         });



let getNameFilm = document.getElementById('getFilm');
    getNameFilm.onclick = function(){
        if(document.getElementById('films').value != 0) {
            // document.getElementById('filmPage').classList.toggle('active');
            document.getElementById('loader').classList.toggle('active');
            let idFilm = document.getElementById('films').value;
            axios.get(`https://swapi.co/api/films/${idFilm}`)
            .then((res) => {
                document.getElementById('idFilm').innerHTML = `${res.data.episode_id}`;
                document.getElementById('nameFilm').innerHTML = `${res.data.title}`;
                console.log(res);
                return res;
            }).then((res) => {
                let heroes = document.getElementById('heroes');
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
                        console.log(res.data);
                        return res.data.name;
                    })
                    promiseArr.push(promise);
                }
                console.log(res);
                return Promise.all(promiseArr);
            }).finally(() => {
                // document.getElementById('filmPage').classList.toggle('active');
                document.getElementById('loader').classList.toggle('active');
            });
        }
    }
