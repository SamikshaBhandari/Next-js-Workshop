import { db } from "@/db";

export async function getUserFromDB() {
    try {
        const [users] = await db.execute("select * from users");
        return users;
    } catch (error) {
        throw error;
    }

}

export async function createUserInDB(newUser: TypeUser) {
    try {
        await db.execute
            ("insert into users (email,username,password) values (?,?,?)",
                [newUser.email, newUser.username, newUser.password]
            )
    } catch (error) {
        throw error;
    }
}
export async function getUserByEmail(newLogin: LoginTypeUser) {
    try {
        const [validUser] = await db.execute("select * from users where email=?",
            [newLogin.email]
        )
        return validUser;
    } catch (error) {
        throw error;
    }

}


