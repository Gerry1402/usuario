import {db, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, doc, setDoc, collection, addDoc, getDocs, deleteDoc, updateDoc} from './firebase';
export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // sendEmailVerification(userCredential.user);
        const user = userCredential.user;
        const docRef = doc(db, 'users', user.uid);
        await setDoc(docRef, {});
        return user.uid;
    } catch (err) {
        return err.message;
    }
}

export const signIn = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result.user.uid;
    } catch (err) {
        return err.message;
    }
}

export const getCurrentUserId = async () => await auth.currentUser?.uid;
export const logout = async () => await signOut(auth);

import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";

export const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then(result => {
        return result.user;
    });
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}

export const createTaskByUserId = async(userId, obj) => {
    const colRef = collection(db, 'users', userId, 'tasks');
    const data = await addDoc(colRef, obj);
    return data.id;
}

export const getTasksByUserId = async (userId) => {
    const colRef = collection(db, 'users', userId, 'tasks');
    const result = await getDocs(colRef);
    return getArrayFromCollection(result);
}

export const updateTaskByUserId = async (userId, id, obj) => {
    const docRef = doc(db, 'users', userId, 'tasks', id);
    await updateDoc(docRef, obj)
}

export const deleteTaskByUserId = async (userId, id) => {
    const docRef = doc(db, 'users', userId, 'tasks', id);
    await deleteDoc(docRef);
}