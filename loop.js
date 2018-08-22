// node myfile.js

// new timers, tasks, operation are recotded from myFile running
myFile.runContents();

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

function shouldContinue() {
  // check one: any pending setTimeout, setInterval, setImmediate

  // check two: any pending os taks? (like servier listening to some port);

  // check three: anyt pending long running operations (like fs module);
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}
// entire body executes in one tick
while(shouldContinue()) {
  // 1) Node looks at pending timers and sees if any functions are ready to be called;
  // 2) Node looks at pending os tasks and pending operations and calls relevant tasks

  // 3) Pause execution. Continue when...
  // - a new pending os task done
  // - a new pending operation is done
  // - a timer is about to complete


  // 4) look at pending timers. Call any setImmediate

  // 5) handle any close events
}





// exit back to terminal