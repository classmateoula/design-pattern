/**
 * 前端控制器模式 Front Controller
 */

class HomeView {
    show(): void{
        console.log('display home page!');
    }
}

class StudentView {
    show(): void {
        console.log('display student page');
    }
}

class Dispatcher {
    private studentView = new StudentView();
    private homeView = new HomeView();
    dispatch(req: string): void {
        if(req === 'STUDENT') {
            this.studentView.show();
        } else {
            this.homeView.show();
        }
    }
}

class FrontController {
    private dispatcher = new Dispatcher();
    private isAuthenticUser(): boolean {
        console.log('用户确实牛逼');
        return true;
    }
    trackRequest(req: string): void {
        console.log('page request: ' + req);
    }
    dispatchRequest(req: string): void {
        this.trackRequest(req);
        if(this.isAuthenticUser()) {
            this.dispatcher.dispatch(req);
        }
    }
}

class Demo {
    static main(): void {
        const c = new FrontController();
        c.dispatchRequest('HOME');
        c.dispatchRequest('STUDENT');
    }
}

Demo.main();

export {};
