# Setup paypal sandbox environment

- Go to [Paypal Developer](https://developer.paypal.com/home) and register an account.
- Create a sandbox app and retrieve Client ID and
  Secret [here](https://developer.paypal.com/dashboard/applications/sandbox)
- create a file named `.env` in the project directory. and copy the following settings in the file.

```typescript
PAYPAL_CLIENT_ID="<your-client-id>"
PAYPAL_CLIENT_SECRET="<your-secret>"
NEXT_PUBLIC_PAYPAL_CLIENT_ID="<your-client-id>"
```

- create another sandbox app and retrieve the email and password in the account info of that sandbox app.
- after click paypal button, enter the account info mentioned above to test the payment functionality.
