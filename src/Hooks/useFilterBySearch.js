import React from 'react';

function useFilterBySearch(itemList, initialSearchValue) {
    const [searchValue, setSearchValue] = React.useState(initialSearchValue)
    let [searchItems, setSearchItems] = React.useState([])

    React.useEffect(()=> {
        if(searchValue.length < 1) {
            setSearchItems(itemList)
    
        }else {
            const itemsFilter = itemList.filter(item => {
                const itemText = item.text.toLowerCase()
                const searchText = searchValue.toLowerCase()
                return itemText.includes(searchText)
            })
            
            setSearchItems(itemsFilter)
        }

    }, [itemList, searchValue])


    return {
        searchValue,
        setSearchValue,
        searchItems
    }
}

export { useFilterBySearch }