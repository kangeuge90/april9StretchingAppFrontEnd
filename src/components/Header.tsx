function Header() {
    return(
        <div className='headerContainer'>
            <div className='headerTitle'>
                Welcome to my Stretching App!
            </div>
            <div className='headerButtonsContainer'>
                <button className='headerButton' id='homeButton'>
                    Home
                </button>
                <button className='headerButton' id='logInButton'>
                    Log In
                </button>
                <button className='headerButton' id='favoritesButton'>
                    Favorites
                </button>
            </div>

        </div>
    )
}

export default Header;