const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

let currentDate = new Date();
let selectedDate = null; 

function renderCalendar() {
    const monthYear = document.getElementById("monthYear");
    const calendar = document.getElementById("calendar");

    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    
    monthYear.innerText = `${monthNames[month]} ${year}`;
    calendar.innerHTML = ""; 
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const dayCell = document.createElement("div");
        calendar.appendChild(dayCell);
    }

    for (let date = 1; date <= lastDate; date++) {
        const dayCell = document.createElement("div");
        dayCell.className = "day";
        dayCell.innerText = date;

        dayCell.addEventListener("click", function() {
            selectedDate = date; 
            const days = document.querySelectorAll('.day');
            days.forEach(day => day.classList.remove('selected')); 
            dayCell.classList.add('selected'); 
        });

        if (date === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            dayCell.classList.add("today");
        }

        calendar.appendChild(dayCell);
    }
}


function changeMonth(delta) {
    currentDate.setMonth(currentDate.getMonth() + delta);
    renderCalendar();
}

renderCalendar();

document.getElementById("markDateButton").addEventListener("click", function() {
    const messageDiv = document.getElementById("message"); 
    if (selectedDate) {
        messageDiv.textContent = `Date marcado com momo para dia ${selectedDate} 💖`
        alert('Favor avisar no zap');
    } else {
        messageDiv.textContent = "Por favor, selecione uma data primeiro!";
        alert('Favor avisar no zap');
    }
});
