<template>
  <base-card>
    <li>
      <nav>
        <a href="">{{ movie.title }}</a>
      </nav>
      <p>{{ movie.overview }}</p>
      <p>
        <span>Release date: </span
        >{{ movie.release_date }}&nbsp;&nbsp;&nbsp;&nbsp;<span>Vote: </span
        >{{ movie.vote_average }}
      </p>
    </li>
  </base-card>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
    },
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

p {
  margin: 0.5rem 0;
}
p span {
  font-weight: bold;
  color: #0ef1a6;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>