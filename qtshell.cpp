#include <QtCore>
#include <QDir>
#include <QQueue>
#include <QCommandLineParser>
//#include "priv/qtshellpriv.h"

#ifdef WIN32
#include <sys/utime.h>
#else
#include <utime.h>
#endif

#include "qtshell.h"

//using namespace QtShell::Private;

QString QtShell::cat(const QString &file)
{
    QString path = realpath_strip(file);

    QFileInfo info(path);

    if (!info.exists()) {
        qWarning() << QString("cat: %1: No such file or directory").arg(file);
        return "";
    }

    QFile f(path);
    if (!f.open(QIODevice::ReadOnly)) {
        qWarning() << QString("cat: %1: %2").arg(f.errorString()).arg(file);
        return "";
    }

    QByteArray content = f.readAll();

    return content;
}
