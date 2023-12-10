                                        +-------------------------+
                                        |       Frontend/UI       |
                                        +-------------------------+
                                                 |
                                   +--------------------------------------+
                                   |             API Gateway               |
                                   | (Handles external and internal       |
                                   | communication, authentication, and   |
                                   |            request routing)          |
                                   +-------------------------|------------+
                                                               |
            +----------------------+-------------------------|------------------------+
            |                      |                         |                        |
    +---------------+    +---------------+           +---------------+    +---------------+
    |    Java MS1   |    |    Java MS2   |           |   Node.js MS1  |    |   Node.js MS2  |
    | (Spring Boot) |    | (Spring Boot) |           | (Express.js)   |    | (Express.js)   |
    +---------------+    +---------------+           +---------------+    +---------------+
         |        |          |        |                     |                   |
  +----------------+ +----------------+             +----------------+ +----------------+
  |    Aurora      | |   DynamoDB     |             |     Redis      | |    MongoDB     |
  | (Relational DB)| | (NoSQL DB)     |             | (Cache DB)     | | (Document DB)  |
  +----------------+ +----------------+             +----------------+ +----------------+