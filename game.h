#ifndef GAME_H
#define GAME_H
#include <QGuiApplication>
#include <QQuickView>
#include <QQmlEngine>
#include <QQmlContext>
#include <QObject>

class Game : public QObject //teste d pull
{
    Q_OBJECT

public:
    static int* boardItems;//nao sei se tipo int ainda
    static int maxIndex;
    static int* board;//nao sei se tipo int ainda
    static int numOfGoals;
    static int numOfTreasures;
    static int* itemObjects;//nao sei se tipo int ainda
    static int* itemMan;//nao sei se tipo int ainda
    static int* undoHistory;
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
