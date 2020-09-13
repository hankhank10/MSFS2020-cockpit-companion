# MSFS-2020 Cockpit Companion

HTTP interface to view and control aircraft location and systems in Microsoft Flight Simulator 2020 (MSFS2020).

![Map](https://msfs2020.cc/Autopilot.png)

Full functionality explained at [https://msfs2020.cc](https://msfs2020.cc).

Cockpit Companion is based on the [Python-SimConnect](https://github.com/odwdinc/Python-SimConnect) library which provides a python wrapper for SimConnect.

Cockpit Companion provides a flask server running locally on port 5000 to deliver either a user interface with a moving map and aircraft systems, or JSON output.

## Requirements

- [Python 3+](https://www.python.org/downloads/windows/)
- [Flask](https://github.com/pallets/flask)
- [Python-SimConnect](https://github.com/odwdinc/Python-SimConnect)

## Installation

- Download and install a 64 bit version of [Python 3+ for Windows](https://www.python.org/downloads/windows/)
- Open a Windows command prompt by clicking on the start menu and typing `cmd`
- At the Windows command prompt (you can get one of those by going to the start menu and typing "cmd") install Flask: `pip install -U Flask`
- Install Python-SimConnect: `pip install SimConnect`
- Download this repo into a fresh directory (eg `c:\MSFS2020-CC`) either by cloning from github or downloading a zip
- Ensure that MSFS2020 is running and that you are in an aircraft on a runway
- Navigate to the directory you installed the repo to and run the program with `python glass_server.py`
- Point Chrome or Firefox (not Internet Explore or Edge) to [http://localhost:5000/](http://localhost:5000/)


## API documentation

#### `http://localhost:5000`
Method: GET

Variables: None

Description: Web interface with moving map and aircraft information

#### `http://localhost:5000/dataset/<dataset_name>`
Method: GET

Arguments to pass:

|Argument|Location|Description|
|---|---|---|
|dataset_name|in path|can be navigation, airspeed compass, vertical_speed, fuel, flaps, throttle, gear, trim, autopilot, cabin|

Description: Returns set of variables from simulator in JSON format


#### `http://localhost:5000/datapoint/<datapoint_name>/get`
Method: GET

Arguments to pass:

|Argument|Location|Description|
|---|---|---|
|datapoint_name|in path|any variable name from MS SimConnect documentation|

Description: Returns individual variable from simulator in JSON format


#### `http://localhost:5000/datapoint/<datapoint_name>/set`
Method: POST

Arguments to pass:

|Argument|Location|Description|
|---|---|---|
|datapoint_name|in path|any variable name from MS SimConnect documentation|
|index (optional)|form or json|the relevant index if required (eg engine number) - if not passed defaults to None|
|value_to_use (optional)|value to set variable to - if not passed defaults to 0|

Description: Sets datapoint in the simulator


#### `http://localhost:5000/event/<event_name>/trigger`
Method: POST

Arguments to pass:

|Argument|Location|Description|
|---|---|---|
|event_name|in path|any event name from MS SimConnect documentation|
|value_to_use (optional)|value to pass to the event|

Description: Triggers an event in the simulator

## Events and Variables

Below are links to the Microsoft documentation 

[Event IDs](https://docs.microsoft.com/en-us/previous-versions/microsoft-esp/cc526980(v=msdn.10))

[Simulation Variables](https://docs.microsoft.com/en-us/previous-versions/microsoft-esp/cc526981(v=msdn.10))
