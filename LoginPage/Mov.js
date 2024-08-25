const searchForm = document.querySelector("form");
const inputBox = document.querySelector(".inputBox");
const mc = document.getElementById("movies-container");
const getmovieInfo = async (movie) => {
  mc.innerHTML = "";
  const Myaplikey = "f2ea9eb3";
  const url = `http://www.omdbapi.com/?apikey=${Myaplikey}&t=${movie}`;
  const fetchData = await fetch(url);
  const jsondata = await fetchData.json();
  showdata(jsondata);
  console.log(jsondata);
};

const showdata = (jsondata) => {
  const {
    Title,
    Year,
    imdbRating,
    Released,
    Genre,
    Awards,
    BoxOffice,
    Country,
    Director,
    Language,
  } = jsondata;
  const mydiv = document.createElement("div");
  mydiv.innerHTML = `<h2> ${Title} </h2>
                        <h2> ${Year} </h2>
                        <p><strong> Rating: &#11088 :  </strong> ${imdbRating} </p>
                        <p><strong>Released : </strong> ${Released} </p>
                        <p><strong> Awards :  </strong> ${Awards} </p>
                        <p><strong> BoxOffice :  </strong> ${BoxOffice} </p>
                        <p><strong> Country :  </strong> ${Country} </p>
                        <p><strong> Director :  </strong> ${Director} </p>
                        <p><strong> Language :  </strong> ${Language} </p>

                        `;

  const generElement = document.createElement("div");
  generElement.classList.add("movie-genere");

  Genre.split(",").forEach((element) => {
    const p = document.createElement("p");
    p.innerHTML = element;
    generElement.appendChild(p);
  });

  mydiv.appendChild(generElement);
  //

  mc.appendChild(mydiv);
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = inputBox.value.trim();
  getmovieInfo(inputValue);
});

// const getmovieinfo = async (movie) => {
//   const myAPIkey = "f2ea9eb3";
//   const url = `http://www.omdbapi.com/?apikey=${myAPIkey}&t=${movie}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   showMovieData(data);
//   console.log(data);
// };

// const showMovieData = (data) => {
//   const {
//     Title,
//     imdbRating,
//     Genere,
//     Released,
//     Runtime,
//     Actors,
//     Plots,
//     Poster,
//   } = data;
//   const movieElement = document.createElement("div");
//   movieElement.innerHTML = `<h2>${Title}</h2>
//   <p><strong> Rating: &#11088 :  </strong> ${imdbRating} </p>
//         <h2> ${Genere} </h2>`;

//   mc.appendChild(movieElement);
// };

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   //   console.log(inputBox.value);

//   const movieName = inputBox.value.trim();
//   console.log(movieName);
//   if (movieName !== "") {
//     getmovieinfo(movieName);
//   }
// });
