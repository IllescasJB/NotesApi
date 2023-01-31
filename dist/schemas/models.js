"use strict";
/**
 * @openapi
 * components:
 *  schemas:
 *      UserGet:
 *          type: object
 *          required:
 *              - id
 *              - name
 *              - email
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The auto-generated id of the user
 *              name:
 *                  type: string
 *                  description: User's name
 *              email:
 *                  type: string
 *                  description: User's email
 *      UserPost:
 *          type: object
 *          required:
 *              - name
 *              - email
 *          properties:
 *              name:
 *                  type: string
 *                  description: User's name
 *              email:
 *                  type: string
 *                  description: User's email
 *      ErrorResponse:
 *          type: object
 *          properties:
 *              message:
 *                  type: string
 *                  description: Message error
 *              status:
 *                  type: integer
 *                  description: Http status code
 *              path:
 *                  type: string
 *                  description: Url path
 */ 
