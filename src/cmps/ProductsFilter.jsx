import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';



export function ProductsFilter() {

    const [filterByToUpdate, setFilterByToUpdate] = useState('')

    return (
        <>
            <section className="input-container">
                <div className="search-icon-input-container">
                    <SearchIcon />
                </div>
                <input id="global-search-input" className="global-search-input" type="text" placeholder="Search for cool shirts 😏" />
            </section>
        </>
    )
}