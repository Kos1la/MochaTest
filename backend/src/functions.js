

 const multiply = (x, y) => {
    return x * y
}

const multiplyAsync = (a,b,callback) => {
    setTimeout(() => {
        callback(a*b)
    })
}

export  { multiply, multiplyAsync };
