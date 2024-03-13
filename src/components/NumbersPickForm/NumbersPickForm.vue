<template>
  <el-space
    wrap
    class="numbers-pick-form"
  >
    <el-button
      v-for="btn in buttons"
      :key="btn.value"
      plain
      :disabled="btn.isDisabled"
      :type="btn.isPicked ? 'primary' : 'info'"
      native-type="button"
      @click="onNumberPick(btn)"
    >
      {{ btn.value }}
    </el-button>
  </el-space>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { ElButton, ElSpace } from 'element-plus';

import { numbers } from './constants';
import type { NumberBtn, NumbersPickFormEmits, NumbersPickFormProps } from './types';

const props = withDefaults(
  defineProps<NumbersPickFormProps>(),
  {
    disabledButtons: () => [],
  },
);
const emit = defineEmits<NumbersPickFormEmits>();

const state = reactive({
  localNumbers: new Set<number>(),
});

const disabledNumbersRecord = computed(() => Object.fromEntries(
  props.disabledButtons.map((num) => [num, true]),
));

const buttons = computed<NumberBtn[]>(() => numbers.map((num) => ({
  value: num,
  isDisabled: disabledNumbersRecord.value[num],
  isPicked: state.localNumbers.has(num),
})));

const submit = () => {
  emit('submit', [...state.localNumbers]);
};

const onNumberPick = (btn: NumberBtn) => {
  const action = btn.isPicked ? 'delete' : 'add';
  state.localNumbers[action](btn.value);

  submit();
};

defineExpose({
  reset: () => {
    state.localNumbers = new Set();
  },
});
</script>

<style>
.numbers-pick-form .el-button:focus {
  color: var(--el-button-text-color);
  border-color: var(--el-button-border-color);
  background-color: var(--el-button-bg-color);
}
</style>
