const newHFColor = localStorage.getItem("hf-color")
const bodycolor = localStorage.getItem("background-color")
    localStorage.setItem("hf-color", newHFColor);
    const chfc = document.querySelector("header");
    chfc.style.backgroundColor = newHFColor;
    const cfhc = document.querySelector("footer");
    cfhc.style.backgroundColor = newHFColor;

    const body1 = document.querySelector("#body1");
    body1.style.backgroundColor = bodycolor;

        // Retrieve the number of forms and names from localStorage
        const form_no = localStorage.getItem("Form_NO");

        // Loop through and populate the <select> elements
        for (let i = 1; i <= form_no; i++) {
            const names = localStorage.getItem(`Name${i}`);
            const selectElements = document.querySelectorAll("#person1");
    
            selectElements.forEach((select) => {
                const option = document.createElement("option");
                option.value = i;
                option.text = names;
                option.id = names;
                select.appendChild(option);
            });
    
            const selectElements2 = document.querySelectorAll("#person2");
    
            selectElements2.forEach((select) => {
                // const select2 = document.querySelector("#select2")
                const option = document.createElement("option");
                option.value = i;
                option.text = names;
                option.id = names + "2";
                select.appendChild(option);
            });
        }
        const calulate_btn = document.querySelector("#calulate_btn")
        calulate_btn.addEventListener("click", () => {
    
            const output_display = document.querySelector(".output_display")
            output_display.style.display = "block"
    
            const sponev = document.querySelector("#person1").value;
            const sptwov = document.querySelector("#person2").value;
            const o_d_p = document.querySelector("#o_d_p")
            const o_d_p1 = document.querySelector("#o_d_p1")
            o_d_p1.style.display = "none"
    
            i = sponev
            j = sptwov
    
    
            if (sponev == "select" && sptwov == "select") {
                o_d_p1.innerHTML = "Please Select The Options"
                o_d_p1.style.display = "block"
                output_display.style.display = "none"
            }
            else if (sponev == sptwov) {
                o_d_p1.innerHTML = "Please Select The Difference Person"
                o_d_p1.style.display = "block"
                output_display.style.display = "none"
            }
            else if (sponev == "select" || sponev == "" || sponev == "null" || sponev == "Null") {
                o_d_p1.innerHTML = "Please Select The Option in Person 1"
                o_d_p1.style.display = "block"
                output_display.style.display = "none"
            }
            else if (sptwov == "select" || sptwov == "" || sptwov == "null" || sptwov == "Null") {
                o_d_p1.innerHTML = "Please Select The Option in Person 2"
                o_d_p1.style.display = "block"
                output_display.style.display = "none"
            } else {
                o_d_p1.style.display = "none"
            }
    
    
    
            const name1 = localStorage.getItem("Name" + i);
            const DD1 = localStorage.getItem("DD" + i);
            const MM1 = localStorage.getItem("MM" + i);
            const YYYY1 = localStorage.getItem("YYYY" + i);
    
            const name2 = localStorage.getItem("Name" + j);
            const DD2 = localStorage.getItem("DD" + j);
            const MM2 = localStorage.getItem("MM" + j);
            const YYYY2 = localStorage.getItem("YYYY" + j);
    
            let Outy, Outm, Outd, greater;
    
            if (YYYY1 < YYYY2) {
                Outy = YYYY2 - YYYY1
                Outm = MM2 - MM1
                Outd = DD2 - DD1
                greater="name2"
            }
            else if (YYYY1 == YYYY2) {
                if (MM1 < MM2) {
                    Outy = YYYY2 - YYYY1
                    Outm = MM2 - MM1
                    Outd = DD2 - DD1
                    greater="name2"
                }
                else if (MM1 == MM2) {
                    if (DD1 < DD2) {
                        Outy = YYYY2 - YYYY1
                        Outm = MM2 - MM1
                        Outd = DD2 - DD1
                        greater="name2"
                    }
                    else if (DD1 == DD2) {
                        //age is Same
                        Outy = YYYY2 - YYYY1
                        Outm = MM2 - MM1
                        Outd = DD2 - DD1
                        greater="same"
                    }
                    else {
                        Outy = YYYY1 - YYYY2
                        Outm = MM1 - MM2
                        Outd = DD1 - DD2
                        greater="name1"
                    }
                }
                else {
                    Outy = YYYY1 - YYYY2
                    Outm = MM1 - MM2
                    Outd = DD1 - DD2
                    greater="name1"
                }
            }
            else {
                Outy = YYYY1 - YYYY2
                Outm = MM1 - MM2
                Outd = DD1 - DD2
                greater="name1"
            }
    
    
            if (Outd < 0) {
                Outm -= 1;
                Outd += 30;
            }
            if (Outm < 0) {
                Outy -= 1;
                Outm += 12;
            }
    
            if (Outm < 10) {
                Outm = "0" + Outm;
            }
            if (Outd < 10) {
                Outd = "0" + Outd;
            }
            if (Outy < 10) {
                Outy = "0" + Outy;
            }
    

            if(greater == "name2"){
            document.querySelector("#greate").innerHTML = `${name1} is Older Than ${name2}`
            }
            else if(greater == "name1"){
               document.querySelector("#greate").innerHTML = `${name2} is Older Than ${name1}`  
            }
            else{
                document.querySelector("#greate").innerHTML = `The Age Of ${name2} And ${name1} Is Same`
            }
    
            o_d_p.innerHTML = `The Difference In Age Of ${name1} And ${name2} Is`
            document.querySelector("#outy").value = Outy
            document.querySelector("#outm").value = Outm
            document.querySelector("#outd").value = Outd
    
        })
    
        const back = document.querySelector("i")
        back.addEventListener("click", () => {
            window.location.href = "display.html"
        })
    
    //     const person1 = document.querySelector("#person1");
    
    // person1.addEventListener("input", () => {
    //     const selectedOptionValue = person1.innerHTML;
    //     const displayblock = document.querySelector(`#${selectedOptionValue}2`);
    //     // Now you can work with displayblock based on the selectedOptionValue
    // });
    
    
