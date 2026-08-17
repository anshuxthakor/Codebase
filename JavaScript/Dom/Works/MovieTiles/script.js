const form = document.querySelector("form");
const url = document.querySelector("#url");
const name = document.querySelector("#name");
const year = document.querySelector("#year");
const runningTime = document.querySelector("#running-time");
const directedBy = document.querySelector("#directed-by");
const producedBy = document.querySelector("#produced-by");
const starring = document.querySelector("#starring");
const btn = document.querySelector("#btn");

const grid = document.querySelector(".grid");

let movieData = [
  {
    id: 1,
    name: "Whiplash",
    year: 2014,
    runningTime: "106 Minutes",
    directedBy: "Damien Chazelle",
    producedBy: "Jason Blum",
    starring: "Miles Teller, J.K. Simmons",
    url: "https://media.newyorker.com/photos/59097ccac14b3c606c109711/master/w_2560%2Cc_limit/Brody-Whiplash.jpg"
  },
  {
    id: 2,
    name: "The Matrix",
    year: 1999,
    runningTime: "136 Minutes",
    directedBy: "Lana Wachowski, Lilly Wachowski",
    producedBy: "Joel Silver",
    starring: "Keanu Reeves, Laurence Fishburne",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiR0ocDfUNP-gHGzQGc1Jwlh2qCWzPy-G2adZmW9HU5DpDYWyJZnwFLAVp&s=10"
  },
  {
    id: 3,
    name: "Gladiator",
    year: 2000,
    runningTime: "155 Minutes",
    directedBy: "Ridley Scott",
    producedBy: "Douglas Wick",
    starring: "Russell Crowe, Joaquin Phoenix",
    url: "https://c4.wallpaperflare.com/wallpaper/682/237/162/movie-gladiator-wallpaper-preview.jpg"
  },
  {
    id: 4,
    name: "Interstellar",
    year: 2014,
    runningTime: "169 Minutes",
    directedBy: "Christopher Nolan",
    producedBy: "Emma Thomas",
    starring: "Matthew McConaughey, Anne Hathaway",
    url: "https://dq0hsqwjhea1.cloudfront.net/Interstellar_spaceman_480px.jpg"
  },
  {
    id: 5,
    name: "Goodfellas",
    year: 1990,
    runningTime: "146 Minutes",
    directedBy: "Martin Scorsese",
    producedBy: "Irwin Winkler",
    starring: "Robert De Niro, Ray Liotta",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1r33EaCD_H-XXI2LfRvP2ar78yzSnnCjbgB7wMxz91RiBnrkOp6miLV0&s=10"
  },
  {
    id: 6,
    name: "Parasite",
    year: 2019,
    runningTime: "132 Minutes",
    directedBy: "Bong Joon-ho",
    producedBy: "Kwak Sin-ae",
    starring: "Song Kang-ho, Lee Sun-kyun",
    url: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg"
  },
  {
    id: 7,
    name: "Shutter Island",
    year: 2010,
    runningTime: "139 Minutes",
    directedBy: "Martin Scorsese",
    producedBy: "Bobby J. Fisher",
    starring: "Leonardo DiCaprio, Mark Ruffalo",
    url: "https://miro.medium.com/0*9AJHwprkeqOPZVnd.png"
  },
  {
    id: 8,
    name: "The Prestige",
    year: 2006,
    runningTime: "130 Minutes",
    directedBy: "Christopher Nolan",
    producedBy: "Emma Thomas",
    starring: "Hugh Jackman, Christian Bale",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRheLFYJXP2dJ0ZP10d42YoOLZ50u8kKGp47CFFbo8r_ZNp0a_yLgxm_SL&s=10"
  },
  {
    id: 9,
    name: "Fight Club",
    year: 1999,
    runningTime: "139 Minutes",
    directedBy: "David Fincher",
    producedBy: "Art Linson",
    starring: "Brad Pitt, Edward Norton",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJK47RrUFEVoefeSJ-12uStWe2Fk-GmDPfpGzgWEF8JOtXshOKEEZckUL&s=10"
  },
  {
    id: 10,
    name: "Inception",
    year: 2010,
    runningTime: "148 Minutes",
    directedBy: "Christopher Nolan",
    producedBy: "Emma Thomas",
    starring: "Leonardo DiCaprio, Joseph Gordon-Levitt",
    url: "https://wallpapercave.com/wp/msi4htu.jpg"
  },
  {
    id: 11,
    name: "Pulp Fiction",
    year: 1994,
    runningTime: "154 Minutes",
    directedBy: "Quentin Tarantino",
    producedBy: "Lawrence Bender",
    starring: "John Travolta, Samuel L. Jackson",
    url: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg"
  },
  {
    id: 12,
    name: "The Dark Knight",
    year: 2008,
    runningTime: "152 Minutes",
    directedBy: "Christopher Nolan",
    producedBy: "Emma Thomas",
    starring: "Christian Bale, Heath Ledger",
    url: "https://m.media-amazon.com/images/M/MV5BYjU4ZDJkNjEtMTMwZi00ODJmLTk1NjYtNDNhZjM2MWQ0ZGRiXkEyXkFqcGc@._V1_QL75_UX514_.jpg"
  }
];

const ui = () => {
  grid.innerHTML = "";
  movieData.forEach((movie, index) => {
    grid.innerHTML += `<div class="movie-card">
          <img src="${movie.url}" class="poster" onclick="deleteMovie(${index})" alt="Movie Poster" />
          <div class="details">
            <div class="title">
              <h1>${movie.name.toUpperCase()}</h1>
              <span>${movie.year}</span>
            </div>
            <div class="desc">
              <div class="sub-desc">
                <h2>running time</h2>
                <span>${movie.runningTime}</span>
              </div>
              <div class="sub-desc">
                <h2>directed by</h2>
                <span>${movie.directedBy}</span>
              </div>
              <div class="sub-desc">
                <h2>produced by</h2>
                <span>${movie.producedBy}</span>
              </div>
            </div>
            <div class="sub-desc">
              <h2>starring</h2>
              <span>${movie.starring}</span>
            </div>
          </div>
        </div>`
  });
};

ui();


form.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (true) {
    case !url.value || url.value.trim() === "":
      alert("Please enter a valid URL"); return;
      break;
    case !name.value || name.value.trim() === "":
      alert("Please enter a movie name"); return;
      break;
    case !year.value || year.value.trim() === "":
      alert("Please enter a year"); return;
      break;
    case !runningTime.value || runningTime.value.trim() === "":
      alert("Please enter the running time"); return;
      break;
    case !directedBy.value || directedBy.value.trim() === "":
      alert("Please enter the director"); return;
      break;
    case !producedBy.value || producedBy.value.trim() === "":
      alert("Please enter the producer"); return;
      break;
    case !starring.value || starring.value.trim() === "":
      alert("Please enter the cast"); return;
      break;
  };

  movieData.push({
    id: movieData.length + 1,
    url: url.value,
    name: name.value,
    year: year.value,
    runningTime: runningTime.value,
    directedBy: directedBy.value,
    producedBy: producedBy.value,
    starring: starring.value
  });

  ui();

  console.log(movieData); 
});


// Deletes The Movie Card When The Poster Is Clicked

// const poster = document.querySelector(".poster");
// let deleteMovie = (index) => {
//   movieData.splice(index, 1);
//   ui();
//   console.log(movieData);
// }