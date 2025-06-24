let formEl = document.getElementById("color-picker-form")

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    let baseColor = {} //seed color
    let formData = new FormData(formEl)
    for (const [key, properties] of formData) {
        baseColor[key] = properties
    }
    console.log(baseColor)
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor.color.slice(1)}&mode=${baseColor.mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.colors)
            const colors = data.colors.map(color => color.hex.value)
            console.log(colors)
            document.getElementById("color-scheme").innerHTML = colors.map(color =>
                `
                    <div>
                        <div class="color-container" style="background-color:${color};"></div>
                        <p>${color}</p>
                    </div>
                `
            ).join("")
        })
})