let form = document.forms.addForm
let table = document.querySelector('table')
const url = "http://localhost:3001/users"

function fetchUsers() {
    axios.get(url)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                reload(res.data)
            }
        })
}
fetchUsers()

form.onsubmit = event => {

    event.preventDefault()

    let user = {

        id: Math.round(Math.random())

    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {

        user[key] = value

    })

    user.year = new Date().getFullYear() - user.year

    axios.post(url, user)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                fetchUsers()
            }
        })

}



const reload = (arr) => {

    table.innerHTML = ''

    for (let item of arr) {

        table.innerHTML += `
        <tr>
                <td>${arr.indexOf(item) + 1}</td>
                <td>${item.name}</td>
                <td>${item.year}</td>
                <td>
                <button>edite</button>
                <button class="button">delete</button>
                </td>
                </tr>
                `





















            }
        }



        
        // let btns = document.querySelectorAll(".button")

        // btns.forEach((btn) => {


        //     btn.onclick = () => {
        //         let delete_ = arr.indexOf(item)
        //         arr.splice(delete_, 1)
        //         axios.delete(`http://localhost:3001/users/${delete_ + 1}`)
        //             .then(res => res.data);
        //         reload(arr)
        //     }
        // })