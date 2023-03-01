// Fetch Data Featured speakers
const speaker = document.querySelector(".speaker-list");

const speakersobject = [
  {
    id: 4,
    image: "images/novell.png",
    name: "Novell Jufry",
    title:
      "Accounts Specialist",
    description:
      "25+  years experience",
  },
  {
    id: 12,
    image: "images/tom.jfif",
    name: "Thomas Cooke",
    title: "Tax Expert",
    description:
      "45+ years experience",
  },
];


function loadSpeakers() {
  speakersobject.forEach(({ id, name, title, description, image }) => {
    const li = document.createElement("li");
    const itemBody = `<li class='speaker-item'>
       <img
         class='thumbnail'
         src='${image}'
         alt='${name} ${id}'
       />
       <div>
         <h6 class='heading-3'>${name}</h6>
         ${
           title
             ? `<small class='caption-1 fs-italics fw-bold color-red'>${title}</small>`
             : ""
         }
         <p class='caption-1'>${description}</p>
       </div>
     </li>`;
    li.innerHTML = itemBody;
    speaker.appendChild(li);
  });
}

loadSpeakers();
