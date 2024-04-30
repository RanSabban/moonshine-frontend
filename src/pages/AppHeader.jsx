import { NavLink } from "react-router-dom";
import { ProductsFilter } from "../cmps/ProductsFilter";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { MenuNav } from "../cmps/MenuNav";
import useDelayedMount from "../customHooks/useDelayedUnmount";
import CloseIcon from '@mui/icons-material/Close';
import { LoginSignup } from "../cmps/LoginSignup";



export function AppHeader() {

    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [menuIcon, setMenuIcon] = useState(<MenuIcon />);
    const [menuText, setMenuText] = useState("Menu");

    // const shouldRenderMenu = useDelayedMount(isMenuOpen, 100)
    const { shouldRender: shouldRenderMenu, shouldAnimate: shouldAnimateMenu } = useDelayedMount(isMenuOpen, 1, 20, 300)
    const { shouldRender: shouldRenderSearch, shouldAnimate: shouldAnimateSearch } = useDelayedMount(isFilterOpen, 1, 20, 300)
    const { shouldRender: shouldRenderLogin, shouldAnimate: shouldAnimateLogin } = useDelayedMount(isLoginOpen, 1, 20, 300)
    const { shouldAnimate: shouldAnimateIcon } = useDelayedMount(isMenuOpen, 1, 10, 500)
    const { shouldAnimate: shouldAnimateText } = useDelayedMount(isMenuOpen, 1, 10, 500)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        if (isMenuOpen) {
            setMenuIcon(<MenuIcon />)
            setMenuText("Menu")
        } else {
            setMenuIcon(<CloseIcon />)
            setMenuText("Close")
        }
    }

    return (
        <header className="app-header">
            <nav>
                <section className="header-actions-container">
                    <div className="menu-header" onClick={toggleMenu}>
                        <div className={`menu-icon ${shouldAnimateIcon ? 'active' : ''}`}>
                            {menuIcon}
                        </div>
                        <span className={`menu-text ${shouldAnimateText ? 'active' : ''}`}>
                            {menuText}
                        </span>
                    </div>
                    {shouldRenderMenu && (
                        <section className={`menu-nav ${shouldAnimateMenu ? 'active' : ''}`}>
                            <MenuNav setIsMenuOpen={setIsMenuOpen} />
                        </section>
                    )}
                    <div onClick={() => setIsFilterOpen(!isFilterOpen)} className="search-header">
                        <SearchIcon />
                        <span>Search</span>
                    </div>
                </section>
                {shouldRenderSearch && (
                    <section className={`products-filter ${shouldAnimateSearch ? 'active' : ''}`}>
                        <ProductsFilter />
                        <div className="close-filter-btn" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                            <CloseIcon />
                        </div>
                    </section>
                )}
            </nav>
            <span className="header-logo">
                MoonShine
            </span>
            <section className="header-user-container">
                <span>Contact Us</span>
                <FavoriteBorderIcon />
                <section className="login-signup-container" onClick={() => setIsLoginOpen(!isLoginOpen)}>
                    <PersonOutlineIcon />
                </section>
                {shouldRenderLogin && (
                    <section className={`login-signup-menu-container ${shouldAnimateLogin ? 'active' : ''}`}>
                        <LoginSignup />
                    </section>
                )}
            </section>
            <div className={`backdrop ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>

            </div>
            <div className={`backdrop ${isFilterOpen ? 'active' : ''}`} onClick={() => setIsFilterOpen(!isFilterOpen)}>

            </div>
            <div className={`backdrop ${isLoginOpen ? 'active' : ''}`} onClick={() => setIsLoginOpen(!isLoginOpen)}>

            </div>
        </header>
    )
}