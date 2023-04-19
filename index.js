import { generateTextAndImage } from "./utils.js"

// 1. Change the variable to your name
let name = "Guil Hernandez"

// 2. Change the variable to your favorite activity
let favoriteActivity = "snacking"

// 3. Change the variable to your favorite place
// I.e. city, mountain, pub, forrest, beach, Manhattan, etc.
let favoritePlace = "coffee shop"

// 4. Configure the AI by setting a temperature from 0 to 1
// The higher temperature, the more experimental text
let temperature = 0.6

// Optional: delete "avatar.jpg" and add a photo of yourself.
// (remember to use "avatar.jpg" as the name of your photo)

generateTextAndImage(name, favoriteActivity, favoritePlace, temperature)
