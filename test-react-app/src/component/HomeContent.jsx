export function HomeContent() {
    return (
        <div>
            <div>
                <div className="content-bg-wrap" />
                <div className="header--standard header--standard-landing" id="header--standard">
                    <div className="container">
                        <div className="header--standard-wrap">
                            <a href="#" className="logo">
                                <div className="img-wrap">
                                    <img src="img/logo.png" alt="Olympus" />
                                    <img src="img/logo-colored-small.png" alt="Olympus" className="logo-colored" />
                                </div>
                                <div className="title-block">
                                    <h6 className="logo-title">olympus</h6>
                                    <div className="sub-title">SOCIAL NETWORK</div>
                                </div>
                            </a>
                            <a href="#" className="open-responsive-menu js-open-responsive-menu">
                                <svg className="olymp-menu-icon">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon" />
                                </svg>
                            </a>
                            <div className="nav nav-pills nav1 header-menu">
                                <div className="mCustomScrollbar">
                                    <ul>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">Home</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false" tabIndex={1}>Profile</a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Profile Page</a>
                                                <a className="dropdown-item" href="#">Newsfeed</a>
                                                <a className="dropdown-item" href="#">Post Versions</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown dropdown-has-megamenu">
                                            <a href="#" className="nav-link dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false" tabIndex={1}>Forums</a>
                                            <div className="dropdown-menu megamenu">
                                                <div className="row">
                                                    <div className="col col-sm-3">
                                                        <h6 className="column-tittle">Main Links</h6>
                                                        <a className="dropdown-item" href="#">Profile Page<span className="tag-label bg-blue-light">new</span></a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                    </div>
                                                    <div className="col col-sm-3">
                                                        <h6 className="column-tittle">BuddyPress</h6>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page<span className="tag-label bg-primary">HOT!</span></a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                    </div>
                                                    <div className="col col-sm-3">
                                                        <h6 className="column-tittle">Corporate</h6>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                    </div>
                                                    <div className="col col-sm-3">
                                                        <h6 className="column-tittle">Forums</h6>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                        <a className="dropdown-item" href="#">Profile Page</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">Terms &amp; Conditions</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">Events</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">Privacy Policy</a>
                                        </li>
                                        <li className="close-responsive-menu js-close-responsive-menu">
                                            <svg className="olymp-close-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon" />
                                            </svg>
                                        </li>
                                        <li className="nav-item js-expanded-menu">
                                            <a href="#" className="nav-link">
                                                <svg className="olymp-menu-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon" />
                                                </svg>
                                                <svg className="olymp-close-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="shoping-cart more">
                                            <a href="#" className="nav-link">
                                                <svg className="olymp-shopping-bag-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-shopping-bag-icon" />
                                                </svg>
                                                <span className="count-product">2</span>
                                            </a>
                                            <div className="more-dropdown shop-popup-cart">
                                                <ul>
                                                    <li className="cart-product-item">
                                                        <div className="product-thumb">
                                                            <img src="img/product1.png" alt="product" />
                                                        </div>
                                                        <div className="product-content">
                                                            <h6 className="title">White Enamel Mug</h6>
                                                            <ul className="rait-stars">
                                                                <li>
                                                                    <i className="fa fa-star star-icon c-primary" aria-hidden="true" />
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-star star-icon c-primary" aria-hidden="true" />
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-star star-icon c-primary" aria-hidden="true" />
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-star star-icon c-primary" aria-hidden="true" />
                                                                </li>
                                                                <li>
                                                                    <i className="far fa-star star-icon" aria-hidden="true" />
                                                                </li>
                                                            </ul>
                                                            <div className="counter">x2</div>
                                                        </div>
                                                        <div className="product-price">$20</div>
                                                        <div className="more">
                                                            <svg className="olymp-little-delete">
                                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" />
                                                            </svg>
                                                        </div>
                                                    </li>
                                                    <li className="cart-product-item">
                                                        <div className="product-thumb">
                                                            <img src="img/product2.png" alt="product" />
                                                        </div>
                                                        <div className="product-content">
                                                            <h6 className="title">Olympus Orange Shirt</h6>
                                                            <ul className="rait-stars">
                                                                <li>
                                                                    <i className="fa fa-star star-icon c-primary" aria-hidden="true" />
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-star star-icon c-primary" aria-hidden="true" />
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-star star-icon c-primary" aria-hidden="true" />
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-star star-icon c-primary" aria-hidden="true" />
                                                                </li>
                                                                <li>
                                                                    <i className="far fa-star star-icon" aria-hidden="true" />
                                                                </li>
                                                            </ul>
                                                            <div className="counter">x1</div>
                                                        </div>
                                                        <div className="product-price">$40</div>
                                                        <div className="more">
                                                            <svg className="olymp-little-delete">
                                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" />
                                                            </svg>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="cart-subtotal">Cart Subtotal:<span>$80</span></div>
                                                <div className="cart-btn-wrap">
                                                    <a href="#" className="btn btn-primary btn-sm">Go to Your Cart</a>
                                                    <a href="#" className="btn btn-purple btn-sm">Go to Checkout</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="menu-search-item">
                                            <a href="#" className="nav-link" data-toggle="modal" data-target="#main-popup-search">
                                                <svg className="olymp-magnifying-glass-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-spacer--standard" />
                <div className="container">
                    <div className="row display-flex">
                        <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="landing-content">
                                <h1>Welcome to the Biggest Social Network in the World</h1>
                                <p>We are the best and biggest social network with 5 billion active users all around the world. Share
                                    you
                                    thoughts, write blog posts, show your favourite music via Stopify, earn badges and much more!
                                </p>
                                <a href="#" className="btn btn-md btn-border c-white">Register Now!</a>
                            </div>
                        </div>
                        <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="registration-login-form">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#home" role="tab">
                                            <svg className="olymp-login-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-login-icon" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#profile" role="tab">
                                            <svg className="olymp-register-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-register-icon" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="home" role="tabpanel" data-mh="log-tab">
                                        <div className="title h6">Register to Olympus</div>
                                        <form className="content">
                                            <div className="row">
                                                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group label-floating">
                                                        <label className="control-label">First Name</label>
                                                        <input className="form-control" placeholder type="text" />
                                                    </div>
                                                </div>
                                                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group label-floating">
                                                        <label className="control-label">Last Name</label>
                                                        <input className="form-control" placeholder type="text" />
                                                    </div>
                                                </div>
                                                <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group label-floating">
                                                        <label className="control-label">Your Email</label>
                                                        <input className="form-control" placeholder type="email" />
                                                    </div>
                                                    <div className="form-group label-floating">
                                                        <label className="control-label">Your Password</label>
                                                        <input className="form-control" placeholder type="password" />
                                                    </div>
                                                    <div className="form-group date-time-picker label-floating">
                                                        <label className="control-label">Your Birthday</label>
                                                        <input name="datetimepicker" defaultValue="10/24/1984" />
                                                        <span className="input-group-addon">
                                                            <svg className="olymp-calendar-icon">
                                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div className="form-group label-floating is-select">
                                                        <label className="control-label">Your Gender</label>
                                                        <select className="selectpicker form-control">
                                                            <option value="MA">Male</option>
                                                            <option value="FE">Female</option>
                                                        </select>
                                                    </div>
                                                    <div className="remember">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input name="optionsCheckboxes" type="checkbox" />
                                                                I accept the <a href="#">Terms and Conditions</a> of the website
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="btn btn-purple btn-lg full-width">Complete Registration!</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane" id="profile" role="tabpanel" data-mh="log-tab">
                                        <div className="title h6">Login to your Account</div>
                                        <form className="content">
                                            <div className="row">
                                                <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group label-floating">
                                                        <label className="control-label">Your Email</label>
                                                        <input className="form-control" placeholder type="email" />
                                                    </div>
                                                    <div className="form-group label-floating">
                                                        <label className="control-label">Your Password</label>
                                                        <input className="form-control" placeholder type="password" />
                                                    </div>
                                                    <div className="remember">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input name="optionsCheckboxes" type="checkbox" />
                                                                Remember Me
                                                            </label>
                                                        </div>
                                                        <a href="#" className="forgot" data-toggle="modal" data-target="#restore-password">Forgot my Password</a>
                                                    </div>
                                                    <a href="#" className="btn btn-lg btn-primary full-width">Login</a>
                                                    <div className="or" />
                                                    <a href="#" className="btn btn-lg bg-facebook full-width btn-icon-left"><i className="fab fa-facebook-f" aria-hidden="true" />Login with Facebook</a>
                                                    <a href="#" className="btn btn-lg bg-twitter full-width btn-icon-left"><i className="fab fa-twitter" aria-hidden="true" />Login with Twitter</a>
                                                    <p>Don’t you have an account? <a href="#">Register Now!</a> it’s really simple and
                                                        you can start enjoing all the benefits!</p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}