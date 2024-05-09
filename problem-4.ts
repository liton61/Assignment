{
    const reverseArray = <T>(array: T[]): T[] => {
        return array.reverse();
    };

    const result1 = reverseArray(["cherry", "banana", "apple"]);
    console.log(result1);

    const result2 = reverseArray([30, 20, 10]);
    console.log(result2);
}