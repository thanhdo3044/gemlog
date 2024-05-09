import { reactive } from "vue";
import type { FormRules } from "element-plus";


export const formRules = reactive(<FormRules>{
  name: [{ required: true, message: "Role name is required ", trigger: "blur" }],
  code: [{ required: true, message: "Role ID is required", trigger: "blur" }]
});
