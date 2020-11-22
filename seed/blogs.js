const db = require('../db/connection')
const Blog = require('../models/blog')

const main = async () => {
    const blogs = 
    [
        {
            "name": "Cathy Griffin",
            "imgURL": "",
            "imgURL2": "",
            "imgURL3": "",
            "imgURL4": "",
            "imgURL5": "",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
    await Blog.insertMany(blogs)
  console.log("Created blogs!")
}
const run = async () => {
    await main()
    db.close()
}

run()