for (let i = 0; i < 20; i++) {
    if (i % 2 !== 0) { 
          continue;
          console.log('this will not run')
      }
      console.log(i); // 0 2 4 6 8
  }