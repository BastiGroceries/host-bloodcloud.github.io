import { Client, Account} from "appwrite";

const client = new Client
    .setEndpoint('https//cloud.appwrite.io/v1'
    .setProject('67de699f000bcc96f77f'
        )
    )

    const account = new Account(client)

    export {account, client}