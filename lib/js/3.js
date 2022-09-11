var cont = document.querySelector(".cont")
    var elstr = [].slice.call(document.querySelectorAll(".el"));
    var closeBtnsArr = [].slice.call(document.querySelectorAll(".el_close-btn"));

    setTimeout(function(){
        cont.classList.remove("s-inactive")
    },200)

    elstr.forEach(function ($el) {
        $el.addEventListener("click", function () {
            if (this.classList.contains("s-active")) return;
            cont.classList.add("s-el-active")
            this.classList.add("s-active");
        })
    })

    closeBtnsArr.forEach(function ($el) {
        $el.addEventListener("click", function (e) { 
            e.stopPropagation()
            cont.classList.remove("s-el-active")
            document.querySelector(".el.s-active").classList.remove("s-active");
        })
    })