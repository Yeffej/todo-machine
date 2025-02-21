import React from "react";

/**
 * This hook allows you to easily interact with the browser's local storage.
 * It will retrieve the item from the storage and store it in the component's state.
 * If the item doesn't exist, it will create it. 
 * 
 * @param {string} storageKey - The key you want to store and retrieve the item from.
 * @param {boolean} onStorageChanged - If true, it will re-render the component when the storage changes.
 * @returns An object with the following properties:
 *  - `item`: The item retrieved from the storage.
 *  - `saveItem`: A function to save the item in the storage.
 *  - `loading`: A boolean that indicates if the item is being retrieved or saved.
 *  - `error`: A boolean that indicates if there was an error when retrieving or saving the item.
 */

function useLocalStorage(storageKey) {
    // declaring states
    const [item, setItem] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    // state that indicates when the storage has changed
    const [onStorageChanged, setOnStorageChanged] = React.useState(false)

    React.useEffect(()=> {
        // this scenario indicates the new localstorage has been already loaded. 
        if(!onStorageChanged && !loading) return null;

        if(onStorageChanged) {
            setLoading(true)
        }

        // simulate loading process
        setTimeout(() => {
            try {
                const storageItem =  localStorage.getItem(storageKey)
                let parsedItem = JSON.parse(storageItem)
                
                if(!parsedItem) {
                    parsedItem = []
                    localStorage.setItem( storageKey, JSON.stringify(parsedItem) )
                }

                setItem(parsedItem)
                setLoading(false)
                if(onStorageChanged) setOnStorageChanged(false);
            }catch(err) {
                setError(true)
                console.error("ERROR: ", err)
            }
            
        }, 2300)
    }, [storageKey, onStorageChanged])


    const saveItem = (newItem)=> {
        try {
            const strItem = JSON.stringify(newItem)
            localStorage.setItem(storageKey, strItem)
            setItem(newItem)

        }catch(err) {
            setError(true)
            console.error("ERROR: ", err)
        }

    }

    window.onstorage = () => {
        const strItem = JSON.stringify(item)
        const storageItem = localStorage.getItem(storageKey)

        if(strItem !== storageItem) {
            setOnStorageChanged(true)
        }
    };

    return {
        item, 
        saveItem,
        loading,
        error
    }
}

export { useLocalStorage }