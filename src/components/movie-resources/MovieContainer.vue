<template>
  <base-card>
    <div class="movie-render">
      <ul>
        <MovieResource
          v-for="movie in moviesList"
          :movie="movie"
          :key="movie.id"
        />
      </ul>
    </div>
  </base-card>
</template>


<script>
import MovieResource from "./MovieResource.vue";

export default {
  props: ["moviesList"],
  components: {
    MovieResource,
  },
};
</script>

<style scoped>
.movie-render {
  max-height: 600px;
  overflow: hidden;
  overflow-y: auto;
}
</style>