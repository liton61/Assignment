{
    const findLargestNumber = (numberArray: number[]): number | undefined => {

        if (numberArray.length === 0) {
            console.log("Your Array is empty");
        }

        let largestNumber = numberArray[0];
        for (let i = 1; i < numberArray.length; i++) {
            if (largestNumber < numberArray[i]) {
                largestNumber = numberArray[i];
            }
        }
        return largestNumber;
    };

    const result = findLargestNumber([10, 5, 8, 20, 3]);
    console.log(result);
}