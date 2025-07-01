import '../Styles/TodoSearch.css';

const TodoSearch = ({ searchValue, setSearchValue })=> {
    const onChangeSearch = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div>
            <input 
                name="search"
                onChange={onChangeSearch}
                className="TodoSearch" 
                type="text" placeholder="Buscar..."
                value={searchValue}
                autoComplete="off"
            />
        </div>
    )
}

export { TodoSearch }