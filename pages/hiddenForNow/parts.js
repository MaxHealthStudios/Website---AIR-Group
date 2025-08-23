const brands = [
    'ABB',
    'Control Techniques',
    'Danfoss',
    'Emerson',
    'Fuji', 
    'Gefran',
    'KEB',
    'Kone',
    'Loher',
    'Macpuarsa',
    'Magnetek',
    'Mitsubishi',
    'Nidec',
    'Omron',
    'Otis',
    'Schindler',
    'Siemens',
    'Thyssen',
    'Vacon',
    'Yaskawa',
    'Ziehl-Abegg'
]

for(let i = 0; i < brands.length; i++){
    document.getElementById("brands-table").innerHTML +=
    `
    <tr>
        <td>${brands[i]}</td>
    </tr>
    `
}

const sortColumn = document.querySelector('th')

sortColumn.addEventListener('click', () => {
    sortColumn.classList.toggle('active');
    document.getElementById("brands-table").innerHTML = `<tr><th>ALL BRANDS</th></tr>`
    if(brands[0] == 'ABB'){
        brands.reverse()
    } else {
        brands.reverse()
        brands.reverse()
    }
    
    for(let i = 0; i < brands.length; i++){
        document.getElementById("brands-table").innerHTML +=
        `
        <tr>
            <td>${brands[i]}</td>
        </tr>
        `
    }
})


document.querySelector('input').addEventListener('keyup', Filter)
function Filter (){
    console.log(document.querySelector('input').value)
    let searchValue = document.querySelector('input').value

    document.getElementById("brands-table").innerHTML = `<tr><th>ALL BRANDS</th></tr>`

    for(let i = 0; i < brands.length; i++){
        if(!brands[i].includes(" ") && !brands[i].includes("-") && brands[i].toLowerCase().startsWith(searchValue.toLowerCase())) {
            document.getElementById("brands-table").innerHTML +=
            `
            <tr>
                <td>${brands[i]}</td>
            </tr>
            `
        }
        if(brands[i].includes(" ")) {
            let splitStrings = brands[i].split(" ")
            for(let ii = 0; ii < splitStrings.length; ii++){
                if(splitStrings[ii].toLowerCase().startsWith(searchValue.toLowerCase())) {
                    document.getElementById("brands-table").innerHTML +=
                    `
                    <tr>
                        <td>${brands[i]}</td>
                    </tr>
                    `
                    break
                }
            }
        }
        if(brands[i].includes("-")) {
            let splitStrings = brands[i].split("-")
            for(let ii = 0; ii < splitStrings.length; ii++){
                if(splitStrings[ii].toLowerCase().startsWith(searchValue.toLowerCase())) {
                    document.getElementById("brands-table").innerHTML +=
                    `
                    <tr>
                        <td>${brands[i]}</td>
                    </tr>
                    `
                    break
                }
            }
        }
    }
}