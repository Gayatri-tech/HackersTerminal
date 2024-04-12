const mesgs = [
  "INITIALIZING HACK PROGRAM...",
  "HACKING AMAN'S USERNAME...",
  "USERNAME FOUND AMAN_RAWAT...",
  "CONNECTING TO FACEBOOK...",
  "GETTING USER CREDENTIALS...",
  "FOUND USERNAME AND PASSWORD...",
  "AMAN'S ID HACKED WITH ID=AMAN@UK...",
  "USER FOUND...",
  "CONNECTING TO INSTAGRAM...",
  "FOUND PHOTOS AND VIDEOS...",
  "GETTING MAIL ID...",
  "FOUND MAIL PASSWORD...",
  "FOUND HIDDEN FILES...",
  "FOUND ARCHIVES...",
];

function displayMesg() {
  const randMesg = Math.floor(Math.random() * mesgs.length);
  const time = Math.floor(Math.random() * 2 + 1);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mesgs[randMesg]);
    }, time * 1000);
  });
}

async function showResult() {
  document.title = "Hacking...";
  for (let i = 0; i < 50; i++) {
    let res = await displayMesg();
    let text = document.querySelector(".text");
    let messageBox = document.createElement("p");
    messageBox.textContent = res;
    text.append(messageBox);
  }
}

showResult();
