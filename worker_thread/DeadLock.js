// let balance = 100;

// function withdraw(name, amount) {
//   if (balance >= amount) {
//     console.log(`${name} is withdrawing ${amount}`);
//     // Simulate some delay (like database work)
//     setTimeout(() => {
//       balance -= amount;
//       console.log(`${name} finished. Balance: ${balance}`);
//     }, Math.random() * 100);
//   } else {
//     console.log(`${name} cannot withdraw. Not enough balance.`);
//   }
// }

// // Two "workers" withdraw at the same time
// withdraw("Worker A", 80);
// withdraw("Worker B", 80);


// class Lock {
//   constructor() {
//     this.locked = false;
//   }

//   acquire(name) {
//     return new Promise((resolve) => {
//       const tryAcquire = () => {
//         if (!this.locked) {
//           this.locked = true;
//           console.log(`${name} acquired lock`);
//           resolve();
//         } else {
//           setTimeout(tryAcquire, 100); // keep waiting
//         }
//       };
//       tryAcquire();
//     });
//   }

//   release(name) {
//     console.log(`${name} released lock`);
//     this.locked = false;
//   }
// }

// const lockA = new Lock();
// const lockB = new Lock();

// async function workerA() {
//   await lockA.acquire("Worker A");
//   // simulate some work
//   setTimeout(async () => {
//     console.log("Worker A waiting for Lock B...");
//     await lockB.acquire("Worker A");
//   }, 200);
// }

// async function workerB() {
//   await lockB.acquire("Worker B");
//   // simulate some work
//   setTimeout(async () => {
//     console.log("Worker B waiting for Lock A...");
//     await lockA.acquire("Worker B");
//   }, 200);
// }

// workerA();
// workerB();

// solution of it 

class Lock {
  constructor() {
    this.locked = false;
  }

  acquire(name) {
    return new Promise((resolve) => {
      const tryAcquire = () => {
        if (!this.locked) {
          this.locked = true;
          console.log(`${name} acquired lock`);
          resolve();
        } else {
          setTimeout(tryAcquire, 100); // keep waiting
        }
      };
      tryAcquire();
    });
  }

  release(name) {
    console.log(`${name} released lock`);
    this.locked = false;
  }
}

const lockA = new Lock();
const lockB = new Lock();

async function workerA() {
  await lockA.acquire("Worker A");
  setTimeout(async () => {
    console.log("Worker A waiting for Lock B...");
    await lockB.acquire("Worker A");

    // do some work
    console.log("Worker A done with both locks");

    // release in reverse order
    lockB.release("Worker A");
    lockA.release("Worker A");
  }, 200);
}

async function workerB() {
  await lockB.acquire("Worker B");
  setTimeout(async () => {
    console.log("Worker B waiting for Lock A...");
    await lockA.acquire("Worker B");

    // do some work
    console.log("Worker B done with both locks");

    // release in reverse order
    lockA.release("Worker B");
    lockB.release("Worker B");
  }, 200);
}

workerA();
workerB();
