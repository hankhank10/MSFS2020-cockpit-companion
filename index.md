## Who is is MSFS2020 Cockpit Companion for?

Find it annoying to click around in the cockpit trying to set the autopilot heading when you're supposed to be flying the plane?

Want to use your laptop or iPad to display secondary instruments so you can soak in all that photo realistic scenery?

Struggling to fly over your house because MSFS2020 doesn't give you a real time location overlaid on a street map?

Wish you could set your engine on fire / generate an electrical failure / run out of fuel now and then for a challenge?

If you answer yes, the MSFS2020 Cockpit Companion may be for you.

## What does it do?

It give you a moving map of your aircraft's current location.  You can scroll around, have it follow your aircraft or not, set a variety of different map options and overlay with aviation data and weather (coming soon).



## How does the MSFS2020 Cockpit Companion work?

It is a web wrapper for the [Python-SimConnect](https://github.com/odwdinc/Python-SimConnect) library, which is itself a wrapper for the SimConnect library provided by Microsoft for getting access to the data in your Microsoft Flight Simulator 2020 application.

In short, when you run the application it sets up a tiny lightweight web server on your computer which you can then access from any browser by navigating to http://localhost:5000/

This interfaces with the simulator and displays the data in real time to you through the browser.

## Can I fly my plane with this?

Bad idea. The data refreshes every 2 seconds, so it's no way as responsive as the simulator; you will want to keep your primary flight instruments on the sim itself. This is really good for stuff which only needs to update in near-real-time (eg autopilot status, gear status, flaps, etc)

## How do I access this from another computer / my iPad?

Run the application on the computer which is running MSFS2020. Find the IP address of that computer. Open the browser on your second computer / iPad and navigate to http://ipaddressofthecomputer:5000/

## I want to access this over the internet?

You can. [NGROK](https://ngrok.com/) provides a really simple solution for exposing a local web server (which this is) to you over a tunnel through the internet. You will want to forward port 5000 to 

## I want to set my friend's engine on fire while he's trying to land

NGROK is the answer here. 


## I have something else running on port 5000

## I want to set my friend's engine on fire

## I don't want your web interface, I want the data! Give me the data!

I've got you covered.

As well as the graphical interface you can also get a ton of data directly over HTTP requests provided in JSON format.

Try http://localhost:5000/



### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/hankhank10/MSFS2020-cockpit-companion/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
