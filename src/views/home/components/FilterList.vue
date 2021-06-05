<template>
  <div class="filter-list">
    <app-icon class="filter-list__icon" name="search" />

    <input
      type="text"
      class="filter-list__input"
      placeholder="Search by title..."
      @keyup="$emit('searchChange', $event.target.value)"
    />
  </div>
</template>

<style lang="scss" scoped>
.filter-list {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  &__icon {
    width: 20px;
    position: absolute;
    left: calc(20% + 20px);
    color: var(--secondary);
  }

  &__input {
    width: 60%;
    outline: none;
    transition: 0.4s;
    font-size: 1.2rem;
    color: var(--main);
    border-radius: 10px;
    padding: 10px 10px 10px 60px;
    border: 2px solid var(--main);

    &::placeholder {
      color: var(--secondary);
    }

    &:focus {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
