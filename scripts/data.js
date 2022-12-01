var defaultMessages = [
    {
        name: "Anon",
        avatar: "",
        id: 1,

        timestamp: Date.now(),
        content: "Hm.",
    },

    {
        name: "Anon",
        avatar: "",
        id: 2,

        timestamp: Date.now(),
        content: "Hm, indeed.",
    },
]

var threadsq = defaultMessages;
if (localStorage && localStorage.getItem("threadsq")) {
    threadsq = JSON.parse(localStorage.getItem("threadsq"));
} else {
    threadsq = defaultMessages;
    localStorage.setItem("threadsq", JSON.stringify(threadsq));
}