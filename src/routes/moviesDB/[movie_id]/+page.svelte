<script>    
    let { data } = $props();
    const movie = data.movie;
</script>

<a href="/moviesDB">Back</a>

<h1>{movie.title}</h1>

<div style="display: flex; gap: 2rem;">
    <div>
        <img
            src={data.movie.poster}
            alt="{movie.title} Poster"
            style="max-width: 300px;"
        />
    </div>
    <div>
        <p>Jahr: {data.movie.year}</p>
        <p>Dauer: {movie.length} Minuten</p>

        <p>Cast:</p>
        <ul>
            {#each data.movie.actors as actor}
                <li>{actor}</li>
            {/each}
        </ul>
        <form method="post" action="?/delete">
            {console.log(data.movie._id)}
            <input name="movie_id" type="hidden" value={data.movie._id} />
            <button class="btn btn-danger">Delete</button>
        </form>
    </div>
</div>
