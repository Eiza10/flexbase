window.onload = () => {
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

  let i = 0;

  // Liburuen irudiak
  const BASE = "https://covers.openlibrary.org/b/id/";
  let irudi_markoa = document.querySelector("#image");
  
  // Liburuen datuak
  let izenburua = document.querySelector("#izenburua");
  let egilea = document.querySelector("#egilea");
  let data = document.querySelector("#data");
  let isbn = document.querySelector("#isbn");

  let btnL = document.querySelector("#btnL");
  let btnR = document.querySelector("#btnR");
  let btnS = document.querySelector("#btnS");

  let isbnLabel = document.querySelector("#isbnLabel");
  isbnLabel.style.display = "none";

  // Irudiak lortu
    let irudiak = [];
    let irudia = "";
    liburuak.forEach(liburu => {
        irudia = BASE + liburu.filename;
        irudiak.push(irudia);
  });

  // Liburu baten datuak ezarri
  function setLiburua(){
    irudi_markoa.src = irudiak[i];
    izenburua.value = liburuak[i].izenburua;
    egilea.value = liburuak[i].egilea;
    data.value = liburuak[i].data;
    isbn.value = liburuak[i].isbn;
    }
    
    setLiburua();

    // Ezkerreko botoia
    btnL.addEventListener("click", function(){
        if(i != 0){   
          i--;
          setLiburua();   
       }
     })

    // Eskuineko botoia
    btnR.addEventListener("click", function(){
        if(i != liburuak.length-1){
          i++;
          setLiburua();     
       }
    })

    // Bilatu botoia
    btnS.addEventListener("click", function(){

        let liburua = liburuak.find(liburu => liburu.isbn === isbn.value);
        if(liburua){
            i= liburuak.indexOf(liburua);
            setLiburua();
        }else{
            isbnLabel.style.display = "inline";
            setTimeout(() => {
                isbnLabel.style.display = "none";
            }, 5000);
        }
    })

 }
