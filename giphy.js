function spellcheck(word){
    let mainapiurl="https://apimain.prajwalmani.repl.co/api/spellcheck/"
    mainapiurl=mainapiurl.concat(word); 
    fetch(mainapiurl,
        {
            mode:'no-cors',
        })
    .then(response=>response.json())
    .then(content=>{
        console.log(content)
})
//     .catch(err=>{
//         console.log("ahahaha")
//     })
}

function giphy(androidsearchterm) {
    // langcheck(androidsearchterm)
    document.getElementById("out").innerHTML = ""
    document.getElementById("out").setAttribute("style","width:393px");
    var s=androidsearchterm
    var author="@signwithrobert"
    var search_term=author.concat(" ",s)
    let apikey="DsCHXY2CPBGbdeWb6dJ1QFF1W0GWDr8A";
    let url=`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&limit=1&q=`
    url=url.concat(search_term)
    fetch(url)
    .then(response => response.json())
    .then(content=>{
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data[0].images.downsized.url;
        img.style.width='340px';
        img.style.height='400px';
        fig.appendChild(img);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", fig);
    })
    .catch(err=>{
        document.getElementById("out").innerHTML = "<h2>Oops! We didn't find the sign for your search term</h2>"
    }
        )
}
spellcheck("thisss")