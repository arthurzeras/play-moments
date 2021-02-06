<template>
  <section class="app-erros">
    <div class="app-errors__container">
      <div class="app-errors__container--content">
        <img src="@/assets/img/icons/cable-error.svg" alt="error" />

        <hr />

        <h1>Oops!</h1>

        <p>Sorry, something is wrong to get data</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.app-errors {
  &__container {
    width: 100%;
    height: 100vh;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;

    &--content {
      text-align: center;

      img {
        width: 50%;
      }

      hr {
        border-radius: 3px;
        border: 3px solid var(--main);
      }

      h1 {
        font-size: 3rem;
        color: var(--danger);
      }
    }
  }
}
</style>
