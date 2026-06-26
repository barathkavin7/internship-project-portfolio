const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute('data-target');
const count = +counter.innerText;

const increment = target / 100;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

console.log("Portfolio Loaded");


/* ===============================
   Demo Credentials Modal
================================= */

const demoModal = document.getElementById("demoModal");
const demoTitle = document.getElementById("demoTitle");
const demoBody = document.getElementById("demoBody");
const demoClose = document.querySelector(".demo-close");

document.querySelectorAll(".demo-btn").forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        const project = this.dataset.project;

        if (project === "restaurant") {

            demoTitle.innerHTML = "Restaurant ERP Demo Accounts";

            demoBody.innerHTML = `
                <table class="demo-table">
                    <tr><td><strong>Administrator</strong></td><td>admin@restaurant.com</td></tr>
                    <tr><td><strong>Manager</strong></td><td>manager@restaurant.com</td></tr>
                    <tr><td><strong>Waiter</strong></td><td>waiter@restaurant.com</td></tr>
                    <tr><td><strong>Chef</strong></td><td>chef@restaurant.com</td></tr>
                    <tr><td><strong>Cashier</strong></td><td>cashier@restaurant.com</td></tr>
                    <tr><td><strong>Customer</strong></td><td>customer@restaurant.com</td></tr>
                </table>

                <div class="demo-password">
                    Password : <strong>abcd1234</strong>
                </div>
            `;

        } else {

            demoTitle.innerHTML = "CampusConnect Demo Accounts";

            demoBody.innerHTML = `
                <table class="demo-table">
                    <tr><td><strong>Student</strong></td><td>jana@gmail.com</td></tr>
                    <tr><td><strong>Recruiter</strong></td><td>jawahar@gmail.com</td></tr>
                </table>

                <div class="demo-password">
                    Password : <strong>abcd1234</strong>
                </div>
            `;

        }

        demoModal.style.display = "flex";

    });

});

demoClose.onclick = () => {
    demoModal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === demoModal) {
        demoModal.style.display = "none";
    }
};

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        demoModal.style.display = "none";
    }
});
