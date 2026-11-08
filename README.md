## **Instructions**

### **Step-by-Step: Getting Set Up**


**1\. Click the green "Use this template" button**

This creates a brand new repository under your own GitHub account, pre-loaded with the starting files.

**2\. Name your repository**

Use this naming convention:

`nyu-f26-lastname-firstname`

**3\. Click "Create repository from template"**

GitHub copies the files and takes you to your new repo page.

**4\. Click the green "Code" button → "Create Codespace"**

**5\. Wait about 15 minutes while it boots up**

This is normal. Codespaces is spinning up a virtual computer for you in the cloud, installing dependencies, and opening VS Code in your browser. Grab a sip of water while it loads.

**6\. You're ready**

When the browser tab opens to VS Code, open the `style.css` file in the file explorer on the left. The base styles are already written for you, and each rule has **STEP** comments showing where the grid properties go. That's your starting point — we'll type the grid code together in class, one step at a time.

---

## **GitHub Codespaces — A Brief Guide**

### **What Is It?**

Codespaces is a development environment that runs entirely in your browser. Instead of installing software on your own computer, you get a virtual computer in the cloud — pre-configured and ready to code — that you access through a web browser. Microsoft (which owns GitHub) hosts it.

### **What It Saves Us From**

Normally, getting a development environment set up requires installing and configuring a bunch of tools:

* A code editor (VS Code)  
* A terminal (command line)  
* Git (version control)  
* Node.js, Python, or whatever runtime the project needs  
* Extensions, themes, settings

Each one of these can break in unique ways depending on your operating system, your computer's permissions, or just bad luck. **Codespaces eliminates all of that.** You click one button and you're in a fully working environment. No "it works on my machine" problems.

### **How It Works (High Level)**

1. A project lives in a GitHub repository.  
2. You click the green **Code** button and select **Open with Codespaces**.  
3. GitHub spins up a lightweight virtual machine running Linux, installs the project's dependencies automatically, and opens a browser-based version of VS Code.  
4. You code, save, and commit just like you would on your local machine.  
5. When you're done, you stop the Codespace. Next time you come back, everything is exactly where you left it.

The environment is defined by a file called `devcontainer.json` (or `.devcontainer/`) in the repository. It's like a recipe that tells GitHub "this project needs X, Y, and Z."

### **The Catch: It's Slow to Start (And Why)**

A cold start takes **1–3 minutes**. Here's why:

* **A new virtual machine has to boot.** Codespaces isn't "running" until you open it. There's no always-on computer — one is created for you on demand. That means spinning up an OS from scratch.  
* **Your dependencies install.** If the project requires packages or libraries, Codespaces runs the install process when it starts. This is the same `npm install` or `pip install` you'd run locally — it just happens automatically.  
* **Extensions and settings sync.** VS Code loads your extensions, themes, and preferences from your GitHub account.

