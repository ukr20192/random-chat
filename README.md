random-chat
===========

This is an anonymous chat site (similar to omegele and chatroullette) where users are paired randomly on the basis of 
availability in an text chat . This site uses javascript for client side, PHP for the server side and Ajax for connection and updating chat content on the user's browser window . Currently on text chat is supported but further functionalties can be added .

This site also requires a database on the server containing a table usertable(userid,status,talking,extra,sendMsg,recievedMsg) with userid as primary key
initially table should have 100 rows with userid set to 1 - 100 respectively for each row and rest fields initialized to '0'
Give your database a name and password and use that name, password and server's address in the PHP files or you can also create a php file to intialize the connection and creation of database and include it in other php files.

This project is still in its infancy and require lot of work before it can be used for professional purpose but the basic functionalites of the site are ready to use.

Suggestions are welcomed

contact : ukr201292@gmail.com
