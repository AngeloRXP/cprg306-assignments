import { db } from "../_utils/firebase";
import { 
  collection, 
  getDocs, 
  addDoc, 
  deleteDoc,
  doc, 
  query 
} from "firebase/firestore";

/**
 * Retrieves all shopping list items for a specific user
 * @param {string} userId - ID of the authenticated user
 * @returns {Promise<Array>} - List of user's items
 */
export async function getItems(userId) {
  const items = [];
  
  try {
    // Create a reference to the user's "items" subcollection
    const itemsRef = collection(db, "users", userId, "items");
    
    // Fetch all documents in the subcollection
    const querySnapshot = await getDocs(query(itemsRef));
    
    // Add each document to the items array
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}

/**
 * Adds a new item to the user's shopping list
 * @param {string} userId - ID of the authenticated user
 * @param {Object} item - Item to be added
 * @returns {Promise<string>} - ID of the created document
 */
export async function addItem(userId, item) {
  try {
    // Create a reference to the user's "items" subcollection
    const itemsRef = collection(db, "users", userId, "items");
    
    // Add the item to the subcollection
    const docRef = await addDoc(itemsRef, item);
    
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
}

/**
 * Removes an item from the user's shopping list
 * @param {string} userId - ID of the authenticated user
 * @param {string} itemId - ID of the item to be removed
 * @returns {Promise<void>}
 */
export async function deleteItem(userId, itemId) {
  try {
    // Create a reference to the specific document
    const itemRef = doc(db, "users", userId, "items", itemId);
    
    // Delete the document
    await deleteDoc(itemRef);
  } catch (error) {
    console.error("Error removing item:", error);
    throw error;
  }
}