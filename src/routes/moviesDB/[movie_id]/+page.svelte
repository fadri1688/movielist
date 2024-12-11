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
        <form class="container mt-4" method="post" action="?/update">
            <div class="mb-3">
                <label for="title" class="form-label">Filmtitel:</label>
                <input
                    name="title"
                    value="{data.movie.title}"
                    type="text"
                    id="title"
                    class="form-control"
                    placeholder="Titel eingeben"
                    required
                />
            </div>
    
            <div class="mb-3">
                <label for="year" class="form-label">Jahr:</label>
                <input
                    name="year"
                    value="{data.movie.year}"
                    type="number"
                    id="year"
                    class="form-control"
                    placeholder="2025"
                    required
                />
            </div>
    
            <div class="mb-3">
                <label for="length" class="form-label">Dauer (in Minuten):</label>
                <input
                    name="length"
                    value="{data.movie.length}"
                    type="number"
                    id="length"
                    class="form-control"
                    placeholder="z.B. 120"
                    required
                />
            </div>
    
            <div class="mb-3">
                <label for="actors" class="form-label">Cast (Komma-getrennt):</label
                >
                <textarea
                    name="actors"
                    value="{data.movie.actors}"
                    id="actors"
                    class="form-control"
                    rows="3"
                    placeholder="z.B. Actor1, Actor2, Actor3"
                ></textarea>
                <input name="id" type="hidden" value={data.movie._id} />
            </div>
            <button class="btn btn-primary">update</button>
        </form>
        <form class="container mt-4" method="post" action="?/delete">
            {console.log(data.movie._id)}
            <input name="movie_id" type="hidden" value={data.movie._id} />
            <button class="btn btn-danger">Delete</button>
        </form>
    </div>
</div>
