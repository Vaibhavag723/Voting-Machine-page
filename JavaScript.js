if (!localStorage.getItem("voteData")) {
    localStorage.setItem("voteData", JSON.stringify([])); 
}

function VoteTab() {
    document.getElementById("Votetab").style.display = "block";
    document.getElementById("partyselection").style.display = "none";
    document.getElementById("clientsTab").style.display = "none";
    document.getElementById("resultsTab").style.display = "none";
}

function ClientsTab() {
    document.getElementById("Votetab").style.display = "none";
    document.getElementById("partyselection").style.display = "none";
    document.getElementById("clientsTab").style.display = "block";
    document.getElementById("resultsTab").style.display = "none";
    displayClientData();
}

function ResultsTab() {
    document.getElementById("Votetab").style.display = "none";
    document.getElementById("partyselection").style.display = "none";
    document.getElementById("clientsTab").style.display = "none";
    document.getElementById("resultsTab").style.display = "block";
    displayResults();
}

document.getElementById("VoterForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const voterID = document.getElementById("VoterID").value;
    const dob = document.getElementById("Dob").value;

    const voteData = JSON.parse(localStorage.getItem("voteData"));
    const existingVote = voteData.find(vote => vote.voterID === voterID);

    if (existingVote) {
        alert("This voter has already voted!");
        return; 
    }

    localStorage.setItem("voterDetails", JSON.stringify({ name, voterID, dob }));
    document.getElementById("Votetab").style.display = "none";
    document.getElementById("partyselection").style.display = "block";
});

document.getElementById("partyForm").addEventListener("submit", function(event) {
    event.preventDefault();  

    const party = document.getElementById("party").value;
    const voterDetails = JSON.parse(localStorage.getItem("voterDetails"));
    const currentTime = new Date().toLocaleString(); 

    const voteData = JSON.parse(localStorage.getItem("voteData"));
    voteData.push({ ...voterDetails, party, time: currentTime });
    localStorage.setItem("voteData", JSON.stringify(voteData));

    ClientsTab();
});

function displayClientData() {
    const voteData = JSON.parse(localStorage.getItem("voteData"));
    const clientInfoTab = document.getElementById("ClientInfotab");
    clientInfoTab.innerHTML = "";  

    voteData.forEach((client, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${client.name}</td>
            <td>${client.voterID}</td>
            <td>${client.dob}</td>
            <td>${client.party}</td>
            <td>${client.time}</td>
        `;
        clientInfoTab.appendChild(row);
    });
}

function displayResults() {
    const voteData = JSON.parse(localStorage.getItem("voteData"));

    let bjpVotes = 0, congressVotes = 0, appVotes = 0, bspVotes = 0;

    voteData.forEach(client => {
        if (client.party === "BJP") bjpVotes++;
        if (client.party === "Congress") congressVotes++;
        if (client.party === "APP") appVotes++;
        if (client.party === "BSP") bspVotes++;
    });

    document.getElementById("bjpVotes").innerText = bjpVotes || 0;
    document.getElementById("congressVotes").innerText = congressVotes || 0;
    document.getElementById("appVotes").innerText = appVotes || 0;
    document.getElementById("bspVotes").innerText = bspVotes || 0;

    if (voteData.length === 0) {
        document.getElementById("bjpVotes").innerText = "0";
        document.getElementById("congressVotes").innerText = "0";
        document.getElementById("appVotes").innerText = "0";
        document.getElementById("bspVotes").innerText = "0";
    }
}
