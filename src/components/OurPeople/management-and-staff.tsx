import Portrait from "./portrait";

export default function ManagementAndStaff() {
  return (
    <>
      <div className="mb-10 flex justify-center gap-10">
        <div className="pt-5 md:px-20" style={{ maxWidth: "2000px" }}>
          <p className="px-16 py-16 text-center text-2xl font-semibold">
            Management and Staff
          </p>
          <div className="mb-5 grid grid-cols-4 items-center justify-center gap-6">
            <Portrait
              name="Leanne"
              position="Chief Executive Officer"
              imagePath="/images/our-people/Leanne.jpg"
              info="blah"
            />
            <Portrait
              name="Francine"
              position="Chief Financial Officer"
              imagePath="/images/our-people/Francine.jpg"
              info="blah"
            />
            <Portrait
              name="Caroline"
              position="Outreach Coordinator"
              imagePath="/images/our-people/Caroline.png"
              info="blah"
            />
            <Portrait
              name="Jodie"
              position="Outreach Worker"
              imagePath="/images/our-people/Jodie.png"
              info="blah"
            />
          </div>
          <div className="flex justify-center gap-6">
            <Portrait
              name="Anne"
              position="Domestic Violence Advocate"
              imagePath="/images/our-people/Anne.jpg"
              info="blah"
            />
            <Portrait
              name="Nadia"
              position="Domestic Violence Advocate"
              imagePath="/images/our-people/Nadia.jpg"
              info="blah"
            />
            <Portrait
              name="Fei"
              position="Children's Advocate"
              imagePath="/images/our-people/Fei.jpg"
              info="blah"
            />
          </div>
        </div>
      </div>
    </>
  );
}
