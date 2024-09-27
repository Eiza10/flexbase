let liburuak = [
    {
      "isbn": "1617293563",
      "egilea": "Raoul-Gabriel Urma",
      "data": "Nov 15, 2018",
      "izenburua": "Modern Java in Action: Lambdas, streams, functional and reactive programming",
      "filename": "8508261-M.jpg"
    },
  
   {
      "isbn": "9781617291302",
      "egilea": "Benjamin Muschko",
      "data": "Mar 09, 2014",
      "izenburua": "Gradle in Action",
      "filename": "8514400-M.jpg"
    },
  
       {
      "isbn": "1883601126",
      "egilea": "Matt Welsh",
      "data": "1995",
      "izenburua": "The Linux bible",
      "filename": "6764181-M.jpg"
    },
    
  {
      "isbn": "9781617293290",
      "egilea": "Dmitry Jemerov",
      "data": "Feb 19, 2017",
      "izenburua": "Kotlin in Action",
      "filename": "8507716-M.jpg"
    }
  ]

  const BASE = "https://covers.openlibrary.org/b/id/";
  let irudiak = [];

    liburuak.forEach(liburu => {
        irudiak.push(BASE+liburu.filename);
  });

  function irudiakSartu() {
    const container = document.getElementById('images'); // Asegúrate de tener un contenedor con este ID en tu HTML
    irudiak.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        container.appendChild(img);
    });
}

irudiakSartu();
