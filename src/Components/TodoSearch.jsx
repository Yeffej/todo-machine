// Styles
import '../Styles/TodoSearch.css';

const TodoSearch = ({searchValue, setSearchValue})=> {
    const onChangeSearch = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <input 
            onChange={onChangeSearch} 
            className="TodoSearch" 
            type="text" placeholder="Buscar..."
            value={searchValue}
        />
    )
}

export { TodoSearch }