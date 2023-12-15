import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BillCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="BillType" source="billType" />
        <DateTimeInput label="DueDate" source="dueDate" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
