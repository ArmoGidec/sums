<template>
  <div class="card-form">
    <slot />
  </div>
</template>

<style>
.card-form {
  border: 1px solid var(--el-border-color);
  border-radius: var(--el-border-radius-base);

  &:not(:empty) {
    padding: var(--el-main-padding);
  }
}
</style>
