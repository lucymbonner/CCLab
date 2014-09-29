
 

int led = 13;
int buttonPin = 2;
int buttonState = 0;

int ledState = HIGH;
int buttonState;
int lastButtonState = LOW;

long lastDebounceTime = 0;
long debounceDelay = 50; //increase if output flickers

// the setup routine runs once when you press reset:
void setup() {
  //start the serial connection from Arduino back to computer
  Serial.begin(9600);
  
  // initialize the digital pin as an output.
  pinMode(led, OUTPUT);
  pinMode(buttonPin, INPUT);
 
  //set initial ledState
  digitalWrite(led, ledState); 
}

void loop() {
  //state of switch to variable
  int reading = digitalRead(buttonPin);
  
  //check if button pressed
  
  //if switch changed
  if (reading != lastButtonState) {
    //reset timer
    lastDebounceTime = millis();
  }
  
  if ((millis() - lastDebounceTime) > debounceDelay) {
    //current state (longer than delay time)
    
    //if button state has changed
    if (reading != buttonState) {
      buttonState = reading;
      
      //only"toggle" led if bS is HIGH
      if (buttonState == HIGH) {
        ledState = !letState;
      }
    }
  }
  
  //set led
  digitalWrite(led, ledState);
  
  //save reading
  lastButtonState = reading;
}
//trigger a state change to press button once for on, press button again for off
//debouncing***
//push all code to git before class
//second sketch for debounce
//upload video of it working
