# assetto-corsa-webresults

Simple app for showing the race results log from Assetto Corsa on a web server in a friendly way.

If you have any suggestions on improvements or bugs please go to Issues. Send me a message for questions.

# Running

To run this, in the WebContent/WEB-INF/web.xml file is configured the game path where it will locate the log files. Check if your game path matches mine before running. If not, change it (if using the WAR file, change its extension to zip, alter the file mentioned and change back to WAR extension).

You need to install a webserver with Java support. I recommend XAMPP. Google it, install and then throw the WAR provided (or compile the way you want it) in the tomcat\webapps folder.

Enjoy!
