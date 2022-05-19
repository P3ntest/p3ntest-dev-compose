db.createUser({
  user: "urls",
  pwd: "secret",
  roles: [
    {
      role: "readWrite",
      db: "urls",
    },
  ],
});
