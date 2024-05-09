{
    const repeatString = (text: string, count: number): string => {

        if (count < 0) {
            console.log("Please provide positive value !");
        }

        let result = "";

        for (let i = 0; i < count; i++) {
            result += text;
        }
        return result;
    };
    const targetValue = repeatString("Hello!", 3);
    console.log(targetValue);
}