var url = 'https://restcountries.com/v3.1/all'
fetch(url)
  .then((res) => res.json())
  .then((message) => {
    for (let msg in message) {
      let flags = message[msg].flags.png;
      let name = message[msg].name.official;
      let capital = message[msg].capital;
      let region = message[msg].region;
      let code = message[msg].altSpellings[0];
      let Lat_lon = message[msg].latlng;

      displayContents();
      function displayContents() {
        const div_col = document.createElement("div");
        div_col.setAttribute("class", "col-lg-3 col-md-4 col-sm-12 d-flex flex-wrap justify-content-center align-items-center align-self-stretch my-2");
        const row = document.getElementById("main_row");
        row.append(div_col);



        const div_card = document.createElement("div");
        div_card.setAttribute("class", "card");
        div_card.style.width = "18rem";
        div_card.style.height = "25rem";
        div_col.append(div_card);



        const myp1 = document.createElement("p");
        myp1.setAttribute("class", "card-title bg-dark text-white text-center");
        myp1.innerText = `${name}`;
        div_card.append(myp1);

        const image = document.createElement("img");
        image.src = `${flags}`;
        image.alt = "...";
        image.style.width = "100%";
        image.style.height = "40%";
        div_card.append(image);

        const div_card_body = document.createElement("div");
        div_card_body.setAttribute("class", "card-body");
        div_card.append(div_card_body);


        const para1 = document.createElement("p");
        para1.setAttribute("class", "card-text text-center");
        para1.innerText = `Capital: ${capital}`;


        const para2 = document.createElement("p");
        para2.setAttribute("class", "card-text text-center");
        para2.innerText = `Region: ${region}`;



        const para3 = document.createElement("p");
        para3.setAttribute("class", "card-text text-center");
        para3.innerText = `country_code: ${code}`;


        const divbutton = document.createElement("div");
        divbutton.setAttribute("class", "text-center")
        div_card_body.append(para1, para2, para3, divbutton);


        const atag = document.createElement("a");
        atag.setAttribute("id", "btn-click");
        atag.setAttribute("class", "btn btn-primary btn-click");
        atag.innerText = "click for weather";
        divbutton.append(atag);

        var lat = Lat_lon[0];
        var lon = Lat_lon[1];
        var API_key = '74bf89c9ca8d34b51c996f72419cdb1d';
        var weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
        // atag.href = "#";
        atag.value = weather_url;
        



      }

    }
    let weatherbtn = document.querySelectorAll(".btn-click");
    weatherbtn.forEach((element)=>{
      element.addEventListener("click", displayweather);
      function displayweather(){
        fetch(element.value)
        .then((res)=> res.json())
        .then((data)=>{
          alert(`weather info: ${data.weather[0].description}, ${data.weather[0].main}\nTemperature: ${data.main.temp}\nHumidity: ${data.main.humidity}`);
        })
      }
    })
    


  })






