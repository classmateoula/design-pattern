/**
 * 责任链模式
 */

abstract class AbstractLogger {
    static INFO = 1;
    static DEBUG = 2;
    static ERROR = 3;

    protected level: number = 0;

    protected nextLogger?: AbstractLogger;

    setNextLogger(value: AbstractLogger): void {
        this.nextLogger = value;
    }

    logMessage(level: number, message: string): void {
        if(this.level <= level) {
            this.write(message);
        }
        if(this.nextLogger) {
            this.nextLogger.logMessage(level, message);
        }
    }

    protected abstract write(message: string): void;
}

class ErrorLogger extends AbstractLogger {
    constructor(level: number) {
        super();
        this.level = level;
    }

    protected write(message: string): void {
        console.log('error log', message);
    }
}

class FileLogger extends AbstractLogger {
    constructor(level: number) {
        super();
        this.level = level;
    }

    protected override write(message: string): void {
      console.log('file logger', message);
    }
}

class ChainPatternDemo {
    static getChainOfLoggers (): AbstractLogger {
        const errorLogger = new ErrorLogger(AbstractLogger.ERROR);
        const fileLogger = new FileLogger(AbstractLogger.DEBUG);

        errorLogger.setNextLogger(fileLogger);
        return errorLogger;
    }

    static main(): void {
        const loggerChain = this.getChainOfLoggers();
        loggerChain.logMessage(AbstractLogger.INFO, 'this is JOJO info');
        loggerChain.logMessage(AbstractLogger.DEBUG, 'this. debug');
        loggerChain.logMessage(AbstractLogger.ERROR, 'this is error');
    }
}

ChainPatternDemo.main();

export {};

/**
 * 1、降低耦合度。它将请求的发送者和接收者解耦。 
 * 2、简化了对象。使得对象不需要知道链的结构。 
 * 3、增强给对象指派职责的灵活性。通过改变链内的成员或者调动它们的次序，允许动态地新增或者删除责任。 
 * 4、增加新的请求处理类很方便。
 * 
 * 1、不能保证请求一定被接收。 
 * 2、系统性能将受到一定影响，而且在进行代码调试时不太方便，可能会造成循环调用。 
 * 3、可能不容易观察运行时的特征，有碍于除错。
 */
