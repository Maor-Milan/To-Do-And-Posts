export class Person {
    constructor(
        public Name:string,
        public Email:string,
        public Street:string,
        public City:string,
        public Zipcode:string,
        public Tasks:[{TaskID: Number, TaskTitle: String, Completed: String}],
        public Posts:[{ PostID: Number, PostTitle: String, Body: String }]


    ){}
}
