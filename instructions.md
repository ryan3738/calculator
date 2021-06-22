
    <li><a href="https://www.theodinproject.com/courses/foundations/lessons/html-css" target="_blank" rel="noreferrer">Follow the instructions atop Odin’s Google Homepage project</a> to setup a git repository for this project.</li>
    <li>Create a webpage with a 16x16 grid of square divs
      <ol>
        <li>Create the divs using JavaScript… don’t try making them by hand with copy and pasting in your html file!</li>
        <li>Best to put your grid squares inside another “container” div (that one can go directly in your html)</li>
        <li>There are several different ways to make the divs appear as a grid (versus just one on each line) feel free to use any or play with each of them:
          <ol>
            <li>float/clear</li>
            <li>inline-block</li>
            <li>flexbox</li>
            <li>CSS Grid</li>
          </ol>
        </li>
        <li>Be careful with borders and margins, they can adjust the size of the squares!</li>
        <li>“OMG, Why isn’t my grid being created???”
          <ol>
            <li>Did you link your CSS stylesheet?</li>
            <li>Open your browser’s developer tools</li>
            <li>Check if there are any errors in the JavaScript console</li>
            <li>Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.</li>
            <li>Go willy-nilly and add  <code>console.log</code> statements in your JavaScript to see if it’s actually being loaded.</li>
          </ol>
        </li>
      </ol>
    </li>
    <li>Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
      <ol>
        <li>Hint: “hovering” is what happens when your mouse enters a div and ends when your mouse leaves it.. you can set up event listeners for either of those events as a starting point.</li>
        <li>There are multiple ways to change the color of the divs, including:
          <ol>
            <li>adding a new class to the div</li>
            <li>changing the div’s background color using JavaScript.</li>
          </ol>
        </li>
      </ol>
    </li>
    <li>Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid.  Once entered the new grid should be generated <em>in the same total space as before</em> (e.g. 960px wide) and now you’ve got a new sketch pad. <strong>Tip</strong>: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, resulting in possible delays, freezing, or crashing that we want to prevent.
      <ol>
        <li>Research <code>button</code> tags in HTML and how you can make a JavaScript function run when one is clicked.</li>
        <li>Also check out <code>prompt</code>s</li>
        <li>You should be able to enter <code>64</code> and have a brand new 64x64 grid pop up without changing the total amount of pixels used</li>
      </ol>
    </li>
    <li>(Optional): Instead of just changing the color of your grid from black to white (for example) have each pass through it with the mouse change to a completely random RGB value.   Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.</li>
    <li>Push your project to GitHub!</li>
  