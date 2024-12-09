<script>
    import ComponentFilmFromDb from "$lib/ComponentFilmFromDB.svelte";
    let {data} = $props();
</script>

<div class="container my-5">
    <h1>Movies</h1>
    <p>Here you can find a list of all movies in the DB(generatet with Chat-GPT)</p>
    <a href="/moviesDB/create">
        <button id="but" class="btn btn-primary">Add New Movies</button>
    </a> 
    <ComponentFilmFromDb {data}/>
</div>