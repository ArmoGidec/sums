<template>
  <card-form class="sums-view">
    <div class="sums-view__table">
      <div
        v-for="sum in stringSums"
        :key="sum"
        class="sums-view__table-item"
      >
        {{ sum }}
      </div>
    </div>
  </card-form>
</template>

<script setup lang="ts">
import { computed, reactive, watch } from 'vue';

import { CardForm } from '@components/CardForm';

import type { SumsFormProps } from './types';

const props = withDefaults(
  defineProps<SumsFormProps>(),
  {
    sums: () => [],
  },
);

const state = reactive({
  excluded: [] as number[],
  included: [] as number[],
});

watch(() => props.sums, () => {
  state.excluded = [];
  state.included = [];
});

const stringSums = computed(() => props.sums.map((sum) => sum.join(' ')));
</script>

<style>
.sums-view {
  &__table {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: 4px;
  }

  &__table-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 6px;
  }
}
</style>
