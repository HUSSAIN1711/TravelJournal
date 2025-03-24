export default function Entry() {
    return(
        <article className = "journal-entry">
            <div className = "main-image-container">
                <img 
                    className = "main-image" 
                    src = "/images/Japan.png"
                    alt = "Japan Image"
                />
            </div>
            
            <div className = "info-container">
                <img 
                    className = "marker" 
                    src = "/images/Marker.png"
                    alt = "Marker"
                />
                <span className = "country">Japan </span>
                <a href = "https://www.google.com/maps/place/Chureito+Pagoda/@35.5012669,138.7988103,17z/data=!3m1!4b1!4m6!3m5!1s0x6019674cfd52a073:0xda57e34920aee799!8m2!3d35.5012626!4d138.8013852!16s%2Fg%2F11c1bkcr3m?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">View on Google Maps</a>
                <h2 className = "entry-title">Mount Fuji</h2>
                <p className = "trip-dates">12 Jan, 2025 - 24 Jan, 2025</p>
                <p className = "entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in japan, for both Japanese and foreign tourists</p>
            </div>
        </article>
    )
}