# Four-Down Football

Click the two-minute timer to start the game.
Hold the space bar down to move the bar.
	Spacebar Variations -
	>short space hold: small movement
	>medium space hold: no movement("incomplete")
	>long space hold: larger movement
	>space held too long: interception
If offense doesn't score in four plays, possession switches to the other player
If ball moves beyond the endzone, possession switches to the other player
Team with the most points, after two minutes, wins!
A tie equates to sudden death("First team to score wins")
Rule: Ball hogging is socially unaccepted (violators will be shunned from society)


**Technologies Used**
Four-Down Football primarily operates on "keydown" and "keyup" technology with the spacebar. This feature triggers every event in the game.

The only other functional technology used would be a click event on the clock to start the timer.

From a code perspective, this game runs on positioning and the use of "<" and ">" operators.

A touchdown occurs when the ball is between the left and right plains of the endzone, determined by the left position on the screen.

I utilized Stackoverflow and Mozilla Developer Network as resources for troubleshooting issues.

Background IMG: /*https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCKPD-MODw8gCFRKkiAodSO4GCw&url=http%3A%2F%2Fsolidiumtech.com%2F%3Fpage_id%3D13&bvm=bv.105039540,d.cGU&psig=AFQjCNE_p9IG_YKnI_67uDfymw1uBTGt5A&ust=1444948438745972*/


**Approach**
First, I planned the HTML structure - followed by the CSS layout. This approach gave me a general feel for how the game would look.

Once I had every element on the page, I then worked on the behavior - using jQuery. My first priority was to get the ball to move. I varied the space in which the ball would move relative to how long the user held down the spacebar.


**Unsolved Problems**
I couldn't figure out how to get my play timer to work. I assumed that it would be the same as the game clock but with a repetitive 10-second loop. 

Initially, I had "HOME" and "AWAY" in the endzones. These strings bumped their parent divs down a line - seperating them from the rest of the field. I tried to use an absolute postion value, but this affected how my endzones looked when the screen changed sizes. I removed the text instead of dealing with several media queries.

I will continue to pursue solutions to both of these problems.