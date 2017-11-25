#include "game.h"

Game::Game(QObject *parent) : QObject(parent)
{

}
//Inicializar todas as variaveis static
int* Game:: boardItems ;
int  Game:: maxIndex ;
int* Game:: numOfGoals;
int  Game:: numOfTreasures;
int* Game:: itemObjects;
int* Game:: itemMan;
int  Game:: undoHistory;

QQmlEngine* Game:: qmlMainEngine;
QObject*    Game :: qmlObject;


//Metodos
void Game::setEngine(QQmlEngine* main,QObject* obmain){
    Game:: qmlMainEngine= main;
    Game:: qmlObject=obmain;

}

void Game::changeProp(){
    Game::qmlObject->setProperty("width",1000);

}
