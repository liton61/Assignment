{
    const filterEvenNumbers = (numberArray: number[]): number[] => {
        const evenNumberArray = numberArray.filter((even) => even % 2 === 0);
        return evenNumberArray;
    };

    const result = filterEvenNumbers([1, 2, 3, 4, 5, 6, 8]);
    console.log(result);
}