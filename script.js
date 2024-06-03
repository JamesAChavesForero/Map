const routeInfo = (route) => {
    routeObject = {
        "ecRoute" : "#C40C11",
        "wcRoute" : "#E6E01C",
        "nwRoute" : "#BE0BC4",
        "chRoute" : "#0B6DC4",
        "txRoute" : "#DEA812",
        "exRoute" : "#0BC462",
    }

Array.from(document.querySelectorAll(`.${route}`)).forEach(data => {
    data.addEventListener("mouseover",()=>{
        Array.from(document.querySelectorAll(`.${route}`)).forEach(state => state.style.fill = routeObject[`${route}`] )
    })
    data.addEventListener("mouseleave",()=>{
        Array.from(document.querySelectorAll(`.${route}`)).forEach(state => state.style.fill = "#D9D9D9" )
    })
})
}

Array.from(document.querySelectorAll("path")).forEach(el => el.addEventListener("mouseenter", ()=>{
    routeInfo(el.classList.value)
}))