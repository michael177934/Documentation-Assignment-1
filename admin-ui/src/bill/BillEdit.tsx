import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BillEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="BillType" source="billType" />
        <DateTimeInput label="DueDate" source="dueDate" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
