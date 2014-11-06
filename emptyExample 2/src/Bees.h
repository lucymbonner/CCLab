//
//  Bees.h
//  animationIsCool
//
//  Created by Lucy M Bonner on 11/3/14.
//
//

#pragma once

#include "ofMain.h"

class Bees {
public:
    
    //constructor
    Bees();
    
    ofImage bee;
    
    //variables
    float posX, posY;
    float velX, velY;
    
    float size;
    
    
    //methods
    void setup();
    void move();
    void display();
    
    void reset(float newPosX, float newPosY);
    
};

