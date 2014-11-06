//
//  Bees.cpp
//  animationIsCool
//
//  Created by Lucy M Bonner on 11/3/14.
//
//

#include "Bees.h"

Bees::Bees() {
    posX = ofGetWindowWidth() * 0.5;
    posY = ofGetWindowHeight() * 0.5;
}

void Bees::setup() {
    
    bee.loadImage("Bumble_Bee.png");
    
    size = ofRandom(40, 60);
    
    velX = ofRandom(-10, 10);
    velY = ofRandom(-8, 8);
}

void Bees::move() {
    
    posX += velX;
    posY += velY;
    
    if (posX > ofGetWindowWidth() || posX < 0) {
        velX = velX * (-1);
    }
    if (posY > ofGetWindowHeight() || posY < 0) {
        velY *= (-1);
    }
}

void Bees::display() {
    bee.draw(posX, posY);
}

void Bees::reset(float newPosX, float newPosY) {
    posX = newPosX;
    posY = newPosY;
    
    size = ofMap(newPosX, 0, ofGetWindowWidth(), 30, 80);
}
