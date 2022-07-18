# NewDeemFramework

**Framework Structure**

Locators --> perform action on the locator --> call necessary action function as per the requirement of the teststep --> spec file.

Inside locators, all the js file represent a separate page in the travel application. All the locators corresponding to the particular page is mentioned in the page's js file. <page.js>
Each locators are kept in a separate function.

This locators are assigned some actions. All the code that perform the actions to the locators are kept under each modules' module_action.js file. Actions are such as click, write etc. For eg: clicking login button in login page. login locators are kept in login_po.js file and the login actions are kept in common_actions.js file.
    Common folder has the common page, common page's action. For e.g: Login page, trip planner page, purchase page, etc are common page.

All the step functions from spec file reside under each module's js file. module.js. <car.js>, <hotel.js>, <air.js> etc.
In this js file, we simply call the action function from the required file and place it one after another as per our requirement. We reuse those funtions in this page as many times as we want as per the testcase.

A complete understandable feaure is covered in spec file. For eg: Search the fight as per the data below. This step enter Locations, dates and other required details and click on search button.
All the helping functions required to execute the testcase are kept in the helper file.
All the data resources are kept separate under resources folder.
Report folder keep track of reports of the testcase run.
Env folder list all the required environment data.
Log folder keep tracks of logs of each testcase run.
All the required hooks are mention in the step implementation.

_Technical:_
Everything in this project is functions. Functions will be imported/exported to respective file as per the requirement. This import/export of the function is done via creating a object of the file. With the help of the object, it's repective file's function can be imported anywhere. With single object, all the function's of the page can be called anywhere. No need to create separate object for each function.
Data encapsulation/Data abstraction/Polymorphism is used everywhere.

_Versions and installation:_
Recomended following version or above:

> Taiko version : `1.2.5` (Chromium:` 88.0.4314.0`) RELEASE
> Gauge version: `1.4.0`

After installing Gauge and taiko, 
Clone the project to your local repo.
Then, use > npm install.

## These are tags which we are using in our scripts

|     Tag Name      |                                Functionality Covered                                       |
| :---------------: | :----------------------------------------------------------------------------------------: |
| Sanity            | Basic Sanity flows                                                                         |
| Regression        | All regression scenarios                                                                   |
| Apollo            | Tests with apollo agency                                                                   |
| Worldspan         | Tests with worldspan agency                                                                |
| UserScenarios     | Identified Scenarios                                                                       | 
| AH                | Air and Hotel specific tests                                                               |
| AC                | Air and Carrental specific tests                                                           |
| HotelOnly         | Hotel specific tests                                                                       |
| CarRentalOnly     | Carrental specific tests                                                                   |
| TrainOnly         | Train specific tests                                                                       |
| ScheduleSearch    | Schedule search for Air tests                                                              |
| Cventtest         | Sign in to Cvent, schedule a meeting and finish travel booking based on meeting schedule   |
| Cventssotest      | Single Sign On(SSO) flows                                                                  |
| AirOnly           | Air only specific tests                                                                    |
| DynamicAirPolicy  | Dynamic air policy tests                                                                   |
| TC                | Train and carrental specific tests                                                         |
| THC               | Train, hotel and Carrental specific tests                                                  |
| AHC               | Air, hotel and Carrental specific tests                                                    |
| Set1              | Scenarios covered with GaikoTravel: AirOnly Flows, HotelOnly Flows, TrainOnly Flows,       |
|                   | CarRentalOnly Flows, TC Flows, TH Flows, AC Flows, AHC Flows, THC Flows, KAN, Baggage Fee, |
|                   | Default gds schedule search, Switching Views, Refine flight search, Lower fare,            |
|				    | Add service in trip detail page, Reference Point, GBT Direct Connect hotel for 15 days,    |                                                                
| Set2              | Scenarios covered with GaikoCustomFields: AirOnly Flows, HotelOnly Flows, TrainOnly Flows, |
|                   | CarRentalOnly Flows, TC Flows, TH Flows, AC Flows, AHC Flows, THC Flow, Dynamic Air Policy | 
|                   | Apple Map Verification, Penalty Hotels Flows           									 |                                                          
| Set3              | Delegate User Flows                                                                        |             
| Set4              | Travel Fusion Cases                                                                        |  
| Set5              | Loyalty membership and Special Request scenario for Air,hotel and carrental booking        |
| Set6              | Virtual Pay Sanity test cases for Sabre GDS                                                |
| Set7              | EHI Car Rental tests and Emerald Club Enrollment modal                                     | 
| Set8              | Eager Flight search
| Set9              | EHI Car Rental tests and Emerald Club Enrollment modal for New Site                        |
| Set10             | applesite1: Apple site to make non-stop options are available by updating ZK properties    |
| CarServiceSanity  | Car_Service                                                                                |
| CarServiceRegression | Car Service
| DashboardRegression | KTN, TRVL-S40A, TRVL-S40B, TRVL-S40C                                                     |

