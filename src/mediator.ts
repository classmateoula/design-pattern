/**
 * 中介者模式
 */

class User {
    constructor(private name: string) {}
    getName() {
        return this.name;
    }
    setName(v: string) {
        this.name = v;
    }
    sendMessage(message: string): void {
        ChatRoom.showMessage(this, message);
    }
}

class ChatRoom {
    static showMessage(user: User, message: string): void {
        console.log(`${user.getName()} 正在广播:${message}`);
    }
}

class Demo {
    static main(): void {
        const jojo = new User('jojo');
        const hengXing = new User('heng xing');

        jojo.sendMessage('我最帅');
        hengXing.sendMessage('我知道，我最美');
    }
}

Demo.main();

export {};
