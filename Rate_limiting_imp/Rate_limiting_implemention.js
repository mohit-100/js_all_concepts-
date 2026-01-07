// 1️⃣ Fixed Window Counter (Simplest)
// How it works
// Divide time into fixed windows (e.g., 1 minute)
// Count requests in that window
// Example:
// Window: 12:00–12:01
// Limit: 100 requests
// At 12:01 → counter resets
class RateLimiter {
  constructor(limit, windowSizeInMs) {
    this.limit = limit;                 // max requests
    this.windowSize = windowSizeInMs;   // time window
    this.windowStart = Date.now();      // window start time
    this.reqCount = 0;                  // request counter
  }

  getRequest() {
    const now = Date.now();
    console.log(now);
    console.log("start->",this.windowStart)

    // check if window expired
    if (now - this.windowStart >= this.windowSize) {
      this.windowStart = now;   // reset window
      this.reqCount = 0;        // reset counter
    }

    // check limit
    if (this.reqCount < this.limit) {
      this.reqCount++;
      console.log("Request allowed");
    } else {
      console.log("Rate limit exceeded");
    }
  }
}

// Example usage
const limiter = new RateLimiter(5, 60 * 1000); // 5 requests per minute

limiter.getRequest();
limiter.getRequest();
