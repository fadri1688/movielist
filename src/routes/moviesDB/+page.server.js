import db from "$lib/db.js"

export async function load() {
    let movies = await db.getMovies()
    return {
        movies
    }
}
