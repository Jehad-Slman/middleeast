import classes from "./aboutus.module.css";

const screenWidth = window.innerWidth > 600

const Aboutus = props => {
    return(
        <section className={classes.aboutus} id="aboutus">
            <h2>About Us</h2>
            {screenWidth && 
            <>
            <section>
                <img src="https://placehold.co/300x250"/>
                <p>Trayan and Osama! We discovered our passion for cooking from a young age. Guided by our grandparents and influenced by the seasons, we mastered the art of Middle Eastern cuisine.<br/>Our journey took us from the Syrian sea side to the Czech Republic, where we now share our love for authentic flavours with the world through our catering business.</p>
            </section>

            <section>
                <p>Today, as partners in business, we blend tradition with innovation in every dish we create, connecting people through shared experiences and bringing a taste of our homeland to tables around the globe.<br/>Join us on this flavorful adventure, where every bite is a journey back to our roots and a celebration of Middle Eastern cuisine. From the mountains of Syria to the hearts of food lovers everywhere, let us take you on a culinary voyage unlike any other. Bon appétit!</p>
                <img src="https://placehold.co/300x250"/>
            </section>
            </>}
            
            {!screenWidth && 
            <>
            <section>
                <img src="https://placehold.co/300x250"/>
                <img src="https://placehold.co/300x250"/>
            </section>
            <section>
                <p>Trayan and Osama! We discovered our passion for cooking from a young age. Guided by our grandparents and influenced by the seasons, we mastered the art of Middle Eastern cuisine.<br/>Our journey took us from the Syrian sea side to the Czech Republic, where we now share our love for authentic flavours with the world through our catering business.</p>
                <p>Today, as partners in business, we blend tradition with innovation in every dish we create, connecting people through shared experiences and bringing a taste of our homeland to tables around the globe.<br/>Join us on this flavorful adventure, where every bite is a journey back to our roots and a celebration of Middle Eastern cuisine. From the mountains of Syria to the hearts of food lovers everywhere, let us take you on a culinary voyage unlike any other. Bon appétit!</p>
            </section>
            </>}
        </section>
    )
}

export default Aboutus;