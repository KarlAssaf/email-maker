# email-maker
screen scraper automating the creation of user-specified number of outlook emails (node.js/puppeteer) 

Requirements: 
-node.js

-puppeteer.js (node library)

-prompt-sync (node library)

-chromium headless browser

-empty file named "emails"



*the user inputs the number n of the outlook emails he wishes to make 

*the app will create a fake username and password, open a new  chromium tab, create an outlook account with that information and save the client information in the "emails" file n times

WARNINGS: 

-the emails file must be in the same repository as the app

-clicking or switching tabs during execution may cause execution to stop

-you will have to complete CAPCHA manually for each registration
