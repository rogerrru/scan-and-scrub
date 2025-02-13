// Function to load and parse CSV
function loadProcedures() {
    Papa.parse("data/procedures.csv", {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
            const data = results.data;
            let cardContainer = document.getElementById("procedure-cards");

            data.forEach(procedure => {
                let card = `
                        <div class="swiper-slide">
                            <div class="card shadow-lg border-0 rounded-4">
                                <div class="position-relative">
                                    <img src="media/procedures/${procedure['Image Filename']}" class="card-img-top rounded-top-4" alt="${procedure['Procedure Name']}">
                                    <a href="#" class="btn btn-primary position-absolute top-0 end-0 m-2 rounded-circle">➜</a>
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">${procedure['Procedure Name']}</h5>
                                    <span class="badge ${procedure['Procedure Type'] === 'Major' ? 'bg-warning text-dark' : 'bg-success text-white'} px-3 py-2 rounded-pill">
                                        ${procedure['Procedure Type']} Procedure
                                    </span>
                                    <p class="card-text">${procedure['Procedure Description']}</p>
                                </div>
                            </div>
                        </div>`;

                cardContainer.innerHTML += card;
            });

            // Initialize Swiper after cards are loaded
            new Swiper(".mySwiper", {
                slidesPerView: 3,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    576: { slidesPerView: 1 }
                }
            });
        }
    });
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", loadProcedures);

let teamMembers = [
    { name: "Alice Johnson", image: "media/team1.png" },
    { name: "Bob Smith", image: "media/team2.png" },
    { name: "Charlie Brown", image: "media/team3.png" },
    { name: "David Lee", image: "media/team4.png" },
    { name: "Emma Watson", image: "media/team5.png" },
    { name: "Frank White", image: "media/team6.png" },
    { name: "Grace Kim", image: "media/team7.png" },
    { name: "Henry Clark", image: "media/team8.png" },
    { name: "Isla Martinez", image: "media/team9.png" },
    { name: "Jack Wilson", image: "media/team10.png" }
];

function selectMember(index) {
    let selected = teamMembers[index];

    // Hide grid and show selected container
    document.querySelector('.team-grid').style.display = 'none';
    document.getElementById('selected-container').style.display = 'flex';

    // Set selected member details
    document.getElementById('selected-img').src = selected.image;
    document.getElementById('selected-name').innerText = selected.name;
    document.querySelector('.close-btn').style.display = 'block';
    document.querySelector('.selected-member').style.display = 'block';

    // Display other members
    let otherMembersDiv = document.querySelector('.other-members');
    otherMembersDiv.innerHTML = '';

    teamMembers.forEach((member, i) => {
        if (i !== index) {
            let img = document.createElement('img');
            img.src = member.image;
            img.onclick = () => selectMember(i);
            otherMembersDiv.appendChild(img);
            console.log(img.src)
        }
    });
}

function resetSelection() {
    document.querySelector('.team-grid').style.display = 'flex';
    document.getElementById('selected-container').style.display = 'none';
}
