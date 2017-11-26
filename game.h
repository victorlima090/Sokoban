#ifndef GAME_H
#define GAME_H
#include <QGuiApplication>
#include <QQuickView>
#include <QQmlEngine>
#include <QQmlContext>
#include <QObject>
#include <vector>
#include <iostream>

class Game : public QObject //teste d pull
{
    Q_OBJECT

public:
    int* boardItems; //não sei que tipo ainda
    int maxIndex;
   // static int* board;//nao sei se tipo int ainda
    std::vector<std::vector<int>> board; //matriz de int [gameCanvas.numOfRows][gameCanvas.numOfColumns]
    int numOfGoals;
    int numOfTreasures;
    int* itemObjects;//nao sei se tipo int ainda
    QObject itemMan;//nao sei se tipo int ainda - acho que é o objeto man (acho!)
    int* undoHistory;

    void createBoard();
    bool createBlock(int column, int row);
    void deleteBlocks();
    int index(int column, int row);
    void testLevelWon();
    void setZooming(bool isZooming);
    int findItemObjectNumber(int column, int row);
    void changeManPosition(int oldX, int oldY, int newX, int newY, int dx, int dy);
    int changeObjectPosition(int which, int oldX, int oldY, int newX, int newY);

    static QQmlEngine* qmlMainEngine;
    static QObject* qmlObject;

    static void setEngine(QQmlEngine* main,QObject* ob);


    explicit Game(QObject *parent=0);
    //INVOKABLE
    Q_INVOKABLE static void changeProp();
//    Q_INVOKABLE static void changeNum(int n);
//    Q_INVOKABLE static int getNum();

signals:
private:

};

#endif // GAME_H
