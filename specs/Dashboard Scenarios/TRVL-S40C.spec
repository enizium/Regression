# TRVL-S40C : Dashboard Regression

## C1 : While re-upload, verify the behavior, once the whole file gets rejected bcoz of issue in all the records

tags: DashboardRegression

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "change tools" link
* Search site name "gaikotravel"
* Click on the "Services" tab
* Click on "Reference Points" link
* Click on "Add A New Reference Point Set" link
* Enter Reference Point Set Name
* Upload "Lat-Long Missing" record file
* Click on "Upload and Save" link
* Validate Success message
* Click on "Download" link
* Commit changes made in site
* Click on the "Services" tab
* Click on "Reference Points" link
* Click on "Set Name" link
* Upload "City Missing" record file
* Click on "Upload and Save" link
* Validate Failure message
* Click on the "Services" tab
* Click on "Reference Points" link
* Click on "Recent Upload History" link
* Validate Status of reference point set history
* Click on the "Services" tab
* Click on "Reference Points" link
* Delete reference points set name
* Commit changes made in site

## C2 : While re-upload, verify the behavior, once the file is uploaded, which has less than 50% issues in the records

tags: DashboardRegression

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "change tools" link
* Search site name "gaikotravel"
* Click on the "Services" tab
* Click on "Reference Points" link
* Click on "Add A New Reference Point Set" link
* Enter Reference Point Set Name
* Upload "Lat-Long Missing" record file
* Click on "Upload and Save" link
* Validate Success message
* Click on "Download" link
* Commit changes made in site
* Click on the "Services" tab
* Click on "Reference Points" link
* Click on "Set Name" link
* Upload "Latest" record file
* Click on "Upload and Save" link
* Validate error message
* Click on the "Services" tab
* Click on "Reference Points" link
* Click on "Recent Upload History" link
* Validate Status in reference point set history
* Click on the "Services" tab
* Click on "Reference Points" link
* Delete reference points set name
* Commit changes made in site

## C3 : While re-upload, verify the behavior, once the whole file gets rejected bcoz of issue in 50% records

tags: DashboardRegression

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "change tools" link
* Search site name "gaikotravel"
* Click on the "Services" tab
* Click on "Reference Points" link
* Click on "Add A New Reference Point Set" link
* Enter Reference Point Set Name
* Upload "Lat-Long Missing" record file
* Click on "Upload and Save" link
* Validate Success message
* Click on "Download" link
* Commit changes made in site
* Click on the "Services" tab
* Click on "Reference Points" link
* Click on "Set Name" link
* Upload "BlankCity" record file
* Click on "Upload and Save" link
* Validate Failed message
* Click on the "Services" tab
* Click on "Reference Points" link
* Click on "Recent Upload History" link
* Validate Status of reference point set history
* Click on the "Services" tab
* Click on "Reference Points" link
* Delete reference points set name
* Commit changes made in site
