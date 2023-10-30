$(document).ready(function () {
    hoverer();
    $(".innernavmob").hide();
    partsix();
});
var lilist = [];
var widthrealtime = document.getElementById("bodymain").offsetWidth;
const mainolhoverpart = document.querySelector(".twosectiondiv").querySelector("ol");
const maindivhoverpart = document.querySelector(".twosectiondiv").querySelector(".hiddenbase");
var checkbeforefunc = false;
lilist.push(mainolhoverpart, maindivhoverpart);
function move() {
    let numberofchange = document.querySelectorAll(".innercarpart2top");
    let everydivs;
    for (var x = 0; x < numberofchange.length; x++) {
        everydivs = numberofchange[x].querySelectorAll(".innercarpart2topdiv");
        let mywidth = numberofchange[x].offsetWidth
        let thiswidth = mywidth + 20;
        for (var y = 1; y < everydivs.length; y++) {
            everydivs[y].style = "transform: translateX(" + thiswidth + "px);";
            thiswidth = thiswidth + mywidth;
        }
    }
}
move()
function clicker() {
    let indicatorss = $(".carusindicators").children();
    indicatorss.click(moveto)

};
clicker();
function moveto() {
    let numberofli = event.target.getAttribute("data-li-indexe");
    numberofli = Number(numberofli);
    let numberliselect = event.target.parentNode.querySelector(".active-this-one").getAttribute("data-li-indexe");
    numberliselect = Number(numberliselect);
    let activecheker = event.target.getAttribute("class");
    let checkactive;
    if (activecheker !== null) {
        checkactive = activecheker.includes("active-this-one");
        if (checkactive) {
            console.log(1)
        } else {
            event.target.parentNode.querySelector(".active-this-one").classList.remove("active-this-one");
            event.target.classList.add("active-this-one");
            let abas = event.target.parentNode.parentNode.querySelector(".innercarpart2top");
            let abaschild = abas.querySelectorAll(".innercarpart2topdiv");
            let mywidth = abas.offsetWidth;
            let thiswidth = mywidth + 20;

            for (let divtar = 0; divtar < numberofli; divtar++) {
                abaschild[divtar].style = "transform: translateX(" + (-1 * thiswidth) + "px);";
                thiswidth = thiswidth + mywidth;
            }
            abaschild[numberofli].style = "transform: translateX(0px);";
            thiswidth = mywidth + 20;
            for (let divtar = (numberofli + 1); divtar < abaschild.length; divtar++) {
                abaschild[divtar].style = "transform: translateX(" + thiswidth + "px);";
                thiswidth = thiswidth + mywidth;

            };
        }
    } else {
        console.log(10)
    };
}
function partsix() {
    widthrealtime = document.getElementById("bodymain").offsetWidth;
    if (widthrealtime < 768) {
        mainolhoverpart.remove();
        maindivhoverpart.classList.remove("hiddenbase");
        document.querySelector(".innerdvshov").classList.add("showmobilesiz");
        let divpaz = document.querySelectorAll(".innerhoverpart>div");
        let innerdivv = lilist[0].querySelectorAll(".lihoverinnersection");
        var ressult = " ";
        for (let divoo = 0; divoo < divpaz.length; divoo++) {
            divpaz[divoo].classList.remove("nonerdisp");
            ressult = ressult + "<div >" + innerdivv[divoo].innerHTML + "</div>"
        }
        if (document.querySelector(".mobilesection") == null) {
            let divmaker = document.createElement("div");
            divmaker.classList.add("mobilesection");
            divmaker.innerHTML = ressult
            document.querySelector(".twosectiondiv").appendChild(divmaker)
            // let reset = document.querySelector(".mobilesection");
            // document.querySelector(".mobilesection").remove();
            // document.querySelector(".twosectiondiv").appendChild(reset);
            let divul = document.createElement("div");
            divul.classList.add("mobile-hover-ul-div");
            document.querySelector(".twosectiondiv").appendChild(divul);
            let ulmaker = document.createElement("ul");
            ulmaker.classList.add("mobile-hover-ul");
            document.querySelector(".mobile-hover-ul-div").appendChild(ulmaker);
            for(let linumber = 0 ; linumber < divpaz.length ; linumber++){
                let limaker = document.createElement("li");
                limaker.classList.add("mobile-hover-li");
                limaker.addEventListener("click", movehover);
                limaker.dataset.movetohover = linumber;
                document.querySelector(".mobile-hover-ul").appendChild(limaker);
            }
            document.querySelector(".mobile-hover-ul>li").classList.add("activate-li")
        }
    } else {
        let checkmobtolg = document.querySelector(".showmobilesiz");
        let checkmobtolg2 = document.querySelector(".mobilesection");
        let checkmobtolg3 = document.querySelector(".mobile-hover-ul-div");
        $(".innerdvshov").css("transform", "translateX(0)");
        let checkerlistho = document.querySelector(".twosectiondiv").querySelector("hiddenbase")
        if (checkerlistho == null) {
            if (checkmobtolg == null) {
                document.querySelector(".twosectiondiv").appendChild(lilist[0]);
                document.querySelector(".twosectiondiv").appendChild(maindivhoverpart);
                document.querySelector(".innerdvshov").classList.remove("showmobilesiz");
                document.querySelector(".innerdvshov").classList.add("hiddenbase");
                let divhider = document.querySelectorAll("div[data-divhoverp]");
                for (let dinsections = 0; dinsections < divhider.length; dinsections++) {
                    divhider[dinsections].classList.add("nonerdisp")
                }
                hoverer()

            } else {
                checkmobtolg.remove();
                checkmobtolg2.remove();
                checkmobtolg3.remove();

            }
        }
    }
}
function movehover(){
    let imgwidth = document.querySelector(".twosectiondiv").offsetWidth;
    let discwidth = document.querySelector(".activdivhover").offsetWidth;
    // let numberactivate = document.querySelector(".activate-li").dataset.movetohover;
    // numberactivate = Number(numberactivate);
    let targetactivate = event.target.dataset.movetohover;
    targetactivate = Number(targetactivate);
    // if(targetactivate < numberactivate){
    //     $(".showmobilesiz").css("transform", "translateX(" + (targetactivate * (discwidth + 20)) +"px)");
    //     $(".mobilesection").css("transform", "translateX(" + (targetactivate * imgwidth) +"px)");
    //     console.log(discwidth)
    // }else{
        $(".showmobilesiz").css("transform", "translateX(" + (targetactivate * -1 * (discwidth + 20)) +"px)");
        $(".mobilesection").css("transform", "translateX(" + (targetactivate * -1 * imgwidth ) +"px)");
    //     console.log(discwidth)
    // }
    document.querySelector(".activate-li").classList.remove("activate-li");
    event.target.classList.add("activate-li")
}
function hoverer() {
    let hoverforli = document.querySelectorAll(".twosectiondiv>ol>li");
    for (let litotal = 0; litotal < hoverforli.length; litotal++) {
        hoverforli[litotal].addEventListener("mouseover", blocker)
    }
    // console.log(hoverforli)
}
function blocker() {
    let selectdivhov = event.target.getAttribute("data-popblock");
    selectdivhov = Number(selectdivhov);
    if (selectdivhov != 0) {
        document.querySelector(".activdivlihover").classList.remove("activdivlihover");
        event.target.querySelector(".lihoverinnersection").classList.add("activdivlihover");
        document.querySelector(".activlihover").classList.remove("activlihover")
        event.target.classList.add("activlihover")
        document.querySelector(".activdivhover").classList.remove("activdivhover");
        document.querySelectorAll("div[data-divhoverp]")[selectdivhov - 1].classList.add("activdivhover");
    }

}

