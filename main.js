window.onload = function () {
    console.log("loaded")
    var typed = new Typed('#typed', {
        strings: ["Hi... ",
        "This is creative__programmer",
         `<i class="far fa-heart"></i>         
         <i class="far fa-paper-plane"></i>         
         <i class="far fa-bookmark"></i>    `,
         "follow for more awesome content ",
          "Have a nice day 😉 "],
        backSpeed: 10,
        smartBackspace: true,
        backDelay: 1200,
        startDelay: 1000,
        typeSpeed: 60,
        loop: true,
    });
};