document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            navbar.style.transform = "translateY(-100%)";
        } else {
            navbar.style.transform = "translateY(0)";
        }
        lastScrollY = window.scrollY;
    });
});

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
