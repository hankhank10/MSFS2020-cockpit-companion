## Who is is MSFS2020 Cockpit Companion for?

Find it annoying to click around in the cockpit trying to set the autopilot heading when you're supposed to be flying the plane?

Want to use your laptop or iPad to display secondary instruments so you can soak in all that photo realistic scenery?

Struggling to fly over your house because MSFS2020 doesn't give you a real time location overlaid on a street map?

Wish you could set your engine on fire / generate an electrical failure / run out of fuel now and then for a challenge?

If you answer yes, the MSFS2020 Cockpit Companion may be for you.

## What does it do?

It gives you a moving map of your aircraft's current location.  You can scroll around, have it follow your aircraft or not, set a variety of different map options and overlay with aviation data and weather.

![Map.png]({{site.baseurl}}/Map.png)

It also shows a variety of different secondary aircraft controls such as autopilot, gear, flaps, trim, cabin seat belts, fuel, etc.  You can interface directly with these through the browser to control the aircraft.

IMAGE

It also gives you a ton of options around simulating emergencies such as an engine fire, electrical failure, hydraulic failure, etc.

IMAGE

## How does the MSFS2020 Cockpit Companion work?

It is a web wrapper for the [Python-SimConnect](https://github.com/odwdinc/Python-SimConnect) library, which is itself a wrapper for the SimConnect library provided by Microsoft for getting access to the data in your Microsoft Flight Simulator 2020 application.

In short, when you run the application it sets up a tiny lightweight web server on your computer which you can then access from any browser by navigating to http://localhost:5000/

This interfaces with the simulator and displays the data in real time to you through the browser. It uses Python, Flask, Bootstrap and Javascript.

## Can I fly my plane with this?

Bad idea. The data refreshes every 2 seconds, so it's no way as responsive as the simulator; you will want to keep your primary flight instruments on the sim itself. This is really good for stuff which only needs to update in near-real-time (eg autopilot status, gear status, flaps, etc)

## How do I access this from another computer / my iPad?

Run the application on the computer which is running MSFS2020. Find the IP address of that computer. Open the browser on your second computer / iPad and navigate to http://ipaddressofthecomputer:5000/

## I want to access this over the internet?

You can. [NGROK](https://ngrok.com/) provides a really simple solution for exposing a local web server (which this is) to you remotely over a tunnel through the internet.

## I want to copilot with someone / set my friend's engine on fire

NGROK is the answer here.

## I don't want your web interface, I want the data! Give me the data!

I've got you covered.

As well as the graphical interface you can also get a ton of data directly over HTTP requests provided in JSON format.

Try http://localhost:5000/dataset/autopilot for an example.  Other endpoints are navigation, airspeed, compass, vertical_speed, fuel, flaps, throttle, gear and trim.

## This sounds great. Take my money!

No. It's free and open source. Also my bit of it (the web wrapper) is the easy bit so I won't be trying to sell this.

If you do find this particularly valuable and want to say thanks then please consider making a small donation to the [Samaritans](https://www.samaritans.org/donate-now/), the [RAF Benevolent Fund](https://www.rafbf.org/ways-to-give/online-donation) or another charity.

## This sounds terrible and I found a bug and it sucks

Please [raise an issue on Github](https://github.com/hankhank10/MSFS2020-cockpit-companion/issues).

Better still, if you know how this should be better or want to contribute then please fork my code, rewrite it and put in a pull request.



