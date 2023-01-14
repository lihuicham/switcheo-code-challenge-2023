// Problem 1 - Three ways to sum to n 

// ASSUMPTION for this problem - n is a non-negative integer

var sum_to_n_a = function(n) {
    // Solution 1 - Iteration using for loop or while loop  
    let ans = 0; 
    for (let i = 1; i <= n; i++) {
        ans += i; 
    }
    return ans;

    // Alternatively, we can use while loop too
    // let ans = 0; 
    // let i = 0;
    // while(i <= n) {
    //     ans += i;
    //     i++;
    // } 
    // return ans;
};

var sum_to_n_b = function(n) {
    // Solution 2 - Summation formula 
    let ans = (n * ( n + 1 )) / 2;
    return ans;
};

var sum_to_n_c = function(n) {
    // Solution 3 - recursion 
    if (n === 0) {
        return n;
    } 
    return n + sum_to_n_c(n -1);
};

// Testing - all should give the same output 
console.log("Answer A : " + sum_to_n_a(5))
console.log("Answer B : " + sum_to_n_b(5))
console.log("Answer C : " + sum_to_n_c(5))
