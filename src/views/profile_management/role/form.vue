<script setup lang="ts">
import { ref } from "vue";
import { formRules } from "./utils/rule";
import { FormProps } from "./utils/types";

const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({
    name: "",
    tag: "",
    note: "",
    proxy: "",
    update_at: "",
    status: ""
  })
});

const ruleFormRef = ref();
const newFormInline = ref(props.formInline);

function getRef() {
  return ruleFormRef.value;
}

defineExpose({ getRef });
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="newFormInline"
    :rules="formRules"
    label-width="82px"
  >
    <el-form-item label="Name" prop="name">
      <el-input v-model="newFormInline.name" clearable placeholder="Name" />
    </el-form-item>

    <el-form-item label="Tag">
      <el-input v-model="newFormInline.tag" clearable placeholder="Tag" />
    </el-form-item>

    <el-form-item label="Note">
      <el-input
        v-model="newFormInline.note"
        placeholder="Note"
        type="textarea"
      />
    </el-form-item>

    <el-form-item label="Update at">
      <el-input
        v-model="newFormInline.update_at"
        clearable
        placeholder="Update at"
      />
    </el-form-item>

    <el-form-item label="Status">
      <el-input v-model="newFormInline.status" clearable placeholder="Status" />
    </el-form-item>
  </el-form>
</template>
