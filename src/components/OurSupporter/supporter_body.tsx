export default function Body(){
    return (
        <>
        <div>
            <div className = "grid grid-cols-2">
                <div className="our_partners bg-starick-olive flex justify-center items-center">
                    <p className="font-semibold text-xl ml-48">Our Partners in Service Delivery</p>
                </div>
                <div className = "image flex justify-center">
                    <img src = "./placeholder_starick_logo.png" /> 
                </div>
            </div>
            <div className = "access_housing flex justify-center items-center">
                <div className = "image mr-5">
                    <img className = "h-32 w-32" src = "./images/health.png"/>
                </div>
                <div className = "body-text w-auto py-10 pl-10 my-3" style ={{maxWidth : "700px"}}>
                <p>
                    <span><a href = "">Access Housing</a></span> – a partner in the provision of transitional housing.<br />
                    <span><a href = "">Department for Child Protection and Family Support</a></span> – provides our major funding to enable us to offer our core services.<br />
                    <span><a href = "">Department of Housing</a></span> – a partner in the provision of transitional housing.<br />
                    <span><a href = "">Homelessness Australia</a></span><br />
                    <span><a href = "">Lottery West</a></span> – provides us with annual funds for essential emergency relief.<br />
                    <span><a href = "">City of Canning</a></span> – contributes to the provision of Mary Smith for crisis accommodation.<br />
                    <span><a href = "">City of Gosnells</a></span> – contributes to the provision of Starick House for crisis accommodation.<br />
                    <span><a href = "">Women's Council for Family and Domestic Violence Services</a></span>
                </p>
                </div>
            </div>
            <div className = "donors grid grid-cols-2 mb-10">
                <div className = "flex justify-center">
                    <img src = "./placeholder_starick_logo.png"/>
                </div>
                <div className = "flex justify-center bg-starick-green text-white items-center">
                    <p className = "font-semibold text-xl mr-48">Major Donors and Supporters</p>
                </div>
            </div>
        </div>
        </>
    )
}