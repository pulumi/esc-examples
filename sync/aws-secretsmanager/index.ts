import * as aws from "@pulumi/aws";
import * as fs from "fs";

// Read a json file from the local filesystem using node.js fs module
const json = fs.readFileSync("sync.json", "utf8");

const secret = new aws.secretsmanager.Secret("mySecretSyncedFromESC", {
    recoveryWindowInDays: 0,
})

const secretVersion = new aws.secretsmanager.SecretVersion("mySecretSyncedFromESCVersion", {
    secretId: secret.id,
    secretString: json,
})

// Export the name of the secret
export const secretName = secret.name;
