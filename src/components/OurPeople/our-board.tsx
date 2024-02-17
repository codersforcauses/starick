import Portrait from "./portrait";

export default function OurBoard() {
  return (
    <>
      <p className="px-16 py-16 text-center text-2xl font-semibold">
        Our Board
      </p>
      <div className="mx-2.5 my-2.5 flex flex-wrap justify-center gap-8">
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
          position="Board Member"
          imagePath="/images/our-people/carolyn-turner.jpg"
          info="blah"
        />
        <Portrait
          name="Kylie Cutten"
          position="Board Member"
          imagePath="/images/our-people/kylie-cutten.png"
          info="blah"
        />
        <Portrait
          name="Claudia Mancini"
          position="Board Member"
          imagePath="/images/our-people/claudia-mancini.png"
          info="blah"
        />
        <Portrait
          name="Anna Wildy"
          position="Board Member"
          imagePath="/images/our-people/anna-wildy.jpg"
          info="blah"
        />
      </div>
    </>
  );
}
