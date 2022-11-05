<script lang="ts">

    export let cardText;
    export let link;

</script>

<a href="{link}">
    <div id="interaction">
        <h2>{cardText}</h2>
    </div>
</a>

<style>
    a {
        display: grid;
        height: 14rem;
        border-radius: 0.5rem;
        grid-template-rows: 33.3% 33.3% 33.3%;
        padding: 1rem;
        background-size: cover;
        text-decoration: none;
        color: white;
        flex: 1 1 20rem;
        margin: 0.5rem;
    }
    a:hover {
        cursor: pointer;
    }
    img {
        width: 2rem;
        height: 2rem;
        filter: invert(1);
    }
</style>
