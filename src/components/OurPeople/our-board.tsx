import Portrait from "./portrait";

export default function OurPortrait() {
  return (
    <>
      <div className="mb-10 mt-10 flex justify-center gap-10">
        <div className="mb-10" style={{ maxWidth: "2000px" }}>
          <p className="px-16 py-16 text-center text-2xl font-semibold">
            Our Board
          </p>
          <div className="mb-5 grid grid-cols-4 items-center justify-center gap-6">
            {/* Added reverse to determine if the person should be reversed or not, according to Figma */}
            <Portrait
              name="Natalie Sangalli"
              position="Chair"
              imagePath="/images/our-people/natalie-sangalli.jpg"
              info="blah"
            />
            <Portrait
              name="Gail Brindley"
              position="Deputy Chair"
              imagePath="/images/our-people/gail-brindley.jpg"
              info="blah"
            />
            <Portrait
              name="Liza Dunne"
              position="Treasurer"
              imagePath="/images/our-people/liza-dunne.jpg"
              info="blah"
            />
            <Portrait
              name="Carolyn Turner"
              position="Portrait Member"
              imagePath="/images/our-people/carolyn-turner.jpg"
              info="blah"
            />
          </div>
          <div className="-row flex justify-center gap-10">
            <Portrait
              name="Kylie Cutten"
              position="Portrait Member"
              imagePath="/images/our-people/kylie-cutten.png"
              info="blah"
            />
            <Portrait
              name="Claudia Mancini"
              position="Portrait Member"
              imagePath="/images/our-people/claudia-mancini.png"
              info="blah"
            />
            <Portrait
              name="Anna Wildy"
              position="Portrait Member"
              imagePath="/images/our-people/anna-wildy.jpg"
              info="blah"
            />
          </div>
        </div>
      </div>
    </>
  );
}
