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

int Game::index(int column, int row) {
    return column + (row * qmlObject->property("numRows").toInt());
}

void Game::createBoard() {
    int numRows = qmlObject->property("numRows").toInt();
    int numColumns = qmlObject->property("numCloumns").toInt();
    board.resize(numRows);
    //board = new Array(gameCanvas.numOfRows); //matriz [row][column]
    numOfGoals = 0;
    numOfTreasures = 0;

    for (int row = 0; row < numRows; ++row) {
        board[row].resize(numColumns); //vira uma matriz
        for (int column = 0; column < numColumns; ++column) {
            // 0: outside, 1: inside, 2: border, 3: goal, 4: object, 5: man, 6: object on goal, 7: man on goal
            int currentlevel = qmlObject->property("currentLevel");
            QString level = qmlObject->property("levels").toString();
           // char boardElement = (column< level[currentlevel][row].lentgh ? )

            //var boardElement = (column < gameView.levels[gameView.currentLevel][row].length) ?
            //            gameView.levels[gameView.currentLevel][row].charAt(column) : ' ';
            switch (boardElement) { //mapeia a matriz com os elementos existentes, de acordo com o nivel
                case ' ': board[row][column] = 1; break;
                case '#': board[row][column] = 2; break;
                case '.': board[row][column] = 3; ++numOfGoals; break;
                case '$': board[row][column] = 4; break;
                case '@': board[row][column] = 5; break;
                case '*': board[row][column] = 6; ++numOfGoals; ++numOfTreasures; break;
                case '+': board[row][column] = 7; ++numOfGoals; break;
                default: board[row][column] = 0;
            }
        }
    }
    // create outside area
    // FIXME: find a better algorithm for this
    for (int row = 0; row < numRows; ++row) {
        for (int column = 0; column < numColumns && board[row][column] == 1; ++column) {
            board[row][column] = 0;
        }
        for (int column = numColumns-1; column >= 0 && board[row][column] == 1; --column) {
            board[row][column] = 0;
        }
    }
    for (int column = 0; column < numColumns; ++column) {
        for (int row = 0; row < numRows && board[row][column] < 2; ++row) {
            board[row][column] = 0;
        }
        for (int row = numRows-1; row >= 0 && board[row][column] < 2; --row) {
            board[row][column] = 0;
        }
    }
}

void Game::deleteBlocks() { //traduzir, board items? item man?
    for (int i = 0; i < maxIndex; ++i) {
        if (boardItems[i] != null)
        {
            boardItems[i].opacity = 0;
            boardItems[i].destroy();
        }
    }
    for (int i = 0; i < numOfGoals; ++i) { // numOfGoals = number of objects
        if (itemObjects[i] != null)
        {
            itemObjects[i].opacity = 0;
            itemObjects[i].destroy();
        }
    }
    if (itemMan != null)
        itemMan.opacity = 0;
}

bool Game::createBlock(int column, int row) { //itemMan?
    std::string blockSet[] = {"ItemFloor.qml", "ItemGoal.qml", "ItemObject.qml", "ItemMan.qml", "ItemBorder0.qml", "ItemBorder1.qml", "ItemBorder2.qml", "ItemBorder3.qml"};
    int which = board[row][column]; // 0: outside, 1: inside, 2: border, 3: goal, 4: object, 5: man, 6: object on goal, 7: man on goal
    std::string item;

    if (which <= 0)
        return true;

    switch (which) {
        case 1:
        case 4: // when the spot has an object on it, put a floor item on this place and separately create the object below
        case 5: // when the spot has the man on it, put a floor item on this place and separately create the man below
        default:
            item = blockSet[0];
            break;
        case 3:
        case 6: // when the spot has an object on it, put a goal item on this place and separately create the object below
        case 7: // when the spot has the man on it, put a goal item on this place and separately create the man below
            item = blockSet[1];
            break;
        case 2: // border
            if (board[row][column-1] != 2 && board[row][column+1] == 2)
                item = blockSet[4];
            else if (board[row][column-1] == 2 && board[row][column+1] == 2)
                item = blockSet[5];
            else if (board[row][column-1] == 2 && board[row][column+1] != 2)
                item = blockSet[6];
            else
                item = blockSet[7];
            break;
    }

    QObject dynamicObject = QMetaObject::invokeMethod(qmlObject, "createBlockObject(item, column, row)");
    if (dynamicObject == null)
        return false;
    boardItems[index(column, row)] = dynamicObject;

    if (which == 4 || which == 6) { // create the object

        dynamicObject = QMetaObject::invokeMethod(qmlObject, "createBlockObject(blockSet[2], column, row");
        if (dynamicObject == null)
            return false;
        dynamicObject.z = 1;
        itemObjects[itemObjects.length] = dynamicObject;
    } else if (which == 5 || which == 7) { // create the man
        if (itemMan == null) {
            dynamicObject = QMetaObject::invokeMethod(qmlObject,"createBlockObject(blockSet[3], column, row");
            if (dynamicObject == null)
                return false;
            dynamicObject.z = 1;
            itemMan = dynamicObject;
        } else { // the man already exists from a previous level, reposition him
            itemMan.column = column;
            itemMan.row = row;
            itemMan.opacity = 1;
        }
    }
    return true;
}

void Game::setZooming(bool isZooming) {
    int numRows = qmlObject->property("numRows").toInt();
    int numColumns = qmlObject->property("numCloumns").toInt();
    for (int row = 0; row < numRows; ++row) {
        for (var column = 0; column < numColumns; ++column) {
            if (board[row][column] > 0)
                boardItems[index(column, row)].isZooming = isZooming;
        }
    }
    for (int i = 0; i < numOfGoals; ++i) // numOfGoals = number of objects
        itemObjects[i].isZooming = isZooming;
    if (itemMan != null)
        itemMan.isZooming = isZooming;
}

void Game::testLevelWon() {
    if (numOfTreasures == numOfGoals) {
        if(qmlObject->property("currentLevel").toInt()>= qmlObject->property("levels").toInt().lenght -1)
            qmlObject->setProperty("state", "gamewon");
        else
            qmlObject->setProperty("state", "levelwon");
    }
}

int Game::findItemObjectNumber(int column, int row) {
    int which = -1;
    for (int i = 0; i < itemObjects.length; ++i) {
        if (itemObjects[i].column == column && itemObjects[i].row == row) {
            which = i;
            break;
        }
    }
    return which;
}

void Game::changeManPosition(int oldX, int oldY, int newX, int newY, int dx, int dy) {
    board[newY][newX] += 4; // 1: inside -> 5: man; 3: goal -> 7: man on goal
    board[oldY][oldX] -= 4; // 5 -> 1; 7 -> 3
    QMetaObject::invokeMethod(qmlObject, "recenterMan("+newX +","+ newY+","+ dx+","+ dy+")");
}

int Game::changeObjectPosition(int which, int oldX, int oldY, int newX, int newY) {
    if (board[oldY][oldX] == 6) // if object previously on goal
        --numOfTreasures;
    board[newY][newX] += 3; // 1: inside -> 4: object; 3: goal -> 6: treasure
    board[oldY][oldX] -= 3; // 4 -> 1; 6 -> 3
    itemObjects[which].column = newX;
    itemObjects[which].row = newY;
    if (board[newY][newX] == 6) // if object now on goal
        ++numOfTreasures;
}

