import { ID } from "appwrite";
import conf from "../config/config";
import { databases, storage } from "./appwrite";

class Service {

    async createPost({ title, slug, description, featureImage }) {
        try {
            return await databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                title, description, featureImage
            })
        } catch (error) {
            console.log("Error :: CreatePost :: Appwrite", error);
            throw error;
        }
    }

    async updatePost(slug, { title, description, featureImage }) {
        console.log(featureImage);
        try {
            return await databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                title, description, featureImage
            })
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
            throw error;
        }
    }
    async deletePost(slug) {
        try {
            await databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug

            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }
    async getPost(slug) {
        try {
            return await databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug

            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }
    async getPosts() {
        try {
            return await databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,



            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async uploadImage(image) {
        try {
            return await storage.createFile(conf.appwriteBucketId, ID.unique(), image);
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }
    async deleteImage(id) {
        try {
            await storage.deleteFile(conf.appwriteBucketId, id);
            return true;
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }
    getFilePreview(fileId) {
        return storage.getFilePreview(conf.appwriteBucketId, fileId);
    }
}

const service = new Service();
export default service;