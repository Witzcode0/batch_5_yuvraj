const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

const schema = buildSchema(`
  type Query {
    hello: String
    student(id: Int!): Student
    students: [Student]
  }

  type Student {
    id: Int
    name: String
    age: Int
  }

  type Mutation {
    createStudent(id: Int!, name: String, age: Int): String
    updateStudent(id: Int!, name: String, age: Int): Student
    deleteStudent(id: Int!): String
  }
`);

const studentsData = [
  { id: 1, name: "Brijesh", age: 22 },
  { id: 2, name: "Tisha", age: 20 },
  { id: 3, name: "Rahul", age: 25 }
];


const root = {
  // Welcome message
  hello: () => "Welcome to GraphQL API 😎",

  // Get a single student by ID
  student: ({ id }) => studentsData.find(student => student.id === id),

  // Get all students
  students: () => studentsData,

  // Create a new student
  createStudent: ({ id, name, age }) => {
    studentsData.push({ id, name, age });
    return "Student added successfully ✅";
  },

  // Update an existing student
  updateStudent: ({ id, name, age }) => {
    const student = studentsData.find(s => s.id === id);
    if (!student) throw new Error("Student Not Found ❌");

    if (name) student.name = name;
    if (age) student.age = age;

    return student;
  },

  // Delete a student by ID
  deleteStudent: ({ id }) => {
    const index = studentsData.findIndex(s => s.id === id);
    if (index === -1) throw new Error("Student Not Found ❌");

    studentsData.splice(index, 1);
    return "Student Deleted Successfully ✅";
  }
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // Enables GraphiQL UI
  })
);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 GraphQL Server running at http://localhost:${PORT}/graphql`);
});
