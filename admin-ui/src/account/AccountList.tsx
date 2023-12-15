import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BENEFICIARY_TITLE_FIELD } from "../beneficiary/BeneficiaryTitle";
import { NOTIFICATION_TITLE_FIELD } from "../notification/NotificationTitle";
import { TRANSACTION_TITLE_FIELD } from "../transaction/TransactionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AccountNumber" source="accountNumber" />
        <TextField label="AccountType" source="accountType" />
        <TextField label="Balance" source="balance" />
        <ReferenceField
          label="Beneficiaries"
          source="beneficiary.id"
          reference="Beneficiary"
        >
          <TextField source={BENEFICIARY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Currency" source="currency" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Notifications"
          source="notification.id"
          reference="Notification"
        >
          <TextField source={NOTIFICATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="ReceiverAccountId"
          source="transaction.id"
          reference="Transaction"
        >
          <TextField source={TRANSACTION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Transactions"
          source="transaction.id"
          reference="Transaction"
        >
          <TextField source={TRANSACTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="UserId" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
