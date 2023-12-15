import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BeneficiaryTitle } from "../beneficiary/BeneficiaryTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";
import { UserTitle } from "../user/UserTitle";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AccountNumber" source="accountNumber" />
        <TextInput label="AccountType" source="accountType" />
        <TextInput label="Balance" source="balance" />
        <ReferenceInput
          source="beneficiaries.id"
          reference="Beneficiary"
          label="Beneficiaries"
        >
          <SelectInput optionText={BeneficiaryTitle} />
        </ReferenceInput>
        <TextInput label="Currency" source="currency" />
        <ReferenceInput
          source="notifications.id"
          reference="Notification"
          label="Notifications"
        >
          <SelectInput optionText={NotificationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="receiverAccountId.id"
          reference="Transaction"
          label="ReceiverAccountId"
        >
          <SelectInput optionText={TransactionTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="transactions.id"
          reference="Transaction"
          label="Transactions"
        >
          <SelectInput optionText={TransactionTitle} />
        </ReferenceInput>
        <ReferenceInput source="userId.id" reference="User" label="UserId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
