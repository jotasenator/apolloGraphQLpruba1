const { UserList, MovieList } = require("./fakeData")
const _ = require("lodash")



const resolvers = {
    Query:{
        users:()=>{
             return UserList;
        },      
        user:(parent,args)=>{
            const id = args.id;
            const user = _.find(UserList,{id:Number(id)});
            return user;
        },
        movies:()=>{
            return MovieList;
        },
        movie:(parent,args)=>{
            const name = args.name;
            const movie = _.find(MovieList,{name});
            return movie;             
        }  
    },
    User:{
        favoriteMovies: ()=>{
            return _.filter(MovieList,(movie)=>movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010);
        }
    },

    Mutation:{
        createUser: (parent, args)=>{ 
            const newUser = args.input;
            console.log(newUser);
            const lastId = UserList[UserList.length - 1].id;
            newUser.id = lastId + 1;
            UserList.push(newUser);
            return newUser;
        },
        updateUserName: (parent, args)=>{ 
            const {id,newUserName}=args.input;
            let userUpdated;
            UserList.forEach((user) =>{
                if(user.id === Number(id)){
                    user.username = newUserName;
                    userUpdated = user;
                }
            });
            return userUpdated;             
        },
    }
}

module.exports = {resolvers}