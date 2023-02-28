<template>
    <div class="entry-container mb-3 pointer p-2">
        <!-- Tittle -->
        <div class="entry-tittle d-flex">
            <span class="text-success fs-5 fw-bold">28</span>
            <span class="mx-1 fs-5">Febrero</span>
            <span class="mx-2 fw-light">2023, Martes</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus cupiditate esse in eos perferendis ipsam, provident maxime mollitia inventore repellat enim quisquam nisi, suscipit pariatur laudantium, eum rerum corporis expedita.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid black;
        transition: 0.2s all ease-in;
    
        &:hover {
            background-color: lighten($color: grey, $amount: 45);
        }

        .entry-description {
            font-size: 12px;
        }
    }
</style>