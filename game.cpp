#include "game.h"

Game::Game(QObject *parent) : QObject(parent)
{


}

QQmlEngine* Game:: qmlMainEngine;
QObject* Game :: qmlObject;
void Game::setEngine(QQmlEngine* main,QObject* obmain){
    Game:: qmlMainEngine= main;
    Game:: qmlObject=obmain;

}

void Game::changeProp(){
    Game::qmlObject->setProperty("width",1000);

}
