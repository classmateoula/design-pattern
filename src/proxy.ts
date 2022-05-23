/**
 * 代理模式
 */

interface Image {
    display(): void;
}

class RealImage implements Image {
    constructor(private fileName: string) {
        this.loadFromDisk(fileName);
    }

    display(): void {
        console.log('display', this.fileName);
    }

    loadFromDisk(fileName: string) {
        console.log('加载文件', fileName);
    }
}

class ProxyImage implements Image {
    private realImage?: RealImage;

    constructor(private fileName: string) {}

    display(): void {
        if(!this.realImage) {
            this.realImage = new RealImage(this.fileName);
        }
        this.realImage.display();
    }
}

class ProxyDemo {
    static main(): void {
        const image = new ProxyImage('text.jpg');
        // 从磁盘加载
        image.display();
        console.log('喵喵');
        // 不从磁盘加载
        image.display();
    }
}

ProxyDemo.main();

export {};
