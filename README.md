# nodejs_iis_sampleapp

This is a sample nodejs iis application running in IIS.

### Prerequisites
* IIS
* IIS ASP.NET 4.5
* IIS URL Rewriting module
* Node.JS
* IISNode

### To Run
1. cd to c:\inetpub\wwwroot
2. git clone https://github.com/rayterrill/nodejs_iis_sampleapp.git
3. create an iisnode directory inside the nodejs_iis_sampleapp directory
3. make sure that the iis pool account ("IIS AppPool\DefaultAppPool" (or whatever you App Pool Identity is) has read/write access to the nodejs_iis_sampleapp\iisnode subdirectory
4. npm install
5. hit the website at http://localhost/nodejs_iis_sampleapp
