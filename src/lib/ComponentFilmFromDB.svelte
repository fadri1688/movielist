<script>
    export let data;
    console.log(data);
</script>
<div class="row g-4">
{#each data.movies as movie}
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <img 
                id="bild"
                src="{movie.poster}"
                class="card-img-top"
                alt="Shadows_of_Tomorrow Poster"
            />
            <div class="card-body text-center">
                <h5 class="card-title"><a href={`/moviesDB/${movie._id}`}>{movie.title}</a>
                </h5>
                <p class="card-text">
                    Jahr: {movie.year}<br />
                    Dauer: {movie.length}
                </p>
            </div>
        </div>
    </div>
    {/each}
</div>
