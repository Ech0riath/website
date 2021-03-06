const form = document.querySelector(".form");
// Add an event listener to form submit event
form.addEventListener("submit", handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    let query = document.querySelector(".search-input").value;
    query = query.trim();
    getResults(query);
    
}

function getResults(query) {
    let url = `https://tr.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=30&srsearch=%27${query}`;

    fetch(url)
    .then((res) => res.json() )
    .then((data)=> {
        putResults(data.query.search);
    })
    .catch((e) => console.log(`ERROR : ${e}`));
}

function putResults(sResults) {
    const searchResults = document.querySelector(".results");
    searchResults.innerHTML = "";
    sResults.forEach((result) => {
      const url = encodeURI(`https://tr.wikipedia.org/wiki/${result.title}`);
      searchResults.insertAdjacentHTML(
        "beforeend",
        `<div class="result  border-blue-400 rounded-md shadow-xl bg-gray-300 px-2 py-2 m-5">
        <h2 class="result-title text-xl font-medium pb-4 ">
          <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
        </h2>
        <span class="result-snippet">${result.snippet}</span><br>
        <a href="${url}" class="hover:bg-blue-600 hover:text-red-300 result-link rounded-xl bg-blue-500 py-1 text-sm px-2 rounded inline-block my-4" target="_blank" rel="noopener">Read More</a>
      </div>` 
      );
    });
  }


  // Select the button
let btn1 = document.querySelector(".btn-toggle");

// 
btn1.addEventListener("click", function() {  

  document.body.classList.remove("dark-theme");
  btn1.style.cssText +='color: yellow; transform: translate(8px) scale(2,2);'
  btn2.style.cssText+= 'transform: translate(20px); color:black;';

});
 
let btn2 = document.querySelector(".btn-tog");


btn2.addEventListener("click", function() {  
  
  document.body.classList.add("dark-theme");

  
  btn2.style.cssText +='color: blue; transform: translateX(20px) scale(1.5,1.5);'
  btn1.style.cssText+= 'transform: translate(0); color:white;';
   

  
});
