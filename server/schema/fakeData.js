const UserList = [
    {
        id:1,
        name:"Jhon",
        username:"jhon",
        age:20,
        nationality:"CANADA",
        friends:[
            {
                id:2,
                name:"Pedro",
                username:"PedroTech",
                age:20,
                nationality:"BRAZIL"
            }
        ]
    },
    {
        id:2,
        name:"Pedro",
        username:"PedroTech",
        age:20,
        nationality:"BRAZIL",
        friends:[
            {
                id:1,
                name:"Jhon",
                username:"jhon",
                age:20,
                nationality:"CANADA",
            }
        ]
    },
    {
        id:3,
        name:"Sarah",
        username:"cameron",
        age:25,
        nationality:"USA",
        friends:[
            {
                id:2,
                name:"Pedro",
                username:"PedroTech",
                age:20,
                nationality:"BRAZIL"
            },
            {
                id:5,
                name:"Kelly",
                username:"kelly2019",
                age:5,
                nationality:"CHILE"
            }

        ]
    },
    {
        id:4,
        name:"Rafe",
        username:"rafe123",
        age:60,
        nationality:"GERMANY",
        friends:[{
            id:5,
        name:"Kelly",
        username:"kelly2019",
        age:5,
        nationality:"CHILE"
        }]
    },
    {
        id:5,
        name:"Kelly",
        username:"kelly2019",
        age:5,
        nationality:"CHILE",
        friends:[{
            id:4,
            name:"Rafe",
            username:"rafe123",
            age:60,
            nationality:"GERMANY"
        }]
    }
     
];

const MovieList = [
    {
        id:1,
        name:"movie1",
        yearOfPublication:2019,
        isInTheaters:true,
    },
    {
        id:2,
        name:"movie2",
        yearOfPublication:2009,
        isInTheaters:true,
    },
    {
        id:3,
        name:"movie3",
        yearOfPublication:1981,
        isInTheaters:true,
    },
    {
        id:4,
        name:"movie4",
        yearOfPublication:2029,
        isInTheaters:false,
    },
]

module.exports = {UserList, MovieList};