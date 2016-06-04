# PromiseZoneExplorer

####In honor of the [National Day of Civic Hacking 2016](https://www.codeforamerica.org/events/national-day-2016) we aim to provide tools to help decisionmakers better understand, visualize, and prioritize the challenges faced by the most disadvantaged neighborhoods in Sacramento.

MapZoneDollarsVsPerformance
National Day of Civic Hacking 2016

this README containing instructions and information to include in your submission; and, a LICENSE that allows anyone to do anything they want with your code as long as they provide attribution back to you and don’t hold you liable. Project Information

National Day of Civic Hacking - Projects to provide Promise Zone Information on a Dollars Invested vs Performance in a Map format as a way to evaluate results and for the local community to engage with the government.

Project Name

MapZoneEval

Project Description
 
Data Sources:
Money in Budget designated for promise zone areas:
  1. Health
  2. Unemployment
  3. Education
       http://www.scusd.edu/sites/main/files/file-attachments/4._location_resource_summary_f16_sort_by_location_fund_resource_code_page_break_at_loc_-_month_9_0.pdf
  (identify by school names in promise zone - )
    http://www.scusd.edu/k-12-school-directory
  4. Sustainable Communities
    a. Crime/Violence
  http://data.cityofsacramento.org/dataviews/227754/city-of-sacramento-proposed-budget-fiscal-year-201516/
  //(convert district to location needed to identify promise zone) - 
  //(identify salries for public safety)
  // old salary info (http://data.cityofsacramento.org/dataviews/77472/sacramento-fy201314-citywide-staffing-summary/)
    b. Housing

District Locations: 
  http://data.cityofsacramento.org/dataviews/77743/council-districts/ 
  //(contains lat and long data for each district boundaries)


1 Health
2 Unemployment
3 Education
 
  (identify by school names in promise zone - )
  http://www.scusd.edu/k-12-school-directory
4 Sustainable Communities
  a Crime/Violence
    data.cityofsacramento.org/ (Restful API access)
      http://data.cityofsacramento.org/dataviews/93307/sacramento-crime-data-from-current-year/  
      http://data.cityofsacramento.org/dataviews/93308/sacramento-crime-data-from-one-year-ago/
      http://data.cityofsacramento.org/dataviews/93309/sacramento-crime-data-from-two-years-ago/
      // (convert district to location needed to idenitify if it lands in the promise zone) -(Census Track)
  b Housing



Team Members

Joanne Werneke, joannemwerneke@gmail.com 
Kevin Fries, kelfink@yahoo.com 
Hillary Gaines, gaines219@gmail.com 
Cliff Cheng, ccfcheng@gmail.com 
Aheri Stanford-Asiyo, aherisan@gmail.com
Maya Wallace, mayagirl@gmail.com

The Theme: Revitalizing Priority Neighborhoods

Sacramento is an economically and culturally diverse city that can also lay claim to being the most integrated city in the country. Residents from all walks of life live and work in close proximity to each other and share, to a certain extent, the ups and downs of the city together. However, Sacramento’s integration, including its economic integration, is far from complete. While the city’s fortunes have risen in recent years, the benefits of this rise have not permeated every community. At the same time, the city’s primary tool for promoting the development of its disadvantaged communities--redevelopment--was stripped by the state in recent years.

The Opportunity

You can help Sacramento revitalize its priority neighborhoods by creating:

Tools to help decisionmakers better understand, visualize, and prioritize the challenges faced by the most disadvantaged neighborhoods in Sacramento. Streamlined processes for creating new businesses that provide jobs in these communities. Better ways to connect disadvantaged residents, including homeless residents, with services they need. Methods that help residents communicate to decisionmakers their needs, ideas, and desires for their communities. The Challenges

Participants can take part in a number of official national and state challenges that align with the theme of Revitalizing Priority Neighborhoods.

Promise Zone Challenge: Serving as the central organizing challenge for the day, the White House's Promise Zone Challenge asks teams to visualize data to help tell the story of Promise Zones. Opportunity Project Challenge: This challenge asks teams to use Census data to increase opportunity in disadvantaged communities. Food Insecurity Challenge: This challenge, from the State of California, asks teams to create an actionable picture of food insecurity in communities and build solutions to tackle the issue. Community Health Needs and Priorities Challenge: This challenge, also from the State of California, asks teams to develop a tool to help communities create a dialogue with government around health and wellbeing needs and priorities. The Resources

Geographies

Promise Zone: Sacramento is one of only 13 communities nationwide with a federally-designated Promise Zone. This defined area of the city and county has a 34% poverty rate, a 19% unemployment rate, and a life expectancy 7 years shorter than the rest of Sacramento County. The federal government and Code for America are promoting the visualization of Promise Zone data as an NDoCH challenge.

Information on Sacramento’s Promise Zone Promise Zone Geography - see "Shapefile" and "geoJSON" folders in the code4sac/ndoch-2016 Building Healthy Communities: The California Endowment has chosen an area of South Sacramento, which overlaps with the Promise Zone, as one of 14 communities statewide on which it is focusing a decade-long effort to improve health outcomes.

Sacramento’s Building Healthy Communities area BHC Geography - see "Shapefile" and "geoJSON" folders in this repository General Datasets

Promise Zone Performance Measurement Documents: The Federal government has produced many documents with ideas for how to measure Promise Zone performance, several of which are linked below. These are full of great data leads. But the Feds have specifically requested that we use our creativity to come up with novel ideas, and if they like what you create, they may adopt it nationally! If you need help finding data, please let us know and we'll do our best to help you out! see code4sac/ndoch-2016 readme.md for actual web links on the following data sources: Data Inventory for Management and Evaluation of Place-Based Initiatives (XLSX) Promise Zones Goals and Core Indicators (XLSX) Tracking Strategies and Roles for Promise Zone Designees and Federal Staff (PDF) Overview of Urban Promise Zones Communication, Reporting, and Data Sharing Framework (PDF) City of Sacramento Open Data: The City of Sacramento has begun a concerted effort to make its data available for use by the broader community. Several of the available datasets could be helpful in providing information about the targeted communities.

City of Sacramento Open Data Portal US Census and The Opportunity Project: The US Census offers downloadable data and an API to access datasets that can provide a wealth of information about communities, and is encouraging the creation of data-based apps through The Opportunity Project.

Opportunity Project City SDK Other US Census Data Regional Opportunity Index: The UC Davis Center for Regional Change has created a regional opportunity index at the census tract level that combines numerous characteristics of the people and places that make up a community.

Regional Opportunity Index Data.gov: The federal government has been placing ever-increasing amounts of data on its central open data portal.

Data.gov Health

CHHS Open Data Portal: The California Health and Human Services Agency maintains an open data portal containing numerous datasets regarding the overall health and health services available to Californians.

CHHS Open Data Portal Housing

HUD Datasets: The US Department of Housing and Urban Development provides a number of datasets that can provide information about the health and economic wellbeing of a community.

HUD Datasets Environment

CalEnviroScreen: The California Office of Environmental Health Hazard Assessment (OEHHA) has created a tool to identify communities that are disproportionately burdened by pollution. The CalEnviroScreen score is based on 19 individual measures of pollution and population vulnerability at the census tract level.

CalEnviroScreen 2.0
