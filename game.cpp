#include "game.h"

Game::Game(QObject* parent)
    : QObject(parent)
{
    /*
    QQmlEngine engine;
    QQmlComponent component(&engine, "qrc:/GameView.qml");
    object = component.create();
    */
}
void Game::startNewGame() {
    qDebug()<<"Entrou na função start";
    QQmlEngine engine;
    QQmlComponent component(&engine, "qrc:/GameView.qml");
    QObject *object = component.create();

    // go to playing state
    object->setProperty("state", "playing");


    if(QQmlProperty::read(object, "currentLevel").toInt()<0){
        object->setProperty("currentLevel", 0);
        qDebug()<<"Nivel 0";
    }
    object->setProperty("gameCanvas.isAnimated", false);


    // reset gameView.currentLevel after the player has won the game
    if(QQmlProperty::read(object, "currentLevel").toInt() >= QQmlProperty::read(object, "levels.lenght").toInt())
        object->setProperty("currentLevel", 0);


    //undoHistory = new Array();
    undoHistoryStep = 0;
    QQmlEngine engine2;
     //QJSValue deleteBlocks = engine2.evaluate(QtShell::cat("game.js") + ";deleteBlocks");
     QJSValue deleteBlocks = engine2.evaluate("game.js;deleteBlocks");
     deleteBlocks.call();

    // reset variables
    object->setProperty("gameCanvas.addBlockSize", 0);
    object->setProperty("gameCanvas.addOffsetX", 0);
    object->setProperty("gameCanvas.addOffsetY", 0);

    // calculate board size
    object->setProperty("gameCanvas.numOfRows", QQmlProperty::read(object, "levels[gameView.currentLevel].length").toInt());
    object->setProperty("gameCanvas.numOfColumns",0);
    int numRows = QQmlProperty::read(object, "gameCanvas.numOfRows").toInt();

    int numColumns = 0;
    for (int i = 0; i < numRows; ++i) {

        numColumns = QQmlProperty::read(object, "gameCanvas.numOfColumns").toInt();
        int levels =  QQmlProperty::read(object, "levels[gameView.currentLevel][i].length").toInt();
        object->setProperty("gameCanvas.numOfColumns", std::max(numColumns, levels) );
    }

    numColumns = QQmlProperty::read(object, "gameCanvas.numOfColumns").toInt();
    numRows = QQmlProperty::read(object, "gameCanvas.numOfRows").toInt();
    maxIndex = numRows*numColumns;

    QQmlEngine engine3;
     //QJSValue initBoard = engine3.evaluate(QtShell::cat("game.js") + ";deleteBlocks");
    QJSValue initBoard = engine3.evaluate("game.js;deleteBlocks");
     initBoard.call();

    object->setProperty("gameCanvas.isAnimated", true);
    qDebug()<<"Passou 23";
}