------------------------------------------------------------------------------------------------------------------

## Set vs Site vs User Profile matrix

 |Spec               |Set| Site             | User                                                             |
 |----------------- -|---|------------------|------------------------------------------------------------------|
 |TRVL-S1            |1A  |GaikoTravel       |User1                                                             |
 |TRVL-S2            |1A  |GaikoTravel       |User1                                                             |
 |TRVL-S5            |1A  |GaikoTravel       |User15                                                            |
 |TRVL-S6            |1A  |GaikoTravel       |User3                                                             |
 |TRVL-S7            |1A  |GaikoTravel       |User3                                                             |
 |TRVL-S8            |1A  |GaikoTravel       |TC1,TC3,TC5,TC7: User5, TC2,TC4,TC6: User4                        |
 |TRVL-S9            |1A  |GaikoTravel       |TC1,TC2,TC4,TC6:User9 , TC3,TC5:User10                            |
 |TRVL-S10           |1A  |GaikoTravel       |User7                                                             |
 |TRVL-S11           |1A  |GaikoTravel       |TC1,TC2: User1 , TC2: User3                                       |
 |TRVL-S18           |1A  |GaikoTravel       |User1                                                             |
 |TRVL-S19           |1A  |GaikoTravel       |TC1:User1, TC2: sanityUser1                                       |
 |TRVL-S20A          |7   |ehideem-1n6f       |TC1:User1, TC2: sanityUser1                                      |
 |TRVL-S20B          |7   |ehideem-1n6f       |TC1:User1, TC2: sanityUser1                                      |
 |TRVL-S148          |1B  |GaikoTravel       |User1                                                             |
 |TRVL-S33           |1B  |GaikoTravel       |TC1:User33, TC2: User34                                           |
 |TRVL-S34           |1B  |GaikoTravel       |User27                                                            |
 |TRVL-S45           |1B  |GaikoTravel       |User39                                                            |
 |TRVL-S47           |1B  |GaikoTravel       |TC1:User1, TC2: User2                                             |
 |TRVL-S49           |1B  |GaikoTravel       |TC1:User49,TC2:User50,TC3:TC5,TC7,TC8:User51,TC4:User50,TC6:User49|
 |TRVL-S70           |1B  |GaikoTravel       |User1                                                             |
 |TRVL-S71           |1B  |GaikoTravel       |User1                                                             |
 |TRVL-S72           |1B  |GaikoTravel       |User1                                                             |
 |TRVL-S73           |1B  |GaikoTravel       |User1                                                             |
 |TRVL-S74           |1B  |GaikoTravel       |TC1:User35, TC2:User36, TC3:User37                                |
 |TRVL-S75           |1B  |GaikoTravel       |User1                                                             |
 |TRVL-S76           |1B  |GaikoTravel       |User1                                                             |
 |TRVL-S125          |1B  |GaikoTravel       |User56                                                            |
 |TRVL-S191          |1B  |GaikoTravel       |user65                                                            |
 |TRVL-S192          |1B  |GaikoTravel       |user1                                                             |
 |TRVL-S193          |1B  |GaikoTravel       |TC2: User7  TC3: User1                                            |
 |TRVL-S194          |HSS  |tripSourceUser       |TC2: User7  TC3: User1                                        |
 |TRVL-S195          |1B  |GaikoTravel       |TC2: User7  TC3: User1                                            |
 |Schedule e2e search|1B  |GaikoTravel       |TC1-TC19:User27,TC4:TC5: User53                                   |
 |TRVL-S12           |2  |GaikoCustomFields |User16                                                            |
 |TRVL-S13           |2  |GaikoCustomFields |User16                                                            |
 |TRVL-S14           |2  |GaikoCustomFields |User18                                                            |
 |TRVL-S15           |2  |GaikoCustomFields |User23                                                            |
 |TRVL-S44           |2  |GaikoCustomFields |User16                                                            |
 |TRVL-S46           |2  |GaikoCustomFields |User24                                                            |
 |TRVL-S50           |2  |GaikoCustomFields |User26                                                            |
 |TRVL-S56           |2  |GaikoCustomFields |User20                                                            |
 |TRVL-S69           |2  |GaikoCustomFields |User43                                                            |
 |TRVL-S106          |2  |GaikoCustomFields |User16                                                            |
 |TRVL-S107          |2  |GaikoCustomFields |User26                                                            |
 |TRVL-S123          |2  |GaikoCustomFields |User26                                                            |
 |TRVL-S124          |2  |GaikoCustomFields |User23                                                            |
 |TRVL-S188          |2  |GaikoCustomFields |User16                                                            |
 |TRVL-S189          |2  |GaikoCustomFields |User60                                                            |
 |TRVL-S16           |3  |GaikoTravel       |TC1,TC3,TC5,TC7,TC9,TC11:User2, TC2,TC4,TC6,TC8,TC10,TC12:User1   |
 |TRVL-S28           |3  |GaikoTravel       |TC1,TC3,TC4,TC5,TC7,TC8,TC9,TC11:User2, TC2,TC6,TC10:User1        |
 |TRVL-S35           |4  |ssrmp             |User38                                                            |
 |TRVL-S52           |4  |ssrmp             |TC1,TC2: User38,TC4:User40                                        |
 |TRVL-S41           |5  |GaikoCustomFields |User43                                                            |
 |TRVL-S42           |5  |GaikoCustomFields |User43                                                            |
 |TRVL-S48           |5  |GaikoCustomFields |User43                                                            |
 |TRVL-S110          |5  |GaikoCustomFields |User43                                                            |
 |TRVL-S54           |6  |GaikoTravel       |User44                                                            |
 |TRVL-S17A          |11 |gaikotraveldsm    |User22                                                            |
 |TRVL-S17B          |1B  |GaikoTravel       |User19                                                           |
 |Fox cost allocation | FoxCost | gaikotravelfoxcost|user61                                                    |
 |Split cost allocation | SplitCost | gaikotravelsplitcost|user62                                              |
 |Single cost allocation | SingleCost| gaikotravelsinglecost|user63                                            |
 |DCS-1              |CarServiceSanity |Gaikocarservice |User68                                                |
 |DCS-2              |CarServiceSanity |Gaikocarservice |User69                                                |
 |DCS-4              |CarServiceRegression |Gaikocarservice |User68                                                |
 |DCS-5              |CarServiceRegression |Gaikocarservice |User69                                                |
 |DCS-6              |CarServiceRegression |Gaikocarservice |User70                                                |
 |DCS-7              |CarServiceRegression |Gaikocarservice |User68                                                |
 |DCS-8              |CarServiceRegression |Gaikocarservice |User68                                                |
 |DCS-9              |CarServiceSanity |Gaikocarservice |User68                                                |
 |DCS-11             |CarServiceSanity |Gaikocarservice |User70                                                |
 |TRVLCS-1           |CarServiceRegression |Gaikocarservice |user1                                             |
 |TRVLCS-2           |CarServiceRegression |Gaikocarservice |user1                                             |
 |TRVLCS-3           |CarServiceRegression |Gaikocarservice |user1                                             |
 |TRVLCS-4           |CarServiceRegression |Gaikocarservice |user1                                             |
 |DCS-12             |CarServiceSanity |Gaikocarservice |User68                                               |
 |Trip_Source_Sanity  |tripSourceUser   |                |tripSourceUser                                       |
 |KTN                 |DashboardRegression|GaikoTravel   |techsupport                                          |
 |autosso_EmailTest   |ssotest            |autossostage3 |                                                     |
 |autosso_usernameTest   |ssotest            |autossostage3 |                                                  |
 |TRVL-S40A          |DashboardRegression|GaikoTravel   |techsupport                                           |
 |TRVL-S131          |DashboardRegression|GaikoTravel   |testrampadminuser                                     |
 |TRVL-S132          |DashboardRegression|GaikoTravel   |testrampadminuser                                     |
 |TRVL-S40B          |DashboardRegression|GaikoTravel   |techsupport                                           |
 |TRVL-S40C          |DashboardRegression|GaikoTravel   |techsupport                                           |
 |TRVL-S30           |Cventtest          |ceventssostage3     |                                                |

----------------------------------------------------------------------------------------------------------------