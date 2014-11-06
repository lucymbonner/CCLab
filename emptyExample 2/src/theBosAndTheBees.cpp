//
//  theBosAndTheBees.cpp
//  animationIsCool
//
//  Created by Lucy M Bonner on 11/3/14.
//
//

#include "theBosAndTheBees.h"

Bo::Bo() {
    angle = 0;
    boVelocity = 5;
    
    posX = 20;
    posY = 20;
}

void Bo::setup() {
    
    BoFace.loadImage("bo_head_2.png");

}

void Bo::move() {
    
//    angle++;
    
    angle *= boVelocity;
    
    //rotate back and forth! need velocity (+ & - values for direction)
    
    if (angle <= 315) {
        angle = 315;
        boVelocity *= -1;
    }
    if (angle >= 45) {
        angle = 45;
        boVelocity *= -1;
    }
    
    ofPushMatrix();
    ofTranslate(posX+50, posY+71);
    ofRotate(angle),
    BoFace.draw(posX+50, posY+71);
    ofPopMatrix();
    
//    BoFace.draw(posX, posY);

}

void Bo::display() {
    
    ofPushMatrix();
    ofTranslate(posX, posY);
    angle = 0;
    ofRotate(angle);
    BoFace.draw(posX, posY);
    ofPopMatrix();
}

void Bo::grid(int newPosX, int newPosY) {
    posX = newPosX;
    posY = newPosY;
}