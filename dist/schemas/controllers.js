"use strict";
/**
 * @openapi
 * /api/v1/users:
 *      get:
 *          tags: [Users]
 *          summary: List all users
 *          operationId: listAllUsers
 *          responses:
 *              "200":
 *                  description: Succesful Operation
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/UserGet'
 *      post:
 *          tags: [Users]
 *          summary: Create a new User
 *          operationId: createUser
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UserPost'
 *              required: true
 *          responses:
 *              "200":
 *                  description: Succesful Operation
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: boolean
 * /api/v1/users/{id}:
 *      get:
 *          tags: [Users]
 *          summary: Gets a user by id
 *          operationId: getUserById
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: integer
 *                required: true
 *                description: The user id
 *          responses:
 *              "200":
 *                  description: Succesful Operation
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/UserGet'
 *              "400":
 *                  description: Error in the operation
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/ErrorResponse'
 *              "404":
 *                  description: Resource not found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/ErrorResponse'
 *              "500":
 *                  description: Server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/ErrorResponse'
 *      put:
 *          tags: [Users]
 *          summary: Updates a user
 *          operationId: updateUser
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: integer
 *                required: true
 *                description: The user id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UserPost'
 *          responses:
 *              "200":
 *                  description: Succesful Operation
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: boolean
 *              "404":
 *                  description: Resource not found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/ErrorResponse'
 *              "500":
 *                  description: Server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/ErrorResponse'
 *      delete:
 *          tags: [Users]
 *          summary: Delete user
 *          operationId: deleteUserById
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: integer
 *                required: true
 *                description: The user id
 *          responses:
 *              "200":
 *                  description: Succesful Operation
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: boolean
 *              "404":
 *                  description: Resource not found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/ErrorResponse'
 *              "500":
 *                  description: Server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/ErrorResponse'
 */ 
