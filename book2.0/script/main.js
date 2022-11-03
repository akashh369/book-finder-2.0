var key='&key=AIzaSyA23CPJC1WBkyQosMz8i5xKoFh2ph8S3EQ'
var url='https://www.googleapis.com/books/v1/volumes?q='

var container=document.querySelector(".container");
var searchbutton=document.querySelector("#img");
var searchbar=document.querySelector(".search");
var searchcontainer=document.querySelector("#searchbar");


function display(ele){
    container.innerHTML=``;
    ele.forEach(e => {
        var a=document.createElement('div');
        a.innerHTML=`
            <div class="card">
            <img src="${e['volumeInfo']['imageLinks']['thumbnail']}" width="150p" height="220px" />
            <div class="card-body">
            <h2>${e['volumeInfo']['title']}</h2>
            <h3>
                <span>Author :</span> 
                ${e['volumeInfo']["authors"][0]}
            </h3>
            <h3>
                <span>Publisher:</span>
                ${e['volumeInfo']["publisher"]}
            </h3>
            <hr>
            <hr>
            <p class="preview">
            <a href="${e['accessInfo']['pdf']['acsTokenLink']}">download pdf</a>
            </p>
            </div>
            </div>
        `
        container.appendChild(a);
    });

    
}

async function load(url){
    const response=await fetch(url);
    const result=await response.json();
   setTimeout(display(result['items']),1000);
}

searchbar.addEventListener('keypress',()=>{
    if(event.key==="Enter")
    if(searchbar.value=="")
    {
        setTimeout(function(){
        container.innerHTML=``;
        searchcontainer.classList.remove("gotop");
        searchcontainer.classList.add("searchbar")
        //remove the search bar ----
        },200);
        alert("enter a book name");
    }
    else{
        searchcontainer.classList.add("gotop");
        searchcontainer.classList.remove("searchbar")
        load(url+searchbar.value+"&maxResults=20"+key);
    }
});

searchbutton.addEventListener('click',() =>{
    if(searchbar.value=="")
    {
        setTimeout(function(){
        container.innerHTML=``;
        searchcontainer.classList.remove("gotop");
        searchcontainer.classList.add("searchbar")
        //remove the search bar ----
        },200);
        alert("enter a book name");
    }
    else{
        searchcontainer.classList.add("gotop");
        searchcontainer.classList.remove("searchbar")
        load(url+searchbar.value+"&maxResults=20"+key);
    }
});

console.log(url+"sherlock"+key);



