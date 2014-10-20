#include <Servo.h>
#include "pitches.h"

Servo mustache;

const int speakerPin = 8;
const int buttonPin = 2;
const int sensorPin = A0;
const int soundButtonPin = 4;

int pos = 90;
int buttonState;
int lastButtonState = LOW;
long lastDebounceTime = 0;
long debounceDelay = 50;

int soundButtonState;
int soundLastButtonState = LOW;
long soundLastDebounceTime = 0;
long soundDebounceDelay = 50;

int melody[] = { NOTE_DS8, NOTE_DS8};
//int durations[] = { 4, 4 };

void setup() {
  mustache.attach(9);
  mustache.write(90); //set servo to mid-point
  
  //pinMode(buzzerPin, OUTPUT);
  pinMode(buttonPin, INPUT);
  //pinMode(forcePin, INPUT);
  
  Serial.begin(9600);
}

void loop() {
  //button to control servo motor "mustache"
  int buttonRead = digitalRead(buttonPin);
  
  if (buttonRead != lastButtonState) {
    //reset timer
    lastDebounceTime = millis();
  }
  
  if((millis() - lastDebounceTime) > debounceDelay) {
    //current state longer than delay time
    //if buttonState has changed
    if (buttonRead != buttonState) {
      buttonState = buttonRead;
      if (buttonState == HIGH) {   
         //button on: mustache toggles back and forth 
//          mustache.write(180);
//          delay(100);
//          mustache.write(0);
//          delay(100);
          //---OR---
          for(pos = 0; pos <= 180; pos++) {
            mustache.write(pos);
            delay(5);
           }
          for(pos = 180; pos >= 1; pos--) {
            mustache.write(pos);
            delay(5);
            }
        }
    }
  }
  lastButtonState = buttonRead; //set lastButtonState to the current reading: on or off
  
  //sound button
  int soundButtonRead = digitalRead(soundButtonPin);
  
  if (soundButtonRead != soundLastButtonState) {
    //reset timer
    soundLastDebounceTime = millis();
  }
  
  if((millis() - soundLastDebounceTime) > soundDebounceDelay) {
    //current state longer than delay time
    //if buttonState has changed
    if (soundButtonRead != soundButtonState) {
      soundButtonState = soundButtonRead;
      if (soundButtonState == HIGH) {   
          //potentiometer to manage length of tone
          int sensorValue = analogRead(sensorPin);
          delay(1);
          Serial.println(sensorValue);
        
            for (int thisNote = 0; thisNote < 2; thisNote++) {
                //map force to duration btwn 1 and 8
                int duration = map(sensorValue, 0, 1023, (1000/16), 1000);
                //int duration = (1000/durations[thisNote]);
                tone(speakerPin, melody[thisNote], duration);
                
                int pause = duration * 1.30;
                delay(pause);
                noTone(speakerPin);
            }
      }
    }
  }
  soundLastButtonState = soundButtonRead;
}
