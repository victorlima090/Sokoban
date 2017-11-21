#include "game.h"

Game::Game(QObject* parent)
    : QObject(parent)
{
    QQmlEngine engine;
    QQmlComponent component(&engine, "GameView.qml");
    *object = component.create();
}
void Game::startNewGame() {
    qDebug()<<"Entrou na função start";
    // go to playing state
    //gameView.state = "playing"
    object->setProperty("state", "playing");


    //if (gameView.currentLevel < 0)
    if(QQmlProperty::read(object, "gameView.currentLevel").toInt()<0)
        //gameView.currentLevel = 0;
        object->setProperty("currentLevel", 0);
    //gameCanvas.isAnimated = false;
    object->setProperty("gameCanvas.isAnimated", false);
    qDebug()<<"Passou 2";

    // reset gameView.currentLevel after the player has won the game
    //if (gameView.currentLevel >= gameView.levels.length)
    if(QQmlProperty::read(object, "gameView.currentLevel").toInt() >= QQmlProperty::read(object, "gameView.levels.lenght").toInt())
        //gameView.currentLevel = 0;
        object->setProperty("currentLevel", 0);


    //undoHistory = new Array();
    //undo
    undoHistoryStep = 0;
    QQmlEngine engine2;
     //QJSValue deleteBlocks = engine2.evaluate(QtShell::cat("game.js") + ";deleteBlocks");
     QJSValue deleteBlocks = engine2.evaluate("game.js;deleteBlocks");
        //value.call(); // Print "Hello"
     deleteBlocks.call();

    //deleteBlocks(); // delete blocks from previous game

    // reset variables
    /*
    gameCanvas.addBlockSize = 0;
    gameCanvas.addOffsetX = 0;
    gameCanvas.addOffsetY = 0;
    */
    object->setProperty("gameCanvas.addBlockSize", 0);
    object->setProperty("gameCanvas.addOffsetX", 0);
    object->setProperty("gameCanvas.addOffsetY", 0);

    // calculate board size
    //gameCanvas.numOfRows = gameView.levels[gameView.currentLevel].length;
    object->setProperty("gameCanvas.numOfRows", QQmlProperty::read(object, "levels[gameView.currentLevel].length").toInt());
    //gameCanvas.numOfColumns = 0;
    object->setProperty("gameCanvas.numOfColumns",0);
    int numRows = QQmlProperty::read(object, "gameCanvas.numOfRows").toInt();
    /*
    for (var i = 0; i < gameCanvas.numOfRows; ++i) {
        gameCanvas.numOfColumns = Math.max(gameCanvas.numOfColumns, gameView.levels[gameView.currentLevel][i].length);
    }*/
    int numColumns = 0;

    for (int i = 0; i < numRows; ++i) {

        numColumns = QQmlProperty::read(object, "gameCanvas.numOfColumns").toInt();
        int levels =  QQmlProperty::read(object, "levels[gameView.currentLevel][i].length").toInt();
        object->setProperty("gameCanvas.numOfColumns", std::max(numColumns, levels) );
    }


    //maxIndex = gameCanvas.numOfRows * gameCanvas.numOfColumns;

    numColumns = QQmlProperty::read(object, "gameCanvas.numOfColumns").toInt();
    numRows = QQmlProperty::read(object, "gameCanvas.numOfRows").toInt();
    maxIndex = numRows*numColumns;

    QQmlEngine engine3;
     //QJSValue initBoard = engine3.evaluate(QtShell::cat("game.js") + ";deleteBlocks");
    QJSValue initBoard = engine3.evaluate("game.js;deleteBlocks");
     initBoard.call();

    //initBoard(); // initialize board
    //gameCanvas.isAnimated = true;
    object->setProperty("gameCanvas.isAnimated", true);

}
