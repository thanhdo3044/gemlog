
interface FormItemProps {
  name: string;
  tag: string;
  note: string;
  proxy: string;
  update_at: string;
  status: string;

}
interface FormProps {
  formInline: FormItemProps;
}

export type { FormItemProps, FormProps };
