import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AccountTitle } from "../account/AccountTitle";

export const BeneficiaryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AccountNumber" source="accountNumber" />
        <TextInput label="BankName" source="bankName" />
        <TextInput label="BeneficiaryName" source="beneficiaryName" />
        <ReferenceInput source="userId.id" reference="Account" label="UserID">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
