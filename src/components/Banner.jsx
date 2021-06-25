

const Banner = ({title, image, description}) => {
    return(
        <div className="banner">
            <h4>
                {title}
            </h4>

            {
                description ?
                <p className="text-center">{description}</p>
                :
                ""
            }
        </div>
    )
}


export default Banner


