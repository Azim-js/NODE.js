function spellcheck(word){
    var data="";
    var data=data.concat("text=",word,"&language=en-US");
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    const result=xhr.addEventListener("readystatechange", function() {
        if (this.readyState === this.DONE) {
            // console.log(this.responseText);
            let response=this.responseText;
            console.log(response.length);
            let jsonres=JSON.parse(response);
            const matches=jsonres["matches"];
            console.log(matches["0"])
            const replacments=matches["0"];
            console.log(replacments["replacements"])
            const corrected=replacments["replacements"];
            console.log(corrected["0"])
            const result=corrected["0"];
            console.log(result["value"])
            
            let out = document.querySelector(".out");
            let txt = document.createElement("div");
            txt.textContent=result["value"];
            out.insertAdjacentElement("beforebegin",txt);

            return(result["value"]);
        }
    });
    
    xhr.open("POST", "https://grammarbot.p.rapidapi.com/check");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("x-rapidapi-key", "e2be155a48msha5f36a50e5a0239p192aefjsn5df12b82562e");
    xhr.setRequestHeader("x-rapidapi-host", "grammarbot.p.rapidapi.com");
    
    xhr.send(data);
    console.log(result)
    return(result);
}

// spellcheck("thissss")
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
const res=spellcheck("thiss")
console.log(res)