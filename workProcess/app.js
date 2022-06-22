function solve() {
    let firstNameEl = document.getElementById('fname')
    let lastNameEl = document.getElementById('lname')
    let emailEl = document.getElementById('email')
    let birthEl = document.getElementById('birth')
    let positionEl = document.getElementById('position')
    let salaryEl = document.getElementById('salary')

    let addWorkerBtn = document.getElementById('add-worker')
    addWorkerBtn.addEventListener('click', addWorker)

    let tableEl = document.getElementById('tbody')
    let sum = document.getElementById('sum')
    let totalSum = 0

    function addWorker(e) {
        e.preventDefault()

        let firstName = firstNameEl.value
        let lastName = lastNameEl.value
        let email = emailEl.value
        let birth = birthEl.value
        let position = positionEl.value
        let salary = salaryEl.value

        if(firstName == '' || lastName == '' || email == '' || birth == '' || position == '' || salary == ''){
            return
        }

        let tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${birth}</td>
            <td>${position}</td>
            <td>${salary}</td>
            <td><button class="fired">Fired</button> <button class="edit">Edit</button></td>
        `
        let editBtn = tr.querySelector('.edit')
        editBtn.addEventListener('click', edit)
        let firedBtn = tr.querySelector('.fired')
        firedBtn.addEventListener('click', fired)
        totalSum += Number(salary)
        tableEl.appendChild(tr)

        sum.textContent = totalSum.toFixed(2)

        firstNameEl.value = ''
        lastNameEl.value = ''
        emailEl.value = ''
        birthEl.value = ''
        positionEl.value = ''
        salaryEl.value = ''

        function edit(e) {
            firstNameEl.value = firstName
            lastNameEl.value = lastName
            emailEl.value = email
            birthEl.value = birth
            positionEl.value = position
            salaryEl.value = salary

            totalSum -= Number(salary)
            sum.textContent = totalSum.toFixed(2)

            e.target.parentNode.parentNode.remove()
        }

        function fired(e) {
            totalSum -= Number(salary)
            sum.textContent = totalSum.toFixed(2)

            e.target.parentNode.parentNode.remove()

        }
    }    
}
solve()