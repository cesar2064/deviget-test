
# Frameworks used

- Angular 7.2.2

- Angular Material (css framework)

- HammerJs (For gestures)

  
# DevigetTest

## Decisions taken

- Left side nav:

	- For opening, you have to swipe to the rigth
	- For hiding, you have to swipe to the left
	- Is hidden by the following rules:
		- (min-width: 800px) and (orientation: landscape)
		- (min-width: 800px) and (orientation: portrait)
	- From max-width: 800px, is occupaying the 100% of the screen
- Animations
	- I have Used angular animations (included in the framework

# app link for testing
https://storage.googleapis.com/deviget-test/index.html

## Development server 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.