import React from "react";

function useLocalStorage(storageKey) {
    // declaring states
    const [item, setItem] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(()=> {
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
            }catch(err) {
                setError(true)
                console.error("ERROR: ", err)
            }
            
        }, 2300)
    }, [storageKey])


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

    return {
        item, 
        saveItem,
        loading,
        error
    }
}

export { useLocalStorage }