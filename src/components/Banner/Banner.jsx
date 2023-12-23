


function Banner({img, title}) {
    return (
        <div className="banner">
            <img src={img}  className="banner__img"/>
            <div className="banner__overlay">
                <h1 className="banner__overlay--title">{title}</h1>
            </div>
        </div>

    )
}

export default Banner;
