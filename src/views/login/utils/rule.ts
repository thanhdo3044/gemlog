import { reactive } from "vue";
import type { FormRules } from "element-plus";

export const REGEXP_PWD =
  /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/;
export const REGEXP_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const loginRules = reactive(<FormRules>{
  password: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("Please enter password"));
        }
        //else if (value === "") { //else if (!REGEXP_PWD.test(value)) {
        //   callback(
        //     new Error("The password format should be any two combinations of 8-18 digits, letters, and symbols.")
        //   );
        // }
        else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  email: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("Please enter email"));
        }else if (!REGEXP_EMAIL.test(value)) {
          callback(
            new Error("Invalid email format")
          );
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ]
});


export { loginRules };
