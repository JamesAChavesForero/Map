console.log("script executed")


document.getElementById("trigger").addEventListener("click", ()=>{
    document.getElementById("map").style.display = "flex"
    document.getElementById("overlay").classList.remove("hide")
    document.getElementById("trigger").classList.add("hide")
})
document.getElementById("backTrigger").addEventListener("click", ()=>{
    document.getElementById("map").styles.display = "none"
    document.getElementById("overlay").classList.add("hide")
    document.getElementById("backTrigger2").addEventListener("click",()=>{
        document.getElementById("map").classList.remove("hide")
    document.getElementById("overlay").classList.remove("hide")
    document.getElementById("trigger").classList.add("hide")
    })
})