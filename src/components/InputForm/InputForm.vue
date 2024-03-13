<template>
  <card-form>
    <el-form @submit.prevent="onSubmit()">
      <el-row>
        <el-col :sm="12">
          <el-form-item label="Сумма">
            <el-input-number 
              v-model="sum"
              :disabled="disabled"
              :min="1"
            />
          </el-form-item>
        </el-col>

        <el-col :sm="12">
          <el-form-item label="Количество цифр">
            <el-input-number 
              v-model="num"
              :disabled="disabled"
              :min="1"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row justify="end">
        <el-form-item style="margin-bottom: 0;">
          <el-button 
            :disabled="disabled"
            native-type="submit"
          >
            Применить
          </el-button>
        </el-form-item>

        <el-form-item>
          <el-button 
            :disabled="disabled"
            native-type="button"
            @click="reset()"
          >
            Сбросить
          </el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </card-form>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';
import {
  ElButton,
  ElCol,
  ElForm,
  ElFormItem,
  ElInputNumber,
  ElRow,
} from 'element-plus';

import { CardForm } from '@components/CardForm';
import type { InputFormEmits, InputFormProps } from './types';

withDefaults(
  defineProps<InputFormProps>(),
  {
    disabled: false,
  },
);

const state = reactive({
  sum: 1,
  num: 1,
});

const emit = defineEmits<InputFormEmits>();

const onSubmit = () => {
  emit('submit', { ...state });
};

const reset = () => {
  state.num = 1;
  state.sum = 1;

  emit('reset');
};

const { sum, num } = toRefs(state);
</script>
