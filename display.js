// Function to calculate age and create a form



function calculate(person, dd, mm, yyyy, formIndex) {
    const currentDate = new Date();

    let rd, rm, ry;
    let cd, cm, cy;

    cd = currentDate.getDate();
    cm = currentDate.getMonth() + 1;
    cy = currentDate.getFullYear();
    va = currentDate.getDay();


    function getDayOfWeek(date) {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayIndex = date.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
        return daysOfWeek[dayIndex];
    }
    
    // Example usage
    const currentDate1 = new Date();
    const birthdayDate = new Date(`${yyyy}-${mm}-${dd}`);
    const birthdayDate1 = new Date(`${cy+1}-${mm}-${dd}`);
    const birthdayDate2 = new Date(`${cy+2}-${mm}-${dd}`);
    const birthdayDate3 = new Date(`${cy+3}-${mm}-${dd}`);
    const birthdayDate4 = new Date(`${cy+4}-${mm}-${dd}`);
    const birthdayDate5 = new Date(`${cy+5}-${mm}-${dd}`);
    const dayOfWeek = getDayOfWeek(currentDate1);
    // console.log("Current day of the week:", dayOfWeek);
    const dayOfWeek2 = getDayOfWeek(birthdayDate);
    const dayOfWeek12 = getDayOfWeek(birthdayDate1);
    const dayOfWeek22 = getDayOfWeek(birthdayDate2);
    const dayOfWeek32 = getDayOfWeek(birthdayDate3);
    const dayOfWeek42 = getDayOfWeek(birthdayDate4);
    const dayOfWeek52 = getDayOfWeek(birthdayDate5);

    



    ry = cy - yyyy;
    rm = cm - mm;
    rd = cd - dd;

    if(rd<0){
        rm-=1;
        rd+=30;
    }
    if (rm<0) {
        ry-=1;
        rm+=12;        
    }

    // if (cm < mm) {
    //     ry -= 1;
    //     rm += 12;
    // }
    // if (cd < dd) {
    //     rm -= 1;
    //     rd += 30;
    // }

    //----------------

    if (mm < 10) {
        mm = "0" + mm;
    }
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (yyyy < 10) {
        yyyy = "0" + yyyy;
    }

    //------------

    if (rm < 10) {
        rm = "0" + rm;
    }
    if (rd < 10) {
        rd = "0" + rd;
    }
    if (ry < 10) {
        ry = "0" + ry;
    }

    let nd ,nm,ny , nrd,nrm,nry;
    nd = dd;
    nm = mm;
    ny = cy+1;

    //ry = cy - yyyy;
    // rm = cm - mm;
    // rd = cd - dd;

    nry = ny - cy;
    nrm = nm - cm;
    nrd = nd - cd;

    if(nrd<0){
        nrm-=1;
        nrd+=30;
    }
    if (nrm<0) {
        nry-=1;
        nrm+=12;        
    }




    const toggle_d = localStorage.getItem("toggle_d");

    const form = document.createElement('form');
    form.innerHTML = `
    <div>
            <input type="text" id="name" placeholder="Name" value="${person}" readonly>
        </div>
        <div id="cdbd">
            <div>
                <label for="cd">Current Date</label>
                <input type="text" id="cd" readonly value="${cd}/${cm}/${cy}">
                <input type="text" id="cd" readonly value="${dayOfWeek}">
            </div>
            <div>
                <label for="bd">Birth Date</label>
                <input type="text" id="bd" readonly value="${dd }/${mm}/${yyyy}">
                <input type="text" id="bd" readonly value="${dayOfWeek2}">
            </div>
        </div>

        <div id="ageymd">
            <div>
                <label for="years">Years</label>
                <input type="text" id="years" readonly value="${ry}">
            </div>

            <div>
                <label for="months">Months</label>
                <input type="text" id="months" readonly value="${rm}">
            </div>

            <div>
                <label for="days">Days</label>
                <input type="text" id="days" readonly value="${rd}">
            </div>
        </div>
        <div id="nbd">
            <h3>Next Birthday</h3>
            <div id="nbdd">
                <div>
                    <label for="nbmonths">Months</label>
                    <input type="text" id="nbmonths" readonly value="${nrm}">
                </div>
                <div>
                    <label for="nbdays">Days</label>
                    <input type="text" id="nbdays" readonly value="${nrd}">
                </div>
            </div>
        </div>
        <div id="extra">
            <h3>Extra</h3>
            <div id="extradiv">
                <div>
                    <label for="wholeyear">Years</label>
                    <input type="text" id="wholeyear" readonly value="${ry}">
                </div>
                <div>

                    <label for="wholemonth">Months</label>
                    <input type="text" id="wholemonth" readonly value="${(ry*12)+parseInt(rm)}">
                </div>
                <div>

                    <label for="wholeweek">Weeks</label>
                    <input type="text" id="wholeweek" readonly value="coming soon">
                </div>
                <div>

                    <label for="wholeday">Days</label>
                    <input type="text" id="wholeday" readonly value="${(((ry*365)+(ry%4))+parseInt(rd))+(parseInt(rm)*30)}">
                </div>
                <div>

                    <label for="wholehour">Hours</label>
                    <input type="text" id="wholehour" readonly value="coming soon">
                </div>
                <div>

                    <label for="wholeminute">Minutes</label>
                    <input type="text" id="wholeminute" readonly value="coming soon">
                </div>
                <div>

                    <label for="wholesecond">Seconds</label>
                    <input type="text" id="wholesecond" readonly value="coming soon">
                </div>
            </div>
        </div>
        <div id="upcd">
            <h3>Upcoming Birthday</h3>
            <div id="upcdd">
                <input type="text" class="left" id="upfyd" readonly value="${dd}/${mm}/${cy+1}">
                <input type="text" class="right" id="upfyvar" readonly value="${dayOfWeek12}">
            </div>
            <div>
                <input type="text" class="left" id="upfyd2" readonly value="${dd}/${mm}/${cy+2}">
                <input type="text" class="right" id="upfyvar2" readonly value="${dayOfWeek22}">
            </div>
            <div>
                <input type="text" class="left" id="upfyd3" readonly value="${dd}/${mm}/${cy+3}">
                <input type="text" class="right" id="upfyvar3" readonly value="${dayOfWeek32}">
            </div>
            <div>
                <input type="text" class="left" id="upfyd4" readonly value="${dd}/${mm}/${cy+4}">
                <input type="text" class="right" id="upfyvar4" readonly value="${dayOfWeek42}">
            </div>
            <div>
                <input type="text" class="left" id="upfyd5" readonly value="${dd}/${mm}/${cy+5}">
                <input type="text" class="right" id="upfyvar5" readonly value="${dayOfWeek52}">
            </div>
        </div>

    <button class="delete-button ${toggle_d}" onclick="deleteForm(${formIndex})">Delete</button>`;

    const formDisplay = document.querySelector('.form_display');
    formDisplay.appendChild(form);
}

