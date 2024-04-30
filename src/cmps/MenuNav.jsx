import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function MenuNav({ setIsMenuOpen }) {

    const titles = ['shirts', 'pants', 'about us']

    return (
        <>
            <ul className="menu-nav-list">
                {
                    titles.map((title, index) => (
                        <li className="menu-nav-list-item" key={index}>
                            <span className="menu-nav-list-item-title">{title}</span>
                            <ArrowForwardIosIcon />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}