**Once it's running, it's fast.** The delay is only on the first launch of the day (or after you've manually stopped the Codespace). If you keep it open between sessions, there's no wait.

### **Tips**

* **Don't close your Codespace mid-session.** Just leave the tab open. If you close it, stop the Codespace from the GitHub dashboard so it doesn't eat into your monthly usage hours.  
* **Your work is saved automatically.** Even if the Codespace stops, the files are stored on GitHub. You won't lose anything.  
* **You get a fixed number of free hours per month** through the GitHub Student Developer Pack. A cold start uses some of those hours just booting up, so it's worth keeping one Codespace alive while you're actively working.  
* **If you need to work offline,** you can always install VS Code and Git locally instead but it does take some set up — Codespaces is a convenience, not a requirement.


What type of data you're displaying
- I tried to create 6 road signs, each of which contain 4 fields:
  - Name: the name of the sign
  - Category: whether it is a regulatory or warning sign
  - Meaning: what the sign means
  - Action: what the driver should do in response

How your JavaScript creates the HTML
- "script.js" stores the signs in an array called "signs"
- It finds the empty "div id = 'content-container'" in the index.html using "document.getElementByID()"
- It loops through the array with "forEach()"
- For each sign, it creates a div, and h3, and 3 "p" elements with "document.createElement()"
- It fills in the text wtih textContent and adds classes with className so the cards use my style tile css
- It uses appendChild() to put each piece inside the card, and then puts the card inside the container

Any challenges you encountered
- It was very tricky and frustrating to figure out how the "document.getElementByID()" and looping through "forEach()" all worked together... I had a lot of back and forth with Claude on figuring out how it worked and how to properly loop everything. 


## Structure Audit — [10/26/26]

Does it exist?
- Yes, all of my sections exist.

Is it visible?
- Yes, all of my sections are visible.

Does it match the mock up?
- MOST of the same content is there. I have yet to figure out how to add images to their respective locations.

Is the heading right?
- Yes, the headings seem to be right.

**Fixed today:**
- Cleaned up some typos and the fonts section in my index.html
- Cleaned up some typos and syntax in my style.css
- Realized that my fonts weren't actually connected, so I inserted the appropriate google links for the fonts that I used 

11/1/26 Update:
This week, I used CSS grid and felxbox to make my page start to match my mock-up. The page shell, hero section, card row, step row, and sign library are now grids. The nav and the hero buttons use flexbox.

mock-up link: https://cdn.phototourl.com/member/2026-11-02-40932df8-f577-480f-aff2-a586acda11af.png

Which sections did you grid, and which did you leave in normal flow? Why?
- I turned the "more ways to practice," "how a lesson works," and the "sign library" sections into a grid on the desktop version because it makes a better use of the available space. If I stuck with the column, then I think it would've taken up an unecessary amount of space, which would make the user scroll more than necessary.
Where did you use Flexbox instead of Grid, and why?
- I used flexbox in the header/nav and the hero section buttons. In the header, my logo sits on the left and the nav links/buttons sit on the right... or at least that's what I intended to do... but I'm still struggling to figure out the html. Regardless, I chose this route because this is what is commonly seen on most websites' navbars (i.e., logo left and nav buttons right)
What's one thing in your layout that still doesn't match your mockup?
- My navbar/logo orientation are still stacked on top of each other and I still need to figure out how to make visible cards for each of the grid items.


Week 8 [11/2/26]

** State Plan ** 
- **User story:** As a new driver, I want to hide the answers in the sign library so that I can test myself on what each sign means before I hit the road.
- **What does the page remember?** Whether the answers are hidden or showing.
- **What does it start at?** `false`, so the answers are showing when the page loads.
- **What changes it?** Clicking the "Hide answers" / "Show answers" button.
- **What does the user see?** In quiz mode the "What it means" and "What to do" lines disappear, the sign cards turn yellow, and the button and message text change.
- **What does the `if/else` decide?** If answers are hidden, it turns quiz mode on and changes the button to "Show answers". Else, it turns quiz mode off and changes the button back to "Hide answers".

**What changed:**
**What was hard, and what I tried:**
  My first idea was a hover effect on the "Start practicing" button, but I found out hover is just CSS (`:hover`) and doesn't need a `let` variable or an `if/else`, so it wouldn't count for this assignment. I switched to show/hide because it actually helps someone learning signs. The `!answersHidden` line was new to me. I had to understand that it just flips true to false and false to true. Git has also been hard for me in general.
**What happened when I tried to break it:**
  At the start, the page loaded with all the answers showing and no red errors in the Console. In normal use, one click hid the answers and the Console showed `answersHidden: true`, and another click showed them again with `false`. I clicked the button really fast more than 10 times, and the button text matched what was on the screen.
**What I learned or changed my mind about:**
  Changing a variable doesn't change the screen by itself!
**Question for Joey:**
  The Quiz thing wasn't originally in my mockup... I just added it since it would be a feature that you would see on a separate dedicated library page for the road signs... should I add this to my mock up file?
**Next week's goal:**
  Publish live site, tidy up some visual designs with the help of Claude, and fix any broken interactions/navigation
**AI use:**
  I worked with Claude to come up with some ideas for interactive change state features on my landing page since I originally did not have much. I also worked with Claude to get a better understanding of how to do the variable change for the quiz mode/hide answers. 