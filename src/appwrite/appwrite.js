import { Client, Databases, Account, Storage } from "appwrite";
import conf from "../config/config";


const client = new Client();

client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);  