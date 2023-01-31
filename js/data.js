// Fetch Data Featured speakers
const speaker = document.querySelector(".speaker-list");
/*
const speakersobject = [
  {
    id: 4,
    image: "images/img5.jpg",
    name: "Novell Juffry",
    title:
      "There is no reason you can not do it! The word my boss trained me",
    description:
      "Holds MA in Banking and Insurance - London.  Qalified ACCA in 2003 -London- and has been working in accountancy practicen ever since..",
  },
  // {
  //   id: 12,
  //   image: "images/img1.jpg",
  //   name: "Khadijah Mella",
  //   title: "The best United Kingdom Jockey in 2020",
  //   description:
  //     "The best United Kingdom jockey.  Learns from scracth within only 6 weeks before winning",
  // },
];
*/

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
         <hr class='line-gray'>
         <p class='caption-1'>${description}</p>
       </div>
     </li>`;
    li.innerHTML = itemBody;
    speaker.appendChild(li);
  });
}

loadSpeakers();
