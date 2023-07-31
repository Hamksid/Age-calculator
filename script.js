        const btn = document.getElementById("btn");
        const birthday = document.getElementById("birth-input");
        const result = document.getElementById("result");
        
        birthday.addEventListener("focus",()=>{
            birthday.style.backgroundColor ="#223";
            birthday.style.color ="orange";
        })
        
        function getAge(birthdayValue) {
            const currentDate = new Date();
            const birthdayDate = new Date(birthdayValue);
            let age = currentDate.getFullYear() - birthdayDate.getFullYear();
            const month = currentDate.getMonth() - birthdayDate.getMonth();
        
            if (month < 0 ||
                (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
                age--;
            }
        
            return age;
        }
        
        const calculateAge = () =>{
            const birthdayValue = birthday.value;
            if (birthdayValue === "") {
                alert("please enter your birthday")
            }else{
                const age =getAge(birthdayValue);
                result.innerText = `Your age is ${age} ${age > 1 ? "years": "years"} old`;
            }
        }
        
        btn.addEventListener("click", calculateAge);