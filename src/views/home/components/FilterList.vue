<template>
  <div class="filter-list">
    <img
      alt="search"
      class="filter-list__icon"
      src="@/assets/img/icons/search.svg"
    />

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
  }

  &__input {
    width: 60%;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 10px;
    border: 2px solid #fff;
    padding: 10px 10px 10px 60px;
    background-color: var(--secondary);

    &::placeholder {
      color: #ddd;
    }
  }
}
</style>
