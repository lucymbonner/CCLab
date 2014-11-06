//
//  theBosAndTheBees.h
//  animationIsCool
//
//  Created by Lucy M Bonner on 11/3/14.
//
//
#pragma once

#include "ofMain.h"
#define NUMBOS 50

class Bo {
public:
    
    ofImage BoFace;
    
    //constructor
    Bo();
    
    //variables
    float posX, posY;

    void setup();
    void move();
    void display();
    void grid(int newPosX, int newPosY);
    float angle, boVelocity;
    
};