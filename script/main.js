let getNameFilm = document.getElementById('getFilm');
console.log(document.getElementById('films').value);




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
                for (let index = 1; index < res.data.characters[index].length; index++) {
                    axios.get(`https://swapi.co/api/people/${index}/`)
                        .then((res) => {
                            console.log(res.data);
                        });
                }
            }).finally(() => {
                // document.getElementById('filmPage').classList.toggle('active');
                document.getElementById('loader').classList.toggle('active');
            });
        }
    }


// getNameFilm.onclick = function(){
//     // document.getElementById('filmPage').classList.toggle('active');
//     document.getElementById('loader').classList.toggle('active');
//     let idFilm = document.getElementById('films').value;
//     console.log('idFilm ' + idFilm)
//     axios.get(`https://swapi.co/api/films/7`)
//     .then((res) => {
//         console.log(res.data);
//         for (let index = 0; index < res.data.results.length; index++) {
//             console.log(index + " " + res.data.results[index].title);
//         }
//         // document.getElementById('idFilm').innerHTML = `${idFilm}`;
//         // document.getElementById('nameFilm').innerHTML = `${res.data.title}`;
//     }).finally(() => {
//         // document.getElementById('filmPage').classList.toggle('active');
//         document.getElementById('loader').classList.toggle('active');
//     });
// }


// axios.get(`https://swapi.co/api/people/17/`)
//                         .then((res) => {
//                             console.log(res.data);
//                         });