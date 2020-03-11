window.addEventListener('DOMContentLoaded', () => {

    var test1 = document.getElementById("calendrier");
    var test2 = document.getElementById("articles");
    var test3 = document.getElementById("boutiques");
    var test4 = document.getElementById("propos");
    
    /*************** recuper les div */
    
    var div1 = document.getElementById("pageune");
    var div2 = document.getElementById("pagedeux");
    var div3 = document.getElementById("pagetrois");
    var div4 = document.getElementById("pagequatre");
    
    let touteLesDiv = document.getElementsByClassName('page')
    
    
    test1.addEventListener('click', function () {
    // alert('Element clicked through function!');
    test1.classList.add('active');
    test2.classList.remove('active');
    test3.classList.remove('active');
    test4.classList.remove('active');
    div1.classList.add("hide");
    div2.classList.add("hide");
    div3.classList.add("hide");
    div4.classList.add("hide");
    div1.classList.remove("hide");
    });
    
    test2.addEventListener('click', function () {
    // alert('Element clicked through function!');
    
    div1.classList.add("hide");
    div2.classList.add("hide");
    div3.classList.add("hide");
    div4.classList.add("hide");
    div2.classList.remove("hide");
    test2.classList.add('active');
    test1.classList.remove('active');
    test3.classList.remove('active');
    test4.classList.remove('active');
    });
    
    test3.addEventListener('click', function () {
    // alert('Element clicked through function!');
    
    div1.classList.add("hide");
    div2.classList.add("hide");
    div3.classList.add("hide");
    div4.classList.add("hide");
    div3.classList.remove("hide");
    test3.classList.add('active');
    test2.classList.remove('active');
    test1.classList.remove('active');
    test4.classList.remove('active');
    });
    test4.addEventListener('click', function () {
    // alert('Element clicked through function!');
    
    div1.classList.add("hide");
    div2.classList.add("hide");
    div3.classList.add("hide");
    div4.classList.add("hide");
    div4.classList.remove("hide");
    test4.classList.add('active');
    test2.classList.remove('active');
    test3.classList.remove('active');
    test1.classList.remove('active');
    });

    
    /**** navigation */

    let dateDebut = document.getElementById('debutDate');
    let dateFin = document.getElementById('finDate');
    let dateUnique = document.getElementById('laDate');
    let choixCat = document.getElementById('categorieChoix');
    let rechercheTitre = document.getElementById('searchduTitre');
    
    // Les div des articles
    let articles = document.getElementsByClassName('lArticle');
    // Annuler
    let annule = document.getElementById('annuler');

    // Tri texte
    rechercheTitre.addEventListener("change", function recherche() {
    let result = rechercheTitre.value;
    
    for (let index = 0; index < articles.length; index++) {
        const elementDiv = articles[index];
        const element = articles[index].getElementsByClassName('articleTitre');
        for (let y = 0; y < element.length; y++) {
            const elementTitre = element[y].innerText;
            let motTitre = elementTitre.split(' ');
            for (let w = 0; w < motTitre.length; w++) {
                const lemot = motTitre[w];
                
                if (lemot !== result) {
                elementDiv.classList.add('hide');
                }
                else{
                elementDiv.classList.add('valide');
                annule.classList.remove('hide')
                }
            }
    }
    }
    });
    choixCat.addEventListener("change", function rechercheCat() {
    let result = choixCat.value;
    for (let index = 0; index < articles.length; index++) {
    const elementDiv = articles[index];
    const element = articles[index].getElementsByClassName('articleCat');

    for (let y = 0; y < element.length; y++) {
    const elementTitre = element[y].innerText;
    let uneCat = elementTitre.split("|")

    for (let i = 0; i < uneCat.length; i++) {
    const elementCat = uneCat[i];

    if (elementCat == result) {
    elementDiv.classList.add('valide');
    annule.classList.remove('hide')
    }

    else{
    elementDiv.classList.add('hide');
    }

    }
    }
    }
    });


    // Tri date à partir du
    dateUnique.addEventListener("change", function rechercheCat() {
    let result = dateUnique.value;

    let arrDate = result.split("-")
    let newDate = arrDate[2]+"/"+arrDate[1]+"/"+arrDate[0]

    var date1 = new Date();
    date1.setFullYear(newDate.substr(6,4));
    date1.setMonth(newDate.substr(3,2));
    date1.setDate(newDate.substr(0,2));
    date1.setHours(0);
    date1.setMinutes(0);
    date1.setSeconds(0);
    date1.setMilliseconds(0);
    var d1=date1.getTime()

    for (let index = 0; index < articles.length; index++) {
    const elementDiv = articles[index];
    const element = articles[index].getElementsByClassName('artDate');

    for (let y = 0; y < element.length; y++) {
    const elementTitre = element[y].innerText;
    var date2 = new Date();
    date2.setFullYear(elementTitre.substr(6,4));
    date2.setMonth(elementTitre.substr(3,2));
    date2.setDate(elementTitre.substr(0,2));
    date2.setHours(0);
    date2.setMinutes(0);
    date2.setSeconds(0);
    date2.setMilliseconds(0);
    var d2=date2.getTime()


    if (d1 <= d2) {
    elementDiv.classList.remove('hide');
    annule.classList.remove('hide')

    }
    else{
    elementDiv.classList.remove('valide');
    elementDiv.classList.add('hide');

    }

    }
    }
    });
    dateFin.addEventListener("change", function rechercheCat() {
    let result2 = dateDebut.value;
    if (result2 !== "undefined" && result2 !== "null" && result2 !== " " && result2 !== "") {

    let result = dateFin.value;

    let arrDate = result.split("-")
    let newDate = arrDate[2]+"/"+arrDate[1]+"/"+arrDate[0]

    var date1 = new Date();
    date1.setFullYear(newDate.substr(6,4));
    date1.setMonth(newDate.substr(3,2));
    date1.setDate(newDate.substr(0,2));
    date1.setHours(0);
    date1.setMinutes(0);
    date1.setSeconds(0);
    date1.setMilliseconds(0);
    var d1=date1.getTime();
    let arrDate2 = result2.split("-")
    let newDate2 = arrDate2[2]+"/"+arrDate2[1]+"/"+arrDate2[0]

    var date3 = new Date();
    date3.setFullYear(newDate2.substr(6,4));
    date3.setMonth(newDate2.substr(3,2));
    date3.setDate(newDate2.substr(0,2));
    date3.setHours(0);
    date3.setMinutes(0);
    date3.setSeconds(0);
    date3.setMilliseconds(0);
    var d3=date3.getTime();

    for (let index = 0; index < articles.length; index++) {
    const elementDiv = articles[index];
    const element = articles[index].getElementsByClassName('artDate');

    for (let y = 0; y < element.length; y++) {
    const elementTitre = element[y].innerText;
    var date2 = new Date();
    date2.setFullYear(elementTitre.substr(6,4));
    date2.setMonth(elementTitre.substr(3,2));
    date2.setDate(elementTitre.substr(0,2));
    date2.setHours(0);
    date2.setMinutes(0);
    date2.setSeconds(0);
    date2.setMilliseconds(0);
    var d2=date2.getTime()

    if (d1 >= d2 && d3 <= d2) {
    elementDiv.classList.remove('hide');
    annule.classList.remove('hide')

    }
    else{
    elementDiv.classList.remove('valide');
    elementDiv.classList.add('hide');

    }

    }
    }

    }
    else{


    }

    });
    dateDebut.addEventListener("change", function rechercheCat() {
    let result2 = dateDebut.value;
    let result = dateFin.value;
    if (result !== "undefined" && result !== "null" && result !== " " && result !== "") {


    let arrDate = result.split("-")
    let newDate = arrDate[2]+"/"+arrDate[1]+"/"+arrDate[0]

    var date1 = new Date();
    date1.setFullYear(newDate.substr(6,4));
    date1.setMonth(newDate.substr(3,2));
    date1.setDate(newDate.substr(0,2));
    date1.setHours(0);
    date1.setMinutes(0);
    date1.setSeconds(0);
    date1.setMilliseconds(0);
    var d1=date1.getTime();
    let arrDate2 = result2.split("-")
    let newDate2 = arrDate2[2]+"/"+arrDate2[1]+"/"+arrDate2[0]

    var date3 = new Date();
    date3.setFullYear(newDate2.substr(6,4));
    date3.setMonth(newDate2.substr(3,2));
    date3.setDate(newDate2.substr(0,2));
    date3.setHours(0);
    date3.setMinutes(0);
    date3.setSeconds(0);
    date3.setMilliseconds(0);
    var d3=date3.getTime();

    for (let index = 0; index < articles.length; index++) {
    const elementDiv = articles[index];
    const element = articles[index].getElementsByClassName('artDate');

    for (let y = 0; y < element.length; y++) {
    const elementTitre = element[y].innerText;
    var date2 = new Date();
    date2.setFullYear(elementTitre.substr(6,4));
    date2.setMonth(elementTitre.substr(3,2));
    date2.setDate(elementTitre.substr(0,2));
    date2.setHours(0);
    date2.setMinutes(0);
    date2.setSeconds(0);
    date2.setMilliseconds(0);
    var d2=date2.getTime()

    if (d1 >= d2 && d3 <= d2) {
    elementDiv.classList.remove('hide');
    annule.classList.remove('hide')

    }
    else{
    elementDiv.classList.add('hide');
    elementDiv.classList.remove('valide');

    }

    }
    }

    }
    else{


    }

    });
    annule.addEventListener("click", function rechercheCat() {

    for (let index = 0; index < articles.length; index++) {
    const elementDiv = articles[index];
    elementDiv.classList.remove('hide');
    elementDiv.classList.remove('valide');
    annule.classList.add('hide');
    }

    });

});