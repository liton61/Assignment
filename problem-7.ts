{
    const logString = (param: unknown): void => {
        if (typeof param === "string") {
            console.log(param);
        } else {
            console.log("Input is not a string");
        }
    };

    // Input String
    logString("Hello, TypeScript!");

    // Input Number
    logString(42);
}