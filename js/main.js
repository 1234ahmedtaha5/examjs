
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  $("a")

  


  const API_KEY="api_key=723bebdd8287de1d8b00b30c4f26dce6";
  const BASE_URL="https://api.themoviedb.org/3";
  const API_URL=BASE_URL+"/discover/movie?sort_by=popularity.desc&"+API_KEY;
  const IMG_URL="https://image.tmdb.org/t/p/w500";
  const seachurl=BASE_URL +'/search/movie?'+API_KEY;


  let main=document.getElementById("main");
  let form=document.getElementById("form");
  let search1=document.getElementById("search1");
  




  getmovies(API_URL)

  function getmovies(URL)
  {
    fetch(URL).then(res =>res.json()).then(data =>{
      console.log(data.results)
      showmovies(data.results);
    })
  }

  function showmovies(data){
    main.innerHTML="";

    data.forEach(movie => {
       const{title,poster_path,vote_average,overview,release_date}=movie;
      const movieEl=document.createElement("div")
      movieEl.classList.add("movie")
      movieEl.innerHTML=`<img src="${IMG_URL+poster_path}" alt="${title}">
  
      <div class="movie-info">
        <h2>${title}</h2>
        <p>${overview}</p>
        <h2>${vote_average}</h2>
        <h2>${release_date}</h2>
      </div>
      `
      main.appendChild(movieEl)
    });

  }

  form.addEventListener('click',(e) => {
    e.preventDefault()
    const searchterm=search1.value;
   
    if(searchterm){
      getmovies(seachurl+"&query="+searchterm)

    }
    else{
      getmovies(API_URL)
    }
  })

  let email=document.getElementById("email")
  let phone=document.getElementById("phone")
  let span=document.getElementsByTagName("span")

  email.onkeydown=function(){
    let regex=/^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    let regexO=/^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$\.([a-zA-Z]){1,3}$/;
    if(regex.test(email.value)|| regexO.value(email))
    {
      span[0].innerText="your email valid"
      span[0].style.color="white"
    }
    else{
      span[0].innerText="your email not valid"
      span[0].style.color="red"
    }

  }
  phone.onkeydown=function(){
    let regex=/^([0-9]){10}$/;

  }

  