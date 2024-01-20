import ServicesSection from "../Services/services-section";
import PublicationList from "./pulications-list";

export default function AnnualReports() {
    const itemList = [
      {text: "Starick Annual Report 2021-2022", 
      link: "https://www.starick.org.au/wp-content/uploads/2021-22-Starick-Annual-Report.pdf"},
      {text: "Starick Annual Report 2020-2021", 
      link: "https://www.starick.org.au/wp-content/uploads/Starick-Annual-Report-2020-2021-Final.pdf"},
      {text: "Starick Annual Report 2019-2020", 
      link: "https://www.starick.org.au/wp-content/uploads/Starick-Annual-Report-19-20.pdf"},
      {text: "Starick Annual Report 2018-2019", 
      link: "https://www.starick.org.au/wp-content/uploads/Starick-Annual-Report-2018-19-2.pdf"},
      {text: "Starick Annual Report 2017-2018", 
      link: "https://www.starick.org.au/wp-content/uploads/annual-report-a3-2017-2018-print-version.pdf"},
      {text: "Starick Annual Report 2016-2017", 
      link: "https://www.starick.org.au/wp-content/uploads/Starick_AR_2017.pdf"},
      {text: "Starick Annual Report 2015-2016", 
      link: "https://www.starick.org.au/wp-content/uploads/Starick-AR-2016-FINAL-1.pdf"},
      {text: "Starick Annual Report 2014-2015", 
      link: "https://www.starick.org.au/wp-content/uploads/Starick-AR-2015-FINAL.pdf"},
      {text: "Starick Annual Report 2013-2014", 
      link: "https://www.starick.org.au/wp-content/uploads/Starick-Annual-Report-2014.pdf"},
      {text: "Starick Annual Report 2012-2013", 
      link: "https://www.starick.org.au/wp-content/uploads/Starick-Annual-Report-2013.pdf"},
      {text: "Starick Annual Report 2011-2012", 
      link: "https://www.starick.org.au/wp-content/uploads/Starick-Annual-Report-2012.pdf"},
      {text: "Starick Annual Report 2010-2011", 
      link: "https://www.starick.org.au/wp-content/uploads/Starick-Annual-Report-2011.pdf"},
      {text: "Starick Annual Report 2009-2010", 
      link: "https://www.starick.org.au/wp-content/uploads/Starick-Annual-Report-2010.pdf"}]
    
    const body = <PublicationList items={itemList}/>
    return (
        <ServicesSection
          titleTextColour="starick-black"
          titleBackgroundColour="starick-olive"
          sectionBody={body}
          title="Annual Reports"
          iconPath="icons/refugees.svg"
        />  );
}