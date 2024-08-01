const btn1=document.querySelector('.btn1');
const btn2=document.querySelector('.btn2');
const btn3=document.querySelector('.btn3');

var result=document.querySelector('#result');

btn1.addEventListener("click",getTxtFile);

function getTxtFile(){
    fetch("numune.txt").then(respone => respone.text()).then(data => {result.innerHTML+=data;});
}

btn2.addEventListener("click",getJSON);

function getJSON(){
    fetch("numune.json").then(response => response.json()).then(articles => {
        let str="<ul>";
        articles.forEach(function(article) {
            str+=`<li>Ad : ${article.Ad}<br>Soyad : ${article.Soyad}<br>Yaş : ${article.Yas}<br>Boy : ${article.Boy}</li>`
        });
        str+="</ul>";
        result.innerHTML+=str;
    });
}


btn3.addEventListener("click",getAPI);

function getAPI(){
    fetch("https://api.github.com/users").then(response => response.json()).then(APImelumatlari => {
        let str="<ul>";
        APImelumatlari.forEach(function(APImelumat){
            str+=`<li>ID : ${APImelumat.id}<br>LonIn : ${APImelumat.login}<br>Node_ID : ${APImelumat.node_id}<br>Avatar_URL : ${APImelumat.avatar_url}<br>Gists_URL : ${APImelumat.gists_url}<br>Type : ${APImelumat.type}<br>organizations_url : ${APImelumat.organizations_url}</li>`;
        });
        str+="</ul>";
        result.innerHTML+="<br><br><br>"+str;
    });
}