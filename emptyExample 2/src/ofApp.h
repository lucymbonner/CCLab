#pragma once

#include "ofMain.h"
#include "theBosAndTheBees.h"
#include "Bees.h"

#define NUMBOS 50
#define NUMBEES 30

class ofApp : public ofBaseApp{
    
public:
    void setup();
    void update();
    void draw();
    
    void keyPressed(int key);
    void keyReleased(int key);
    void mouseMoved(int x, int y );
    void mouseDragged(int x, int y, int button);
    void mousePressed(int x, int y, int button);
    void mouseReleased(int x, int y, int button);
    void windowResized(int w, int h);
    void dragEvent(ofDragInfo dragInfo);
    void gotMessage(ofMessage msg);
    
    Bo boFaces[NUMBOS];
    Bo oneBo;
    Bees bee[NUMBEES];
    
    int fieldHeight, fieldWidth, resolution;
    int posX, posY;
    
    int angle;
    
    
};
