<template>
  <el-container 
    v-loading.fullscreen.lock="loading"
    class="sums-form"
  >
    <el-main style="margin: 0 auto;">
      <input-form 
        :disabled="loading"
        @submit="onInputFormSubmit($event)" 
      />

      <card-form class="sums-form__numbers-pick-container">
        <el-space wrap>
          <el-text>Исключить:</el-text>
        
          <numbers-pick-form 
            :disabled-buttons="included"
            @submit="update('excluded', $event)"
          />
        </el-space>
      </card-form>

      <card-form class="sums-form__numbers-pick-container">
        <el-space wrap>
          <el-text>Включить:</el-text>
        
          <numbers-pick-form 
            :disabled-buttons="excluded"
            @submit="update('included', $event)"
          />
        </el-space>
      </card-form>

      <sums-view
        v-if="resultSums.length"
        :sums="resultSums"
      />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { computed, reactive, toRefs } from 'vue';
import { ElContainer, ElMain, ElLoading, ElSpace, ElText } from 'element-plus';

import { InputForm } from '@components/InputForm';
import { SumsView } from '@components/SumsView';
import { CardForm } from '@components/CardForm';
import { NumbersPickForm } from '@components/NumbersPickForm';

import { getSums } from '@packages/getSums';
import { exclude } from '@packages/exclude';
import { include } from '@packages/include';

const vLoading = ElLoading.directive;

const state = reactive({
  error: false,
  excluded: [] as number[],
  included: [] as number[],
  loading: false,
  sums: [] as number[][],
});

const onInputFormSubmit = async ({ sum, num }: { sum: number, num: number }) => {
  state.error = false;
  state.loading = true;
  try {
    state.sums = await getSums(sum, num);
  } catch (e) {
    state.error = true;
    throw e;
  } finally {
    state.loading = false;
  }
};

const update = (type: 'excluded' | 'included', numbers: number[]) => {
  state[type] = numbers;
};

const resultSums = computed(() => {
  let result = state.sums;

  if (state.included.length) {
    result = include(result, state.included);
  }

  if (state.excluded.length) {
    result = exclude(result, state.excluded);
  }
  
  return result;
});
const { loading, excluded, included } = toRefs(state);
</script>

<style>
.sums-form {
  .card-form + .card-form {
    margin-top: 16px;
  }
}
</style>
