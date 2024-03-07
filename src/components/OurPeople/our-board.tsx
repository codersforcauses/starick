import Board from "./board";

export default function OurBoard() {
  return (
    <>
    <div className = "mb-10">
      <p className="px-16 py-16 text-center text-2xl font-semibold">
      </p>
      <div className="mx-2.5 my-2.5 flex flex-col gap-8 w-auto items-center">
        {/* Added reverse to determine if the person should be reversed or not, according to Figma */}
        <Board
          name="Natalie Sangalli"
          position="Chair"
          imagePath="/images/our-people/natalie-sangalli.jpg"
          info="Natalie is the General Manager Community Housing at Access Housing and on the Board of ShelterWA, delivering social and affordable housing solutions to over 3,000 Western Australians. Prior to this she worked in the Justice Sector in both government and private organisations for over 16 years, advocating social justice issues and built a portfolio of achievements leading strategic service delivery and infrastructure projects, managing high profile, high risk contracts and leading service delivery teams."
          reverse={false}
        />
        <Board
          name="Gail Brindley"
          position="Deputy Chair"
          imagePath="/images/our-people/gail-brindley.jpg"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          reverse={true}
        />
        <Board
          name="Liza Dunne"
          position="Treasurer"
          imagePath="/images/our-people/liza-dunne.jpg"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          reverse={false}
        />
        <Board
          name="Carolyn Turner"
          position="Board Member"
          imagePath="/images/our-people/carolyn-turner.jpg"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          reverse={true}
        />
        <Board
          name="Kylie Cutten"
          position="Board Member"
          imagePath="/images/our-people/kylie-cutten.png"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          reverse={false}
        />
        <Board
          name="Claudia Mancini"
          position="Board Member"
          imagePath="/images/our-people/claudia-mancini.png"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          reverse={true}
        />
        <Board
          name="Anna Wildy"
          position="Board Member"
          imagePath="/images/our-people/anna-wildy.jpg"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          reverse={false}
        />
      </div>      
    </div>

    </>
  );
}
