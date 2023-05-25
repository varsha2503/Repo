const details = [
  {
    "name": "Justice Campos",
    "points": 23,
    "avatar": "https://i.pravatar.cc/300"
  },
  {
    "name": "Miranda Carpenter",
    "points": 32,
    "avatar": "https://i.pravatar.cc/292"
  },
  {
    "name": "Kailyn Estes",
    "points": 34,
    "avatar": "https://i.pravatar.cc/293"
  },
  {
    "name": "Iliana Carson",
    "points": 12,
    "avatar": "https://i.pravatar.cc/294"
  },
  {
    "name": "Justin Long",
    "points": 45,
    "avatar": "https://i.pravatar.cc/295"
  },
  {
    "name": "Macy Valencia",
    "points": 42,
    "avatar": "https://i.pravatar.cc/296"
  },
  {
    "name": "Sergio Robertson",
    "points": 14,
    "avatar": "https://i.pravatar.cc/297"
  },
  {
    "name": "Quinn Mayer",
    "points": 39,
    "avatar": "https://i.pravatar.cc/298"
  },
  {
    "name": "Johnathan Avatar",
    "points": 9,
    "avatar": "https://i.pravatar.cc/299"
  }
];

function populateDetails() {
  const leaderboardTable = document.querySelector('.leaderboard tbody');
  const oContainer = document.querySelector('.ocontainer');

  details.sort((a, b) => b.points - a.points);

  details.slice(0, 3).forEach((detail) => {
    const oElement = document.createElement('div');
    oElement.classList.add('se');
    const nameElement = document.createElement('span');
    nameElement.classList.add('white-number');
    nameElement.textContent = `${detail.name} - ${detail.points}`; // Added space between name and score
    oElement.appendChild(nameElement);
    oContainer.appendChild(oElement);
    const ssElement = document.createElement('div');
    ssElement.classList.add('ss');
    oContainer.appendChild(ssElement);
  });

  details.slice(3).forEach((detail, index) => {
    const row = document.createElement('tr');
    const cell = document.createElement('td');

    const content = `<span class="number">${index + 4}</span> <span class="circle"></span> <span class="name">${detail.name} <span class="space"></span> ${detail.points}</span>`; // Added space between name and score

    cell.innerHTML = content;
    row.appendChild(cell);
    leaderboardTable.appendChild(row);
  });
}

populateDetails();
