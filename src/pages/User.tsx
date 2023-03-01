interface Props{
    name:string;
    email: string;
    age:number;
    friends : string[];
    gender?:Gender; //TO INDICATE THAT THIS PROPERTY IS OPTIONAL
};

export enum Gender {
    Female = "Female", 
    Male = "Male"
}

export const User = (props:Props) => {

    return (
        <div className="col-6">
            <span>Name: {props.name}</span> <br />
            <span>Email: {props.email}</span> <br />
            <span>Age: {props.age}</span> <br />
            <span>Gender: {props?.gender}</span> <br />

            {props.friends.map((friend:string) => {
                return <span>{friend},</span>;
            })};
            <br /><br />
        </div>
      
    );
};