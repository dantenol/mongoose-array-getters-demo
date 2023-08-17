## Bug replication for mongoose
This is a replication of an unexpected behaviour I found in mongoose.
Basically the schema getter is fired every time the value is accessed.

# How to run
First start your mongodb server on port 27017.

- yarn install
- npx ts-node readUser.ts

running on M1 Mac, Node v18.17, MongoDB v6.0.6