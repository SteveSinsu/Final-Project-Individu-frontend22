window.addEventListener("load", function(){
    let filter = document.getElementById("searchBox");

    filter.addEventListener("keyup", function(){
        var search = this.value.toLowerCase();
        var all = document.querySelectorAll("#list li")

        for (let i of all){
            let item = i.innerHTML.toLowerCase();
            if (item.indexOf(search) == -1) {
                i.classList.add("hide");
            }
            else {
                i.classList.remove("hide");
            }
        }
    });
});

function darkMode(){
    document.body.style.background="#292929"    
    document.querySelector('.biodata_kiri').style.backgroundColor="#ffa31a";
    document.querySelector('.biodata_kanan').style.backgroundColor="#808080";            

}

function lightMode(){
    document.body.style.background="#e7fcfe"
    document.querySelector('.biodata_kiri').style.backgroundColor="#4eabff";
    document.querySelector('.biodata_kanan').style.backgroundColor="#fff";        
    // document.querySelector('.biodata_kanan p').style.display="none";           
}