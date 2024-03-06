import Portrait from "./portrait";

export default function ManagementAndStaff() {
  return (
    <>
      <div className="pt-5 md:px-20">
        <p className="px-16 py-16 text-center text-2xl font-semibold">
          Management and Staff
        </p>
        <div className="grid grid-cols-3 justify-center items-center">
          <Portrait
            name="Leanne"
            position="Chief Executive Officer"
            imagePath="/images/our-people/Leanne.jpg"
            info="blah"
            board={false}
          />
          <Portrait
            name="Francine"
            position="Chief Financial Officer"
            imagePath="/images/our-people/Francine.jpg"
            info="blah"
            board={false}
          />
          <Portrait
            name="Kathleen"
            position="Senior Social Worker"
            imagePath="/images/our-people/Kathleen.jpg"
            info="blah"
            board={false}
          />
          <Portrait
            name="Caroline"
            position="Outreach Coordinator"
            imagePath="/images/our-people/Caroline.png"
            info="blah"
            board={false}
          />
          <Portrait
            name="Jodie"
            position="Outreach Worker"
            imagePath="/images/our-people/Jodie.png"
            info="blah"
            board={false}
          />
          <Portrait
            name="Anne"
            position="Domestic Violence Advocate"
            imagePath="/images/our-people/Anne.jpg"
            info="blah"
            board={false}
          />
          <Portrait
            name="Nadia"
            position="Domestic Violence Advocate"
            imagePath="/images/our-people/Nadia.jpg"
            info="blah"
            board={false}
          />
          <Portrait
            name="Elena"
            position="Women's Advocate"
            imagePath="/images/our-people/Elena.jpg"
            info="blah"
            board={false}
          />
          <Portrait
            name="Fei"
            position="Children's Advocate"
            imagePath="/images/our-people/Fei.jpg"
            info="blah"
            board={false}
          />
        </div>
        <div>
          <Portrait
              name="Sandie"
              position="Volunteer Op Shop Manager"
              imagePath="/images/our-people/Sandie.jpg"
              info="last"
              board={false}
            />
        </div>
      </div>
    </>
  );
}
