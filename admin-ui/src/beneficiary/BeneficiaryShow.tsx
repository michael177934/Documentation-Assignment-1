import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";

export const BeneficiaryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AccountNumber" source="accountNumber" />
        <TextField label="BankName" source="bankName" />
        <TextField label="BeneficiaryName" source="beneficiaryName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="UserID" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
