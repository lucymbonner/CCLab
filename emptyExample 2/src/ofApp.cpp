#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofBackground(0, 209, 202);
    
    //    oneBo.setup();
    
//    for (int i = 0; i < NUMBOS; i++) {
//        boFaces[i].setup();
//    }
    
    for (int i = 0; i < NUMBEES; i++) {
        bee[i].setup();
    }
    
    //set up grid of Bos
    
    fieldHeight = ofGetHeight();
    fieldWidth  = ofGetWidth();
    resolution = 95;
    
//    int columns = fieldWidth / resolution;
//    int rows = fieldHeight / resolution;
//    
//    for (int i = 0; i < NUMBOS; i++) {
//        posX = i % columns * resolution;
//        posY = i / columns * resolution;
//        boFaces[i].setup();
//        boFaces[i].grid(posX, posY);
//    }
    
    
}

//--------------------------------------------------------------
void ofApp::update(){
    
    angle = sin(ofGetElapsedTimef()*5);
    
    //rotate all the BoFaces, then move all the bees
    
    for (int i = 0; i < NUMBOS; i++) {
        //boFaces[i].move();
        boFaces[i].angle = sin(ofGetElapsedTimef()*i);
    }
    
    for (int i = 0; i < NUMBEES; i++) {
        bee[i].move();
    }
    
}

//--------------------------------------------------------------
void ofApp::draw(){
    
    //    oneBo.display();
    
    for (int i = 0; i < NUMBOS; i++) {
        boFaces[i].display();
    }
    
    for (int i = 0; i < NUMBEES; i++) {
        bee[i].display();
    }
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){
    
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){
    
}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){
    
}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){
    
}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
    
        for (int i = 0; i < NUMBEES; i++) {
            bee[i].reset(mouseX, mouseY);
        }

    
    int columns = fieldWidth / resolution;
    int rows = fieldHeight / resolution;
    
    for (int i = 0; i < NUMBOS; i++) {
//        ofPushMatrix();
        posX = i % columns * resolution;
        posY = i / columns * resolution;
//        ofTranslate(posX, posY);
//        ofRotate(angle);
        boFaces[i].setup();
        boFaces[i].grid(posX, posY);
//        ofPopMatrix();
    }
    
//        for (int i = 1; i < NUMBOS; i++) {
////            cout << "for loop" << endl;
//    
////            if (i <= 9) {
////                posY = 20;
////                posX += 50;
////            } else if (i > 9 && i < 18) {
////                posY = 150;
////                posX += 100;
////            } else if (i > 18 && i < 27) {
////                posY = 300;
////                posX += 100;
////            } else if ( i > 27 && i < 36) {
////                posY = 450;
////                posX += 100;
////            } else if (i > 36 && i < 45) {
////                posY = 600;
////                posX += 100;
////            }
//            boFaces[i].grid(posX, posY);
//        }
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){
    
}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){
    
}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){
    
}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 
    
}
