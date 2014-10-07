const int xpin = A3;                  // x-axis of the accelerometer
const int ypin = A2;                  // y-axis
const int zpin = A1;                  // z-axis

int redPin = 11;
int greenPin = 10;
int bluePin = 9;
int brightnessR;
int brightnessG;
int brightnessB;
int sensorRLow = 375;
int sensorRHigh = 780;
int sensorGLow = 980;
int sensorGHigh = 1023;
int sensorBLow = 970;
int sensorBHigh = 1023;
//change range to readout

//to make a better color mix
int blueAdj = 30;

void setup()
{
  // initialize the serial communications:
  Serial.begin(9600);
  
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
}

void loop()
{
  // print the sensor values:
  Serial.print(analogRead(xpin));
  // print a tab between values:
  Serial.print("\t");
  Serial.print(analogRead(ypin));
  // print a tab between values:
  Serial.print("\t");
  Serial.print(analogRead(zpin));
  Serial.println();
  
  int sensorXValue = analogRead(xpin);
  int sensorYValue = analogRead(ypin);
  int sensorZValue = analogRead(zpin);
  
  sensorZValue = sensorZValue - blueAdj;
  
  brightnessR = map(sensorXValue, sensorRLow, sensorRHigh, 0, 255);
  brightnessG = map(sensorYValue, sensorGLow, sensorGHigh, 0, 255);
  brightnessB = map(sensorZValue, sensorBLow, sensorBHigh, 0, 255);
  
  analogWrite(redPin, brightnessR);
  analogWrite(greenPin, brightnessG);
  analogWrite(bluePin, brightnessB);
  
  
  // delay before next reading:
  delay(100);
}
