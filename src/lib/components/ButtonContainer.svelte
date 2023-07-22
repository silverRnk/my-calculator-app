<script>
  import Button from "./Button.svelte";


</script>

<div>
    <Button label="1" />
    <Button label="2" />
    <Button label="2" />
    <Button label="2" />
    <Button label="2" />
    <Button label="2" />
    <Button label="2" />
</div>

<style>
    div {
        margin: 0 35px 40px 35px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 10px;
    }
</style>