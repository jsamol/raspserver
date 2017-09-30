Raspserver
==========

### Info

A client-server application for Raspberry Pi 3 running Ubuntu MATE.

Features:
*in progress*

Backend: ```Express.js```

Frontend: ```React.js```

### Requirements
- [```Docker```](https://www.docker.com/community-edition)

### First run
```
$ git clone https://github.com/jsamol/raspserver.git
$ cd raspserver/bin
$ ./raspserver --build
$ ./raspserver --start
```
The application is running on `localhost:3000`.

### Available commands
- ```$ ./raspserver -b | --build``` Build the application
- ```$ ./raspserver --start``` Start the application and mongoDB service
- ```$ ./raspserver --stop``` Stop the application and mongoDB service and remove the containers
- ```$ ./raspserver -r | --restart``` Restart the application and mongoDB service
- ```$ ./raspserver -h | --help``` Print usage