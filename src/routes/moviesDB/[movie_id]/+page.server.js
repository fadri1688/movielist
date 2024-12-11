import { updated } from "$app/stores";
import db from "$lib/db.js";
import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const movieId = params.movie_id;
  let movie = await db.getMovie(movieId);
  console.log('movie:', movie);

  if (!movie) {
    throw error(404, 'Movie not found');
  }

  return {
    movie,
  };
}

export const actions = {
  update: async ({ request }) => {
    const updateData = await request.formData();
    let movie = {
      _id: updateData.get("id"),
      title: updateData.get("title"),
      year: updateData.get("year"),
      length: updateData.get("length")
      /*
      actors: updateData.get("actors").split(",")
      */
  }
    console.log('update:', movie);
    await db.updateMovie(movie);
  },
  delete: async ({ request }) => {
    const data = await request.formData();
    let id = data.get('movie_id');
    console.log('data:', id);
    await db.deleteMovie(id);
    redirect(303, "/moviesDB");    
  }
}
