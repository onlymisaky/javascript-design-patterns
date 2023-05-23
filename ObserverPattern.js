class Subject {
  observers = [];

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(data) {
    this.observers.forEach(observer => {
      observer.update(data);
    });
  }

}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} 收到了新邮件：${data}`);
  }
}

const mailService = new Subject();

const userA = new Observer('User A');
const userB = new Observer('User B');

mailService.addObserver(userA);
mailService.addObserver(userB);

mailService.notify('这是一封新邮件，请注意查收！');
