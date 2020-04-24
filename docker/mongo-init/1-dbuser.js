db.createUser(
        {
            user: "wolf",
            pwd: "wolfpassword",
            roles: [
                {
                    role: "readWrite",
                    db: "wolf"
                }
            ]
        }
);