<script>
    /**
     * @type string
     */
    export let label;
    export let onClick = () => {}
</script>

<button on:click={onClick}>
    {label}
</button>

<style>
    button {
        all:unset;
        width: 50px;
        height: 50px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button:hover {
        filter: brightness(0.7);
    }
</style>