function myFunction2() {
    widthrealtime = document.getElementById("bodymain").offsetWidth;
    if (widthrealtime < 768 && checkbeforefunc != true ) {
        $(".hidddencustom").hide();
        $(".footeruls>div").click(showuls);
        checkbeforefunc = true;
    }
    if (widthrealtime > 769) {
        $(".hidddencustom").show();
        $(".footeruls>div").off();
        checkbeforefunc = false ;
    }
}

window.addEventListener("resize", partsix);


window.addEventListener("resize", myFunction2);

function mainshowdata(data) {
    console.log($(data))
    $(data).toggle();
}
function sideshowdata(data) {
    $(data).toggle();
};
function showuls() {
    let showdata = event.target.getAttribute("data-ulshow");
    if ($(".activefooterul").length = 0) {
        $(showdata).addClass("activefooterul");
        $(".activefooterul").slideDown();
        $(event.target)[0].querySelector("img").style = "transform: rotate(180deg);";
    } else {
        let checkerselfselect = $(event.target).next()[0].getAttribute("class");
        if (checkerselfselect.includes("activefooterul")) {
            $(".activefooterul").slideUp();
            $(".footeruls img").css("transform", "rotate(0deg)");
            $(".activefooterul").removeClass("activefooterul");
        } else {
            $(".activefooterul").slideUp();
            $(".footeruls img").css("transform", "rotate(0deg)");
            $(".activefooterul").removeClass("activefooterul");
            $(showdata).addClass("activefooterul");
            $(".activefooterul").slideDown();
            $(event.target)[0].querySelector("img").style = "transform: rotate(180deg);";
        }
    }
}
function closernav(data) {
    $(data).toggle();
}
function movetodiv(data) {
    document.querySelector(".activemobnav").classList.remove("activemobnav");
    document.getElementById(data).classList.add("activemobnav");
    let navmobwidth = event.target.parentNode.parentNode.offsetWidth;
    document.querySelector(".left-side-inner").style = "transform: translateX(" + (-1 * (navmobwidth + 30)) + "px);"
    document.querySelector(".right-side-inner").style = "transform: translateX(" + (-1 * (navmobwidth + 30)) + "px);"
}
function refreshnav() {
    document.querySelector(".left-side-inner").style = "transform: translateX(0);";
    document.querySelector(".right-side-inner").style = "transform: translateX(0);";
}
function opendiv(data) {
    let minitabdiv = document.querySelector(" " + data + " ").getAttribute("class")
    if (minitabdiv.includes("nonerdisp")) {
        $(".nav-mob-hidden").addClass("nonerdisp");
        $(data).removeClass("nonerdisp");
    } else {
        $(data).addClass("nonerdisp");
    }
}