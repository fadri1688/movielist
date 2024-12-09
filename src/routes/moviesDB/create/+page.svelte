<script>
    let { form } = $props();
</script>

<h1>Neuen Film anlegen</h1>
<a href="/moviesDB">Back</a>
<div>
    <form class="container mt-4" method="post" action="?/new">
        <div class="mb-3">
            <label for="title" class="form-label">Filmtitel:</label>
            <input
                name="title"
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
                id="actors"
                class="form-control"
                rows="3"
                placeholder="z.B. Actor1, Actor2, Actor3"
            ></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Speichern</button>
    </form>
    {#if form?.success}
        <p class="alert alert-success mt-4">Created</p>
    {/if}
</div>
