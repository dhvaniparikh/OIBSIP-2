setTimeout(function () {
  $(".about-info-inner").typed({
    strings: [
      "<span>Hi, I am Dhvani Parikh</span> Dedicated MERN Stack programmer who thrives in competitive coding and has a talent for handling Data Structures and Algorithms (DSA) problems. renowned for encouraging teamwork, having a strong aptitude for solving problems, and flourishing in collaborative settings. <br><br> It demonstrates a strong track record of leading productive brainstorming sessions and carrying out projects within Agile frameworks. Devoted to developing cutting-edge solutions that blend the latest technology with a touch of creativity.",
    ].map(function (sentence) {
      return sentence
        .split(" ")
        .map(function (word) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
    }),
    typeSpeed: 7,
    contentType: "html",
  });
}, 100);
