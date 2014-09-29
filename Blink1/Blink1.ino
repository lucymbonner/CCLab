
 
// Pin 13 has an LED connected on most Arduino boards.
// give it a name:
int led = 13;
int buttonPin = 2;
int buttonState = 0;

// the setup routine runs once when you press reset:
void setup() {
  //start the serial connection from Arduino back to computer
  Serial.begin(9600);
  
  // initialize the digital pin as an output.
  pinMode(led, OUTPUT);
  pinMode(buttonPin, INPUT);  
}

// the loop routine runs over and over again forever:
void loop() {
  //read the button
  buttonState = digitalRead(buttonPin);
  //perform dif actions dependent on the button state
  if (buttonState ==HIGH) {
  digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
  Serial.println("LED is on");
  delay(1000);               // wait for a second
  } else {
  digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
  Serial.println("LED is off");
  delay(1000);               // wait for a second
  }
}
//trigger a state change to press button once for on, press button again for off
//debouncing***
//push all code to git before class
//second sketch for debounce
//upload video of it working
