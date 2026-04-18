import PropTypes from 'prop-types';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="terminal-icon">&gt;_</span>
            {/*<span className="icon fa-diamond"></span>*/}
            {/* <FontAwesomeIcon icon={faGem} transform="grow-18" /> */}
        </div>
        <div className="content">
            <div className="inner">
                <h1>Dyvan&#x27;s</h1>
                <p>
                    Hi there, welcome to my site. I hope you find it interesting. <br />
                    Feel free to contact me if you want to know more about me or just want a chat!
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a onClick={(e) => {e.preventDefault(); props.onOpenArticle('intro');}}>Intro</a></li>
                <li><a onClick={(e) => {e.preventDefault(); props.onOpenArticle('work');}}>Work</a></li>
                <li><a onClick={(e) => {e.preventDefault(); props.onOpenArticle('about');}}>About</a></li>
                <li><a onClick={(e) => {e.preventDefault(); props.onOpenArticle('contact');}}>Contact</a></li>
            </ul>
        </nav>

    </header>
    
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