// Example usage
// calculate("raman", 12, 8, 2005, 1);
// calculate("tarun", 12, 8, 2006, 2);
// calculate("shory", 12, 8, 2006, 3);

// Function to update the displayed forms
function updateForms() {
    const formDisplay = document.querySelector('.form_display');
    formDisplay.innerHTML = ''; // Clear existing forms

    const FM = localStorage.getItem("Form_NO");
    for (let i = 1; i <= FM; i++) {
        const name = localStorage.getItem("Name" + i);
        const DD = localStorage.getItem("DD" + i);
        const MM = localStorage.getItem("MM" + i);
        const YYYY = localStorage.getItem("YYYY" + i);

        if (name == null) {

        } else {
            calculate(name, parseInt(DD), parseInt(MM), parseInt(YYYY), i);
        }
    }
}

// Initial update of forms
updateForms();

// Auto-update the forms every 10 seconds
setInterval(updateForms, 100); // 10,00 milliseconds = 1 seconds

// Function to delete the form and remove from localStorage
function deleteForm(formIndex) {
    localStorage.removeItem("Name" + formIndex);
    localStorage.removeItem("DD" + formIndex);
    localStorage.removeItem("MM" + formIndex);
    localStorage.removeItem("YYYY" + formIndex);

    // Update the displayed forms after deletion
    updateForms();
}

let deleteButtonVisible = false;  // Variable to track delete button visibility

function toggleClass() {
    // const deleteButtons = document.querySelectorAll('.delete-button');
    // for (const button of deleteButtons) {
    //     // button.classList.toggle('block');
    //     button.classList.remove('dnone');
    // }
    if (localStorage.getItem("toggle_d") === null) {
        localStorage.setItem("toggle_d", "dnone")
    }
    if (localStorage.getItem("toggle_d") == "dnone") {
        localStorage.setItem("toggle_d", "block");
    } else {
        localStorage.setItem("toggle_d", "dnone")
    }
}

// Rest of your JavaScript code remains unchanged
// <div class="form_element">
//         <label for="name">Age</label>
//         <input type="text" id="age" value="${ry} years ${rm} months ${rd} days" readonly>
//     </div>

function reform() {
    localStorage.setItem("First", "0")
    window.location.href = "index1.html";
}