export default function Body() {
  return (
    <>
      <div className="mb-10">
        <div className="grid grid-cols-2">
          <div className="our_partners flex items-center justify-center bg-starick-olive">
            <p className="ml-48 text-xl font-semibold">
              Our Partners in Service Delivery
            </p>
          </div>
          <div className="image flex justify-center">
            <img src="./images/home/_MG_9216.jpg" alt="" />
          </div>
        </div>
        <div className="access_housing flex items-center justify-center">
          <div className="image mr-5">
            <img
              className="h-32 w-32"
              src="./images/home/two-refuges.png"
              alt=""
            />
          </div>
          <div
            className="body-text my-3 w-auto py-10 pl-10"
            style={{ maxWidth: "700px" }}
          >
            <p>
              <span>
                <a href="">Access Housing</a>
              </span>{" "}
              – a partner in the provision of transitional housing.
              <br />
              <span>
                <a href="">
                  Department for Child Protection and Family Support
                </a>
              </span>{" "}
              – provides our major funding to enable us to offer our core
              services.
              <br />
              <span>
                <a href="">Department of Housing</a>
              </span>{" "}
              – a partner in the provision of transitional housing.
              <br />
              <span>
                <a href="">Homelessness Australia</a>
              </span>
              <br />
              <span>
                <a href="">Lottery West</a>
              </span>{" "}
              – provides us with annual funds for essential emergency relief.
              <br />
              <span>
                <a href="">City of Canning</a>
              </span>{" "}
              – contributes to the provision of Mary Smith for crisis
              accommodation.
              <br />
              <span>
                <a href="">City of Gosnells</a>
              </span>{" "}
              – contributes to the provision of Starick House for crisis
              accommodation.
              <br />
              <span>
                <a href="">
                  Women&rsquo;s Council for Family and Domestic Violence
                  Services
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="donors mb-10 grid grid-cols-2">
          <div className="flex justify-center">
            <img src="./images/home/_MG_9222.jpg" alt="" />
          </div>
          <div className="flex items-center justify-center bg-starick-green text-white">
            <p className="mr-48 text-xl font-semibold">
              Major Donors and Supporters
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
