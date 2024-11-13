const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const rowElm = document.querySelector(".row");

/**
 * Description
 * @param {array} teamMembers
 * @returns {string}
 */
function assegnazione(teamMembers) {
  let cards = "";
  for (let i = 0; i < teamMembers.length; i++) {
    curItem = teamMembers[i];
    const { name, role, email, img } = teamMembers[i];
    cards += `
        <div class="col-3">
          <div class="card row">
            <div class="photo">
              <img src="./${img}" alt="">
            </div>
            <div class="content row">
              <h3 class="name">${name}</h3>
              <span>${role}</span>
              <br>
              <a href="">${email}</a>
            </div>
          </div>
        </div>
    `
  }
  return cards;
}
rowElm.innerHTML = assegnazione(teamMembers); 