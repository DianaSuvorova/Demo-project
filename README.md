
## Hi there,

My theory is one can use enzyme to achieve the same e2e integration testing as with selenium browser tests.
I am looking to get feedback and all the things that are missing in this approach.

### Installation
make sure you have node > 7.0

inside main repo:
  ```npm install```

  ```cd ./frontend```
  ```npm install```


### Running
inside main repo:

```npm run api-server```

keep it running. in a different terminal window:

 ```cd ./frontend```
 ```npm run start:test```


The above will start the integration test.
For this to work properly there is a tiny diff for react-create-app that I hope will merge soon:
*I need to figure out how to update dependency in the meantime
https://github.com/facebookincubator/create-react-app/pull/3541


The enzyme setup [file](https://github.com/DianaSuvorova/Demo-project/blob/master/frontend/src/index.js).

Recording of a script
![Recording](http://g.recordit.co/mlLiNPvjON.gif)
