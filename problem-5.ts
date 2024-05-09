{
    interface Student {
        name: string;
        age: number;
        grades: number[];
    }
    const calculateAverageGrade = (student: Student) => {
        const totalGrade = student.grades.reduce(
            (total, grade) => total + grade,
            0
        );
        const result = totalGrade / student.grades.length;
        return result;
    };


    // Sample Input:
    const student1: Student = {
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90],
    };

    const averageGrade = calculateAverageGrade(student1);
    console.log(averageGrade);
}