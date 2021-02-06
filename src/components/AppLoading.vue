<template>
  <section class="app-loading">
    <img src="@/assets/img/logo.png" alt="Loading logo" />
    <h1>Loading...</h1>
  </section>
</template>

<style lang="scss">
.app-loading {
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  animation: blink infinite linear 2s;

  img {
    width: 45%;
  }

  h1 {
    margin: 0;
    font-size: 3rem;
    color: var(--main);
  }
}

@media (min-width: 768px) {
  .app-loading img {
    width: 30%;
  }
}

@media (min-width: 1024px) {
  .app-loading img {
    width: 280px;
  }
}

@keyframes blink {
  from {
    opacity: 0.5;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0.5;
  }
}
</style>
