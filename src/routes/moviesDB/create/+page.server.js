import db from "$lib/db.js" 

export const actions = {
    new: async ({ request }) => {
        const data = await request.formData();
        let movie = {
            title: data.get("title"),
            year: data.get("year"),
            length: data.get("length")
            /*
            actors: data.get("actors").split(",")
            */
        }
        console.log('Test Create',movie);
        await db.createMovie(movie);
        return { success: true }
    }
}