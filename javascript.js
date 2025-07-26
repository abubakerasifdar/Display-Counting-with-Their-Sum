 
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
        function myFunction() {
            let input = document.getElementById('input').value;
            let result = "";
            let sum = 0;
            for(i=1; i<=input; i++){
                sum = sum +  i;
                result+=`Your Entered ${input} and your Counting is ${i} and Your Sum is ${sum-i} + ${i} = ${sum} <br>`;
            }

            document.getElementById('output').style.display = "flex";
            document.getElementById('output').innerHTML = result;
        }   
