<script>
    // Importiere die JSON-Daten
    import movies from "./movie_data.json";
</script>
<div class="row g-4">
{#each movies as movie}
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <img 
                id="bild"
                src="/images/{movie.cover}"
                class="card-img-top"
                alt="Shadows_of_Tomorrow Poster"
            />
            <div class="card-body text-center">
                <h5 class="card-title">{movie.title}</h5>
                <p class="card-text">
                    Jahr: {movie.year}<br />
                    Dauer: {movie.duration} Minuten
                </p>
            </div>
        </div>
    </div>
    {/each}
</div>
