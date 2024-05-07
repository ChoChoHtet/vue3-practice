const app = Vue.createApp({
    //"template": "<h1>Hello World!</h1>",
    data() {
        return {
            showBooks: true,
            name: "Hey Cho",
            job: "Software Engineer",
            age: 27,
            x: 0,
            y: 0,
            mouseStatus: "No Event fired",
            books: [
                {title: "Love You", author: "Unknown", logo: "assets/1.jpg", isFav: true},
                {title: "Hate You", author: "Unknown", logo: "assets/2.jpg", isFav: false},
                {title: "Miss You", author: "Unknown", logo: "assets/3.jpg", isFav: true},
                {title: "Nothing worth", author: "Unknown", logo: "assets/2.jpg", isFav: false},
                {title: "Nothing is impossible", author: "Unknown", logo: "assets/1.jpg", isFav: false},
            ],
            url: "https://github.com/iamshaunjp/Vue-3-Firebase/tree/lesson-13"
        }
    },
    methods: {
        changeTitle(name) {
            this.name = name
        },
        toggleShowBook() {
            this.showBooks = !this.showBooks;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        },
        handleEvents(e, data) {
            console.log(e, e.type)
            this.mouseStatus = e.type
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(event) {
            this.x = event.x
            this.y = event.y
        }

    },
    computed: {
        filterFavBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})
app.mount("#app")