#ifndef GAME_H
#define GAME_H

#include <QObject>
#include <QQmlEngine>
#include <QQmlComponent>
#include <QQmlProperty>
#include <QDebug>
#include <vector>
#include<iostream>
#include <algorithm>
//new comment
class Game: public QObject {
    Q_OBJECT

public:
    explicit Game(QObject *parent = 0);

    //int index(int column, int row);
    Q_INVOKABLE void startNewGame();

    QObject *object =0;
    //var boardItems; // list of floor, goal and border items on the field
    int maxIndex = 0; // number of cells in the current level's field = gameCanvas.numOfColumns * gameCanvas.numOfRows
    //var board; // array containing the description of the current level's board
    int numOfGoals = 0; // number of goal items (= number of objects)
    int numOfTreasures = 0; // number of objects already on a goal item
    //var itemObjects; // list of object items on the field
    //var itemMan; // man item
    //var undoHistory; // list of moves of the man and whether the man pushed an object on each move
    std::vector<int> undoHistory;
    int undoHistoryStep; // number of the current step in the undo history

};

#endif // GAME_H
